import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ variant = 'navbar' }) => {
  const logoSrc = variant === 'navbar' 
    ? '/src/Assets/Diversified_Logo_WhiteText_Final.png'
    : '/src/Assets/Diversified Logo.png';

  return (
    <a href="/" className="flex items-center">
      <img 
        src={logoSrc}
        alt="Diversified Plumbing Services" 
        className="h-12 md:h-14"
      />
    </a>
  );
};

export default Logo;