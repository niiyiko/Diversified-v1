import React, { useState } from 'react';
import ScrollReveal from '../utils/ScrollReveal';

const projects = [
  {
    id: 1,
    title: "Commercial Kitchen Installation",
    category: "Commercial",
    description: "Complete plumbing system installation for a high-volume restaurant kitchen.",
    image: "https://images.pexels.com/photos/4253318/pexels-photo-4253318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Bathroom Remodeling",
    category: "Residential",
    description: "Full bathroom renovation with modern fixtures and efficient plumbing solutions.",
    image: "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Office Building Maintenance",
    category: "Commercial",
    description: "Ongoing maintenance program for a multi-floor office complex.",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Water Heater Replacement",
    category: "Residential",
    description: "Energy-efficient water heater installation for a residential property.",
    image: "https://images.pexels.com/photos/273844/pexels-photo-273844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const categories = ["All", "Commercial", "Residential"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              Our Recent <span className="text-primary-500">Projects</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent work across residential and commercial properties.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-dark-800 rounded-lg p-1">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className="metallic-card group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-md mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl text-white font-semibold font-heading">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a 
                    href="#request" 
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors"
                  >
                    View Details
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;