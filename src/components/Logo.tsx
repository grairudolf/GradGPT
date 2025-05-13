
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="h-8 w-8 overflow-hidden bg-brand-blue rounded-lg flex items-center justify-center">
          <svg 
            viewBox="0 0 64 64" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-white"
          >
            <g fill="currentColor">
              <path d="M40 16L28 36L24 30L16 42H48L40 16Z" />
              <circle cx="32" cy="10" r="6" />
            </g>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-brand-orange rounded-full border-2 border-white" />
      </div>
      <span className="text-xl font-bold text-brand-blue">GradGPT</span>
    </Link>
  );
};

export default Logo;
