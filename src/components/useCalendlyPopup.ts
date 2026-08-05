'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { onCalendlyReady } from '@/src/components/CalendlyScript';

// Если событие готовности от Calendly не пришло за это время — принудительно скрываем спиннер
const POPUP_LOADING_TIMEOUT_MS = 7000;

export function useCalendlyPopup(url: string) {
  const [calendlyReady, setCalendlyReady] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    onCalendlyReady(() => setCalendlyReady(true));
  }, []);

  useEffect(() => {
    const clearPending = () => {
      setPopupLoading(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    // Calendly шлёт postMessage-события (calendly.event_type_viewed и т.д.),
    // как только контент попапа отрисован — это сигнал, что загрузка завершена
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const eventName = (e.data as { event?: string } | undefined)?.event;
      if (typeof eventName === 'string' && eventName.indexOf('calendly.') === 0) {
        clearPending();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openPopup = useCallback(
    (e?: { preventDefault?: () => void }) => {
      e?.preventDefault?.();
      if (typeof window === 'undefined' || !(window as any).Calendly) return;

      setPopupLoading(true);
      (window as any).Calendly.initPopupWidget({ url });

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPopupLoading(false);
        timeoutRef.current = null;
      }, POPUP_LOADING_TIMEOUT_MS);
    },
    [url]
  );

  return { calendlyReady, popupLoading, openPopup };
}
