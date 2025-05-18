import React, { useEffect } from 'react';
import ScrollReveal from '../utils/ScrollReveal';
import { User } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const teamMembers = [
  {
    name: "Chris Cyphers",
    role: "Responsible Master Plumber",
    description: "With over two decades of experience in both residential and commercial plumbing, Chris brings unparalleled expertise and leadership to every project. His commitment to quality craftsmanship and attention to detail has set the standard for excellence at Diversified Plumbing Services.",
  },
  {
    name: "Ashley Collins",
    role: "Office Manager",
    description: "Ashley's exceptional organizational skills and deep understanding of project management ensure smooth operations across all our services. Her dedication to client satisfaction and efficient project execution has been instrumental in our company's growth.",
  },
  {
    name: "Shawn Pruitt",
    role: "Operations Manager",
    description: "As our operations manager, Shawn expertly manages client relationships and scheduling, ensuring every project runs seamlessly from start to finish. His commitment to customer service excellence helps maintain our high standards of client satisfaction.",
  }
];

const OurTeam: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-screen relative bg-black">
      {/* Team Page Spline Animation */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          pointerEvents: 'auto',
          transform: 'scale(1.5) translateX(-15%)',
          transformOrigin: 'center center'
        }}
      >
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/q6VN8QVRtNIytGvt/scene.splinecode"
        />
      </div>

      <div 
        className="container-custom relative z-20"
        style={{ pointerEvents: 'none' }}
      >
        <ScrollReveal>
          <div style={{ pointerEvents: 'auto' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-center">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
              Our success is built on the dedication and expertise of our team members. Each brings unique skills and experience to deliver exceptional service to our clients.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="metallic-card group overflow-hidden backdrop-blur-sm bg-black/30">
                    <div className="aspect-w-4 aspect-h-3 relative bg-dark-800/50 flex items-center justify-center p-8">
                      <User className="w-24 h-24 text-gray-600" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 font-heading">{member.name}</h3>
                      <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-300">{member.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={400}>
              <div className="text-center mt-16">
                <p className="text-gray-300 text-lg mb-6">
                  Ready to work with our expert team? Get in touch today.
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="tel:+18174392488" 
                    className="btn btn-primary"
                  >
                    Call Now
                  </a>
                  <a 
                    href="#request" 
                    className="btn btn-secondary"
                  >
                    Request Service
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default OurTeam;