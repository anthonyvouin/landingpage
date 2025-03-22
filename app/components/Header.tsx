"use client"

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinksMapping = useMemo(() => [
    { text: 'À propos', id: 'about' },
    { text: 'Formations', id: 'education' },
    { text: 'Expériences', id: 'experiences' },
    { text: 'Compétences', id: 'skills' },
    { text: 'Projets', id: 'projects' },
    { text: 'Contact', id: 'contact' }
  ], []);

  useEffect(() => {
    const updateScrollPadding = () => {
      if (window.innerWidth < 768) {
        document.documentElement.style.scrollPaddingTop = '80px';
      } else if (window.innerWidth < 1024) {
        document.documentElement.style.scrollPaddingTop = '100px';
      } else {
        document.documentElement.style.scrollPaddingTop = '120px';
      }
    };

    updateScrollPadding();

    window.addEventListener('resize', updateScrollPadding);

    const handleScroll = () => {
      const visibleSection = navLinksMapping.find(link => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      setActiveSection(visibleSection ? visibleSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollPadding);
      document.documentElement.style.scrollPaddingTop = '';
    };
  }, [navLinksMapping]);

  return (
    <header className="calculHeader fixed w-full border-t-[5px] border-b-[5px] border-black top-0 z-50">
      <div className="bg-white">
        <nav className="flex items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="py-8">
            <Link href="/" className="text-xl font-bold tracking-widest hover:opacity-70 transition-opacity">
              Anthony Vouin
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          <div className={`
            absolute top-full left-0 right-0 bg-white border-b-[3px] border-black
            md:relative md:border-none md:bg-transparent
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:block
          `}>
            <ul className="flex flex-col md:flex-row md:space-x-8 px-6 py-4 md:p-0">
              {navLinksMapping.map((item) => (
                <li key={item.text} className="py-2 md:py-0">
                  <Link 
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem('')}
                    className="text-sm font-medium tracking-widest uppercase relative group block"
                  >
                    <span className={`transition-colors ${
                      activeSection === item.id && !hoveredItem ? 'text-black' : 'text-gray-600'
                    }`}>
                      {item.text}
                    </span>
                    <span className={`absolute -bottom-[1.5px] left-0 h-[3px] bg-black transition-all duration-300 ${
                      (hoveredItem === item.id || (activeSection === item.id && !hoveredItem)) 
                        ? 'w-full' 
                        : 'w-0'
                    }`}>
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