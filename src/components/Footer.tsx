import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer id="contact" className="bg-dark-950 pt-16 pb-8 relative z-30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo variant="footer" />
            <p className="text-gray-400 mt-4 mb-6">
              Service Areas: Aledo, Argyle, Azle, Bedford, Blue Mound, Colleyville, Coppell, Decatur, Denton, Double Oak, Euless, Flower Mound, Fort Worth, Grapevine, Haltom City, Haslet, Irving, Justin, Keller, Lake Worth, Mansfield, Newark, North Lake, North Richland Hills, Richland Hills, Roanoke, Saginaw, Shady Shores, Southlake, Trophy Club, Watauga, Westlake, Westover Hills, Westworth Village, White Settlement, Highland Village, and all of the growing North Fort Worth/Tarrant County areas
            </p>
            <p className="text-primary-500 font-semibold">Master Plumber License M24068</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-heading">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Residential Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Small Commercial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Repairs & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Water Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  System Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Gas Line Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-heading">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  834 Blue Mound Road West<br />
                  Haslet Texas
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Office – (817) 439-2488</p>
                  <p className="text-gray-400">Fax – (817) 439-2489</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:schedule@diversifiedplumbingservices.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  schedule@diversifiedplumbingservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Certification Badges */}
        <div className="flex justify-center space-x-8 mb-8 border-t border-dark-800 pt-8">
          <img 
            src="/src/Assets/bbb-rating-a-png-logo-9.webp" 
            alt="BBB Accredited Business A+" 
            className="h-16 w-auto object-contain"
          />
          <img 
            src="/src/Assets/TexasSBA_woman-owned-seal-2022-500x500-1.webp" 
            alt="Texas SBA Woman Owned Business Certification" 
            className="h-16 w-auto object-contain"
          />
          <img 
            src="/src/Assets/us-small-business-administration-sba-logo-png_seeklogo-433792.png" 
            alt="U.S. Small Business Administration" 
            className="h-16 w-auto object-contain"
          />
          <a 
            href="https://tsbpe.texas.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/src/Assets/texas_plumbing_board_transparent.png" 
              alt="Texas State Board of Plumbing Examiners" 
              className="h-16 w-auto object-contain"
            />
          </a>
        </div>
        
        <div className="border-t border-dark-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Diversified Plumbing Services. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;