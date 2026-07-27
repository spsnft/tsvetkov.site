'use client';

import Script from 'next/script';

// Глобальный флаг — true когда скрипт Calendly загрузился и готов к вызову
let isCalendlyLoaded = false;
const onLoadCallbacks: Array<() => void> = [];

export function onCalendlyReady(cb: () => void) {
  if (isCalendlyLoaded) {
    cb();
  } else {
    onLoadCallbacks.push(cb);
  }
}

export const CalendlyScript = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          isCalendlyLoaded = true;
          // Выполняем все отложенные вызовы
          onLoadCallbacks.forEach(cb => cb());
          onLoadCallbacks.length = 0;
        }}
      />
    </>
  );
};
