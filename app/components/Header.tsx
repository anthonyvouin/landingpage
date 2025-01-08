"use client"

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = useMemo(() => ['About', 'Education', 'Experiences', 'Skills', 'Projects', 'Contact'], []);

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
    <header className="calculHeader fixed border-t-[5px] border-b-[5px] border-black top-0 z-50">
      <div className="bg-white">
        <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto">
          <div className="py-8">
            <Link href="/" className="text-xl font-bold tracking-widest hover:opacity-70 transition-opacity">
              Anthony Vouin
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            <ul className={`flex-col md:flex md:flex-row md:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
              {navLinks.map((item) => (
                <li key={item} className="py-2 md:py-0">
                  <Link 
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
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;