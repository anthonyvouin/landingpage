"use client"

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  
  const navLinks = useMemo(() => ['About', 'Skills', 'Education', 'Contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      const visibleSection = navLinks.map(item => item.toLowerCase()).find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      setActiveSection(visibleSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="bg-white border-t-[5px] border-b-[5px] border-l-[5px] border-r-[5px] border-black">
        <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto">
          <div className="py-8">
            <Link href="/" className="text-xl font-bold tracking-widest hover:opacity-70 transition-opacity">
              Anthony Vouin
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium tracking-widest uppercase relative group"
              >
                <span className={`transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-600'
                }`}>
                  {item}
                </span>
                <span className={`absolute -bottom-[1.5px] left-0 h-[3px] bg-black transition-all duration-300
                  ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Header; 


