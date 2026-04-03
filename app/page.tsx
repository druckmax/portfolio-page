import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Work from '@/components/Work/Work';
import BackgroundFlip from './components/BackgroundFlip';
import { createFormToken } from './utils/createFormToken';

export default async function Home() {
  const formToken = await createFormToken();
  return (
    <div className="wrapper">
      <Navbar />
      <BackgroundFlip />
      <Hero />
      <Work />
      <About />
      <Contact formToken={formToken} turnstileSiteKey={process.env.TURNSTILE_SITE_KEY} />
      <Footer />
    </div>
  );
}
