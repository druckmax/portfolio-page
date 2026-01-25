'use client';

import About from '@/app/components/About/About';
import Contact from '@/app/components/Contact/Contact';
import Footer from '@/app/components/Footer/Footer';
import Hero from '@/app/components/Hero/Hero';
import Navbar from '@/app/components/Navbar/Navbar';
import Work from '@/app/components/Work/Work';
import BackgroundFlip from './components/BackgroundFlip';

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <BackgroundFlip />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
