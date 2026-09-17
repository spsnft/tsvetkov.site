import { T } from '@/src/theme/tokens';

// Derives the section outer-padding CSS (design/reference-v2.html §4) from
// T.home.container, so every homepage v2 section stays wired to the same
// cap/pad numbers instead of re-typing 768/1280/32/48 in each component.
// pad0 = max(0, (viewport − cap) / 2); --pad = pad0 + padExtra.
export function homePadCSS(): string {
  const { tablet, desktop, mobilePad } = T.home.container;
  return `
    padding-left: ${mobilePad};
    padding-right: ${mobilePad};

    @media (min-width: ${tablet.cap}px) {
      padding-left: max(${tablet.padExtra}px, calc((100vw - ${tablet.cap}px) / 2 + ${tablet.padExtra}px));
      padding-right: max(${tablet.padExtra}px, calc((100vw - ${tablet.cap}px) / 2 + ${tablet.padExtra}px));
    }

    @media (min-width: ${desktop.cap}px) {
      padding-left: max(${desktop.padExtra}px, calc((100vw - ${desktop.cap}px) / 2 + ${desktop.padExtra}px));
      padding-right: max(${desktop.padExtra}px, calc((100vw - ${desktop.cap}px) / 2 + ${desktop.padExtra}px));
    }
  `;
}

// pad0 alone (no padExtra) — the Header row uses this directly, the outer
// margin coming from the logo block's and WhatsApp link's own padding
// instead (design/reference-v2.html Header).
export function homePad0CSS(): string {
  const { tablet, desktop } = T.home.container;
  return `
    padding-left: 0;
    padding-right: 0;

    @media (min-width: ${tablet.cap}px) {
      padding-left: max(0px, calc((100vw - ${tablet.cap}px) / 2));
      padding-right: max(0px, calc((100vw - ${tablet.cap}px) / 2));
    }

    @media (min-width: ${desktop.cap}px) {
      padding-left: max(0px, calc((100vw - ${desktop.cap}px) / 2));
      padding-right: max(0px, calc((100vw - ${desktop.cap}px) / 2));
    }
  `;
}

// --pad / --pad0 / --portrait as CSS custom properties instead of applied
// padding — for sections that need pad0 or the cap-derived portrait width
// inside a grid-template-columns track (Hero), not as container padding.
export function homeGridVarsCSS(): string {
  const { tablet, desktop } = T.home.container;
  const tabletPortrait = Math.round(tablet.cap * 0.3);
  const desktopPortrait = Math.round(desktop.cap * 0.3);
  return `
    --pad0: 0px;
    --pad: ${tablet.padExtra}px;
    --portrait: ${tabletPortrait}px;

    @media (min-width: ${tablet.cap}px) {
      --pad0: max(0px, calc((100vw - ${tablet.cap}px) / 2));
      --pad: calc(var(--pad0) + ${tablet.padExtra}px);
      --portrait: ${tabletPortrait}px;
    }

    @media (min-width: ${desktop.cap}px) {
      --pad0: max(0px, calc((100vw - ${desktop.cap}px) / 2));
      --pad: calc(var(--pad0) + ${desktop.padExtra}px);
      --portrait: ${desktopPortrait}px;
    }
  `;
}
