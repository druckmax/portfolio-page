'use client';

import Navbar from '@/app/components/Navbar/Navbar';
import Hero from '@/app/components/Hero/Hero';
import Work from '@/app/components/Work/Work';
import About from '@/app/components/About/About';
import Contact from '@/app/components/Contact/Contact';
import Footer from '@/app/components/Footer/Footer';

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
