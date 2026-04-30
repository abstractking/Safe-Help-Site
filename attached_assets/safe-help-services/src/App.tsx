import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import VisualSection from './components/VisualSection/VisualSection';
import GoogleReviews from './components/GoogleReviews/GoogleReviews';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for Safari
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('smoothscroll-polyfill').then(smoothscroll => {
        smoothscroll.polyfill();
      });
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <VisualSection />
        <GoogleReviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
