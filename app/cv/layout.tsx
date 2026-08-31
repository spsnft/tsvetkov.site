import type { Metadata } from 'next';

export const metadata: Metadata = {
  formatDetection: { telephone: false },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
