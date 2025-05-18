import React from 'react';
import { 
  Home, 
  Building2, 
  Wrench, 
  Camera, 
  PenTool,
  Users,
  ClipboardCheck,
  Droplets,
  Filter
} from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

const services = [
  {
    id: 1,
    title: "New Residential & Small Commercial Construction",
    description: "Specialized expertise in custom home construction, delivering premium plumbing solutions tailored to your unique specifications.",
    icon: Home
  },
  {
    id: 2,
    title: "Remodeling & Renovations",
    description: "Comprehensive plumbing renovations and upgrades to enhance your property's functionality and value.",
    icon: Building2
  },
  {
    id: 3,
    title: "Residential & Small Commercial Service and Repairs",
    description: "Professional repair services for both residential and small commercial properties, ensuring minimal disruption to your daily operations.",
    icon: Wrench
  },
  {
    id: 4,
    title: "Advanced Drain Cleaning & Camera Diagnostics",
    description: "State-of-the-art diagnostic equipment and cleaning techniques to identify and resolve drainage issues efficiently.",
    icon: Camera
  },
  {
    id: 5,
    title: "Custom Plumbing System Design",
    description: "Expert design and installation planning for custom plumbing systems that meet your specific needs and requirements.",
    icon: PenTool
  },
  {
    id: 6,
    title: "Contractor Collaboration",
    description: "Smart, cost-effective solutions through seamless collaboration with contractors and building professionals.",
    icon: Users
  },
  {
    id: 7,
    title: "System Certification & Testing",
    description: "Comprehensive code-compliant system certification and testing to ensure safety and reliability.",
    icon: ClipboardCheck
  },
  {
    id: 8,
    title: "Water Softener Solutions",
    description: "Expert installation and maintenance of water softening systems to reduce hard water problems and extend the life of your appliances.",
    icon: Droplets
  },
  {
    id: 9,
    title: "Water Filtration Systems",
    description: "Advanced water filtration solutions for cleaner, safer water throughout your home or business.",
    icon: Filter
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative -mt-20 pt-32 pb-24">
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              Our <span className="text-primary-500">Specialized</span> Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team understands the demands of both custom and production builds — and we're ready to bring that expertise to your next project.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="metallic-card group h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-dark-700 group-hover:bg-primary-600 rounded-lg p-3 mr-3 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-gray-200" />
                    </div>
                    <h3 className="text-xl font-semibold font-heading">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 flex-grow">{service.description}</p>
                  <div className="mt-4">
                    <a 
                      href="#request" 
                      className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Let's build something great. Call us today.</p>
            <a 
              href="tel:+18174392488" 
              className="btn btn-primary shadow-lg shadow-primary-900/20"
            >
              Call Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;