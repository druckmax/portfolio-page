'use client';
import { useEffect } from 'react';

export default function BackgroundFlip() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 2000; // distance over which flip fully blends
      const progress = Math.min(scrollTop / maxScroll, 1);
      document.documentElement.style.setProperty('--flip-opacity', progress.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
