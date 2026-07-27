import { NextRequest, NextResponse } from 'next/server';

// Rate limit: простое решение через Map (на продакшене лучше Redis/Upstash)
const rateLimit = new Map<string, number>();

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
    const { name, contact, website, budget } = body;

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
    if (!budget || typeof budget !== 'string') {
      errors.push('Budget range is required');
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join('; ') }, { status: 400 });
    }

    // Санитизация
    const sanitized = {
      name: name.trim().slice(0, 100),
      contact: contact.trim().toLowerCase().slice(0, 200),
      website: website.trim().slice(0, 300),
      budget: budget.trim(),
    };

    // --- Отправка в webhook ---
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('WEBHOOK_URL is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanitized),
    });

    if (!webhookResponse.ok) {
      console.error(`Webhook failed: ${webhookResponse.status}`);
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
