import React, { useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import Spline from '@splinetool/react-spline';
import { useNavigate, useLocation } from 'react-router-dom';

const OurStory: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBeginClick = () => {
    if (location.pathname !== '/') {
      navigate('/#request');
      return;
    }

    const element = document.getElementById('request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen relative bg-black">
      {/* Story Page Spline Animation */}
      <div 
        className="absolute inset-0 z-20 scale-[1.46] opacity-30" 
        style={{ pointerEvents: 'auto' }}
      >
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/5sNghdWPNZjYy1Bm/scene.splinecode"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative">
        <ScrollReveal>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-center text-white">
              Our Story Begins with <span className="text-gradient">Vision, Grit, and Heart</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-lg font-medium text-white">
                Diversified Plumbing Services was born from a bold idea — a partnership between a determined mother, a forward-thinking daughter, and seasoned plumbing experts. Together, they blended years of experience across investment, contract management, and hands-on plumbing to create something greater than the sum of its parts: a company built on trust, skill, and an unwavering dedication to people.
              </p>
              
              <p className="text-lg font-medium text-white">
                Kathy Caufield took a leap of faith, investing in a dream that would become a thriving, customer-first plumbing business. With the craftsmanship of Chris Cyphers, Shawn Pruitt, Ashley Collins, and the commitment of an exceptional team, Diversified Plumbing Services has grown steadily — not just through quality work, but through lasting relationships.
              </p>
              
              <p className="text-lg font-medium text-white">
                As we expand our team and our reach, we never lose sight of what matters most: you. Every customer, every contractor, every partner has played a role in shaping who we are. And we're just getting started.
              </p>
              
              <div className="pt-8">
                <h2 className="text-3xl font-bold mb-6 font-heading text-white">
                  What We Stand For
                </h2>
                
                <p className="text-lg font-medium text-white mb-6">
                  We are a tight-knit team of qualified professionals with a shared mission: to deliver high-quality residential and small commercial plumbing services with precision, integrity, and care. From initial planning to final installation, we manage each job with the kind of attention to detail that turns first-time clients into lifelong customers.
                </p>
                
                <p className="text-lg font-medium text-white mb-6">
                  We believe in doing right by people — offering fair pricing, clear communication, and craftsmanship that speaks for itself. For us, plumbing is more than pipes and fittings. It's about building trust, solving problems, and showing up when it matters most.
                </p>
                
                <p className="text-lg font-medium text-white">
                  At Diversified Plumbing Services, we're proud to be the team you can rely on — not just for today's job, but for everything that comes next.
                </p>
              </div>
              
              <div className="text-center pt-8">
                <p className="text-xl font-semibold text-white mb-8">
                  Let's build something that lasts.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Begin Button Section */}
      <section className="py-16 relative z-30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center">
              <button 
                onClick={handleBeginClick}
                className="relative inline-block px-12 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 group cursor-pointer"
              >
                <span className="relative z-10">Begin</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default OurStory;