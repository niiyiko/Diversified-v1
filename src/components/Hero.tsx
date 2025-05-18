import React, { useState, useEffect } from 'react';
import { WrenchIcon, ShieldCheck, Clock, Users, Wallet, PenTool as Tool } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const highlights = [
    "Expert Plumbing",
    "Quality Service",
    "Fair Pricing"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % highlights.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-32 md:pt-36 md:pb-48">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading leading-tight">
                Built on Trust. Backed by Experience. <span className="text-gradient">Committed to You.</span>
              </h1>
              
              <div className="h-12 my-4 overflow-hidden">
                {highlights.map((text, index) => (
                  <p 
                    key={index}
                    className={`text-xl md:text-2xl transition-all duration-500 transform ${
                      currentText === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0 absolute'
                    }`}
                  >
                    <span className="font-medium text-primary-500">{text}</span>
                  </p>
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 text-lg max-w-lg mx-auto md:mx-0">
                At Diversified Plumbing Services, we're more than just plumbers — we're a family-owned team rooted in the heart of the Dallas/Fort Worth community. With a legacy of quality craftsmanship and unwavering reliability, we specialize in both residential and light commercial plumbing solutions designed to meet your exact needs.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a href="#request" className="btn btn-primary shadow-lg shadow-primary-900/20">
                  Request Service
                </a>
                <a href="tel:+18174392488" className="btn btn-secondary">
                  Call Now
                </a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="metallic-card p-4 md:p-6 lg:p-8 rounded-xl mt-8 md:mt-0 backdrop-blur-sm bg-dark-900/30">
              <h3 className="text-2xl font-semibold mb-6 font-heading">Why Choose Us?</h3>
              <p className="text-gray-300 mb-8">
                Because we believe in relationships — not transactions. We're proud to be the trusted plumbing partner for homeowners, contractors, and builders across the DFW area. Fair pricing, dependable timelines, and personalized service are just the beginning.
              </p>
              <p className="text-gray-300 mb-8">
                From precision installations to efficient service calls, we bring decades of combined experience and a passion for detail to every project. Whether you're building your dream home or upgrading a commercial space, our mission is simple: deliver exceptional results with integrity, transparency, and care.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-lg p-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Relationship Focused</h3>
                    <p className="text-gray-300">Building lasting partnerships through exceptional service and trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-lg p-3">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Fair & Transparent</h3>
                    <p className="text-gray-300">Upfront pricing with no hidden fees or surprise charges.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary-600 rounded-lg p-3">
                    <Tool className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Expert Craftsmanship</h3>
                    <p className="text-gray-300">Decades of experience delivering precision and quality in every project.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;