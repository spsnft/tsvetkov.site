import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const NOTIFY_EMAIL = 'fedor@tsvetkov.site';

// Rate limit: простое решение через Map (на продакшене лучше Redis/Upstash)
const rateLimit = new Map<string, number>();

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const lastRequest = rateLimit.get(ip);

    if (lastRequest && now - lastRequest < 60_000) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute.' },
        { status: 429 }
      );
    }
    rateLimit.set(ip, now);

    // --- Валидация ---
    const body = await request.json();
    const { name, contact, website, company } = body;

    // --- Honeypot: скрытое поле, боты его заполняют, люди — нет ---
    if (typeof company === 'string' && company.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    const errors: string[] = [];

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.push('Name is required (min 2 characters)');
    }
    if (!contact || typeof contact !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      errors.push('Valid email is required');
    }
    if (!website || typeof website !== 'string' || website.trim().length < 2) {
      errors.push('Website or socials is required');
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join('; ') }, { status: 400 });
    }

    // Санитизация
    const sanitized = {
      name: name.trim().slice(0, 100),
      contact: contact.trim().toLowerCase().slice(0, 200),
      website: website.trim().slice(0, 300),
    };

    // --- Отправка через Resend ---
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Tsvetkov Site <onboarding@resend.dev>';

    const { error: sendError } = await resend.emails.send({
      from: fromAddress,
      to: NOTIFY_EMAIL,
      replyTo: sanitized.contact,
      subject: `New Audit Request from ${sanitized.name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(sanitized.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitized.contact)}</p>
        <p><strong>Website / Socials:</strong> ${escapeHtml(sanitized.website)}</p>
      `,
    });

    if (sendError) {
      console.error('Resend send failed:', sendError);
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
