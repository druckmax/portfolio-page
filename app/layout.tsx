import { ContextProvider } from '@/app/context/Context';
import type { ReactNode } from 'react';
import './globals.scss';
import './App.scss';

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
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
