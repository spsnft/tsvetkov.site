import { T } from '@/src/theme/tokens';

// Derives the section outer-padding CSS (design/system-report-v2.md §4) from
// T.home.container, so every homepage v2 section stays wired to the same
// cap/pad numbers instead of re-typing 768/1280/32/48 in each component.
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
