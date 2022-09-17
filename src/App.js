import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
