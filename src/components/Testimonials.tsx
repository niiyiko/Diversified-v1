import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Homeowner",
    content: "The team at Diversified Plumbing was professional and efficient. They fixed our water heater issue quickly and explained everything clearly. Highly recommend their services!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Restaurant Owner",
    content: "We've been using Diversified for all our commercial plumbing needs. Their response time is excellent, and they always provide quality workmanship. A reliable partner for our business.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Thomas",
    role: "Property Manager",
    content: "Managing multiple properties requires dependable service providers. Diversified Plumbing has consistently delivered exceptional service for all our plumbing requirements across our properties.",
    rating: 4
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    role: "Homeowner",
    content: "I had an emergency leak on a Sunday evening, and they responded promptly. The technician was knowledgeable and fixed the issue without unnecessary upselling. Fair pricing too!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              What Our <span className="text-primary-500">Clients</span> Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="relative">
          <div 
            ref={testimonialsRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="metallic-card p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-10 h-10 text-primary-500 opacity-80" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary-500' : 'text-gray-600'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-200 mb-6 text-lg italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center mr-4">
                        <span className="font-semibold text-primary-500">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-dark-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;