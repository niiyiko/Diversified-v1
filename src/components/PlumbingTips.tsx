import React, { useState } from 'react';
import { 
  Droplets, 
  AlertTriangle, 
  Calendar, 
  Wrench, 
  ThermometerSun,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import ScrollReveal from '../utils/ScrollReveal';

interface TipProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Tip: React.FC<TipProps> = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="metallic-card overflow-hidden backdrop-blur-sm bg-dark-900/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-dark-800/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="bg-dark-700 group-hover:bg-primary-600 rounded-lg p-3 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold font-heading text-left">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-300">
          {content}
        </div>
      </div>
    </div>
  );
};

const tips = [
  {
    icon: <Droplets className="w-6 h-6 text-gray-200" />,
    title: "Water Heater Maintenance",
    content: "Flush your water heater annually to prevent sediment buildup and extend its lifespan. This simple maintenance can improve efficiency and prevent costly repairs. Turn off the power, connect a garden hose to the drain valve, and let it run until the water runs clear."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-gray-200" />,
    title: "Drain Care Guidelines",
    content: "Never pour grease, coffee grounds, or 'flushable' wipes down drains. These common items are leading causes of clogs. For grease, let it cool and dispose in the trash. Use drain strainers in sinks and clean them regularly."
  },
  {
    icon: <Info className="w-6 h-6 text-gray-200" />,
    title: "Signs of Hidden Leaks",
    content: "Watch for unexplained high water bills, musty odors, water stains on walls/ceilings, or unusually green patches in your yard. If you suspect a leak, check your water meter before and after a two-hour period of no water use. Any change indicates a leak."
  },
  {
    icon: <Wrench className="w-6 h-6 text-gray-200" />,
    title: "Emergency Water Shutoff",
    content: "Locate your main water valve now, before an emergency occurs. It's typically in the basement, crawl space, or outside near the street. Mark it with a bright tag. In an emergency, turn clockwise to shut off. Every household member should know its location."
  },
  {
    icon: <ThermometerSun className="w-6 h-6 text-gray-200" />,
    title: "Seasonal Plumbing Tips",
    content: "In winter, insulate exposed pipes and disconnect garden hoses. Keep your home heated to at least 55°F, even when away. In summer, check outdoor faucets and irrigation systems for leaks. Clean gutters in spring and fall to prevent water damage."
  },
  {
    icon: <Calendar className="w-6 h-6 text-gray-200" />,
    title: "When to Call a Professional",
    content: "While minor clogs can be DIY-fixed with a plunger, call a professional for: persistent clogs, sewer line issues, water heater problems, low water pressure throughout the house, or any gas line concerns. These issues require specialized tools and expertise."
  }
];

const PlumbingTips: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              Plumbing <span className="text-primary-500">Tips & Advice</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert guidance to help you maintain your plumbing system and prevent costly repairs. Knowledge is power when it comes to protecting your home's plumbing.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid gap-4 max-w-3xl mx-auto">
          {tips.map((tip, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Tip {...tip} />
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Need professional help with your plumbing? Our expert team is ready to assist.
            </p>
            <a 
              href="#request" 
              className="btn btn-primary shadow-lg shadow-primary-900/20"
            >
              Request Service
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlumbingTips;