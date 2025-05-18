import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PlumbingTips from './components/PlumbingTips';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import OurGuarantee from './pages/OurGuarantee';

function App() {
  useEffect(() => {
    // Prevent default touch events
    const preventDefaultScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    // Only allow wheel events for scrolling
    const handleScroll = (e: WheelEvent) => {
      window.scrollBy({
        top: e.deltaY,
        behavior: 'smooth'
      });
    };

    document.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    document.addEventListener('wheel', handleScroll);

    return () => {
      document.removeEventListener('touchmove', preventDefaultScroll);
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="bg-dark-900 text-gray-100 min-h-screen relative">
        {/* Fixed Spline Animation Background */}
        <div className="spline-container">
          <Spline 
            scene="https://prod.spline.design/KYxzAkTaWg8B1cuK/scene.splinecode"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/our-guarantee" element={<OurGuarantee />} />
            <Route path="/" element={
              <main>
                <Hero />
                <Services />
                <PlumbingTips />
                <Projects />
                <Testimonials />
                <RequestForm />
              </main>
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;