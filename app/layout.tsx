import type { ReactNode } from 'react';
import './App.scss';
import './globals.scss';

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
