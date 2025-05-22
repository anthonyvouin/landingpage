"use client";
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const addGrow = (e: Event) => {
      if (cursorRef.current) cursorRef.current.classList.add('scale-110', 'shadow-xl');
    };
    const removeGrow = (e: Event) => {
      if (cursorRef.current) cursorRef.current.classList.remove('scale-110', 'shadow-xl');
    };
    const elements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    elements.forEach(el => {
      el.addEventListener('mouseenter', addGrow);
      el.addEventListener('mouseleave', removeGrow);
    });
    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', addGrow);
        el.removeEventListener('mouseleave', removeGrow);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] left-0 top-0 w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-black shadow-md transition-transform duration-300 ease-out"
      style={{ transitionProperty: 'transform, background, box-shadow, border-color' }}
    />
  );
};

export default CustomCursor; 