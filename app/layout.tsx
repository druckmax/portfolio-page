import { Albert_Sans, Average_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import './App.scss';
import './globals.scss';

export const metadata = {
  title: 'Max Sommerfeld - Software Engineer',
  description: 'Hi I am Max, a fullstack software engineer',
};

interface RootLayoutProps {
  children: ReactNode;
}

const albertSans = Albert_Sans({
  subsets: ['latin'],
});

const averageSans = Average_Sans({
  weight: ['400'],
  subsets: ['latin'],
});

const fonts = [albertSans.className, averageSans.className];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fonts.join(',')}>
      <head>
        <link rel="icon" href="favicon/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
