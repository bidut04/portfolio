'use client'

import React, { useRef, useEffect } from 'react';

export default function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textMiddleRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Max scroll distance for the full animation
      const maxScroll = windowHeight * 1.2;
      const progress = Math.min(scrollY / maxScroll, 1);

      // Animation ease function (Power 2 out)
      const easeOut = 1 - Math.pow(1 - progress, 2);

      if (textLeftRef.current) {
        const x = -100 + easeOut * 100;
        const blur = 20 - easeOut * 20;
        textLeftRef.current.style.transform = `translateX(${x}px) scale(${0.8 + easeOut * 0.2})`;
        textLeftRef.current.style.opacity = `${progress}`;
        textLeftRef.current.style.filter = `blur(${blur}px)`;
        textLeftRef.current.style.letterSpacing = `${(1 - easeOut) * 20}px`;
      }

      if (textMiddleRef.current) {
        const scale = 0.7 + easeOut * 0.3;
        const blur = 15 - easeOut * 15;
        textMiddleRef.current.style.transform = `scale(${scale})`;
        textMiddleRef.current.style.opacity = `${progress}`;
        textMiddleRef.current.style.filter = `blur(${blur}px)`;
        // Glow effect increases as it centers
        textMiddleRef.current.style.textShadow = `0 0 ${easeOut * 20}px rgba(0, 255, 195, 0.5)`;
      }

      if (textRightRef.current) {
        const x = 100 - easeOut * 100;
        const blur = 20 - easeOut * 20;
        textRightRef.current.style.transform = `translateX(${x}px) scale(${0.8 + easeOut * 0.2})`;
        textRightRef.current.style.opacity = `${progress}`;
        textRightRef.current.style.filter = `blur(${blur}px)`;
        textRightRef.current.style.letterSpacing = `${(1 - easeOut) * 20}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Background Dark Theme with Radial Glow
    <div className="fixed inset-0 flex items-center justify-center z-0 bg-[#0f0026] pointer-events-none overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(89,178,158,0.15)_0%,transparent_70%)]" />

      <div className="text-center space-y-16 max-w-6xl px-8 z-10">
        {/* Left Item */}
        <div ref={textLeftRef} className="opacity-0 will-change-transform transition-all duration-75 ease-out">
          <h2 className="text-5xl md:text-7xl font-thin uppercase tracking-widest text-[#afe3d7]">
            Believe in <span className="font-black text-[#59b29e]">Creativity</span>
          </h2>
        </div>

        {/* Middle Item - Highlighted */}
        <div ref={textMiddleRef} className="opacity-0 will-change-transform transition-all duration-75 ease-out">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Believe in <span className="text-[#00ffc3]">Team Work</span>
          </h2>
        </div>

        {/* Right Item */}
        <div ref={textRightRef} className="opacity-0 will-change-transform transition-all duration-75 ease-out">
          <h2 className="text-5xl md:text-7xl font-thin uppercase tracking-widest text-[#afe3d7]">
            Believe in <span className="font-black text-[#59b29e]">Exploration</span>
          </h2>
        </div>
      </div>

      {/* Scifi Scanning Line Decoration */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ffc3] to-transparent opacity-20 animate-pulse" style={{ top: '20%' }} />
    </div>
  );
}