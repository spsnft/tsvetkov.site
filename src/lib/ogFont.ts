// Fetches a Google Font as a TTF buffer for use with next/og's ImageResponse.
// Omitting a browser User-Agent makes Google Fonts fall back to a single
// TTF @font-face (instead of the woff2/unicode-range split served to
// modern browsers), which is what satori/ImageResponse needs.
export async function loadGoogleFont(family: string, text: string, weight = 700): Promise<ArrayBuffer> {
  const params = new URLSearchParams({
    family: `${family}:wght@${weight}`,
    text,
  });

  const css = await fetch(`https://fonts.googleapis.com/css2?${params.toString()}`).then((res) => res.text());
  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];

  if (!fontUrl) {
    throw new Error(`Could not resolve font URL for ${family}`);
  }

  const fontRes = await fetch(fontUrl);
  return fontRes.arrayBuffer();
}
