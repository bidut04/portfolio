import React, { useEffect, useRef, useState } from 'react';

const SplitScreenHud = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);
  const topPartRef = useRef<HTMLDivElement>(null);
  const bottomPartRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const textMiddleRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({ altitude: 10000, velocity: 420, power: 87, shield: 100 });
  const [scanning, setScanning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Create starfield (less stars on mobile)
    if (starfieldRef.current) {
      const starCount = isMobile ? 100 : 200;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        Object.assign(star.style, {
          position: 'absolute',
          width: Math.random() * 2 + 'px',
          height: Math.random() * 2 + 'px',
          backgroundColor: '#fff',
          left: Math.random() * 100 + 'vw',
          top: Math.random() * 100 + 'vh',
          opacity: Math.random() * 0.8 + '',
          borderRadius: '50%',
          animation: `twinkle ${2 + Math.random() * 4}s infinite ease-in-out`
        });
        starfieldRef.current.appendChild(star);
      }
    }

    // Stats update interval
    const interval = setInterval(() => {
      setStats(p => ({
        altitude: p.altitude + Math.floor(Math.random() * 20 - 10),
        velocity: p.velocity + Math.floor(Math.random() * 10 - 5),
        power: Math.max(50, Math.min(100, p.power + Math.floor(Math.random() * 6 - 3))),
        shield: Math.max(0, Math.min(100, p.shield + Math.floor(Math.random() * 4 - 2)))
      }));
    }, 2000);

    // Scan animation interval
    const scanInterval = setInterval(() => {
      setScanning(true);
      setTimeout(() => setScanning(false), 2000);
    }, 5000);

    // Scroll handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 2;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);

      // Split screen opens from 0 to 0.5 progress
      const splitProgress = Math.min(progress * 2, 1);
      const translateY = splitProgress * 100;
      
      if (topPartRef.current) {
        topPartRef.current.style.transform = `translateY(-${translateY}%)`;
      }
      if (bottomPartRef.current) {
        bottomPartRef.current.style.transform = `translateY(${translateY}%)`;
      }

      // Text reveal starts after split completes
      const textProgress = progress > 0.5 ? Math.min((progress - 0.5) * 2, 1) : 0;

      if (textLeftRef.current) {
        const leftX = -500 + textProgress * 500;
        textLeftRef.current.style.transform = `translateX(${leftX}px)`;
        textLeftRef.current.style.opacity = `${textProgress}`;
      }

      if (textRightRef.current) {
        const rightX = 500 - textProgress * 500;
        textRightRef.current.style.transform = `translateX(${rightX}px)`;
        textRightRef.current.style.opacity = `${textProgress}`;
      }

      if (textMiddleRef.current) {
        const scale = 0.5 + textProgress * 0.5;
        textMiddleRef.current.style.transform = `scale(${scale})`;
        textMiddleRef.current.style.opacity = `${textProgress}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearInterval(interval);
      clearInterval(scanInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const circuitLines = [
    { x: 10, y: 5, w: 40, h: 0 }, 
    { x: 55, y: 5, w: 0, h: 20 }, 
    { x: 70, y: 10, w: 25, h: 0 },
    { x: 5, y: 40, w: 30, h: 0 }, 
    { x: 60, y: 38, w: 35, h: 0 }
  ];

  return (
    <div className="min-h-[300vh] overflow-x-hidden text-blue-500" style={{ backgroundColor: '#050a18' }}>
      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes slideIn { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ray-move { 0%, 100% { transform: rotate(var(--rotation)) translateX(0); } 50% { transform: rotate(var(--rotation)) translateX(20px); } }
        
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 50% 0); transform: translateX(-3px); }
          20% { clip-path: inset(80% 0 10% 0); transform: translateX(3px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translateX(-3px); }
          60% { clip-path: inset(10% 0 70% 0); transform: translateX(3px); }
          80% { clip-path: inset(50% 0 20% 0); transform: translateX(-3px); }
          100% { clip-path: inset(30% 0 60% 0); transform: translateX(3px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 80% 0); transform: translateX(3px); }
          20% { clip-path: inset(40% 0 30% 0); transform: translateX(-3px); }
          40% { clip-path: inset(70% 0 10% 0); transform: translateX(3px); }
          60% { clip-path: inset(20% 0 50% 0); transform: translateX(-3px); }
          80% { clip-path: inset(60% 0 20% 0); transform: translateX(3px); }
          100% { clip-path: inset(40% 0 40% 0); transform: translateX(-3px); }
        }

        @keyframes glitch-skew {
          0% { transform: skewX(0deg); }
          10% { transform: skewX(-5deg); }
          20% { transform: skewX(5deg); }
          30% { transform: skewX(-5deg); }
          40% { transform: skewX(5deg); }
          50% { transform: skewX(0deg); }
          100% { transform: skewX(0deg); }
        }

        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }

        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .glitch-red {
          color: #ff0000;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
          z-index: -1;
          opacity: 0.7;
        }

        .glitch-blue {
          color: #00ffff;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
          z-index: -2;
          opacity: 0.7;
        }

        .glitch-main {
          position: relative;
          z-index: 1;
          animation: glitch-skew 5s infinite;
        }

        @media (max-width: 768px) {
          .glitch-wrapper h1 {
            font-size: clamp(2rem, 12vw, 4rem) !important;
          }
        }
      `}</style>

      <div ref={starfieldRef} className="fixed inset-0 z-0"></div>
      
      {/* Split Screen Top Half */}
      <div ref={topPartRef} className="fixed top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0a1628] to-[#050a18] z-10 transition-transform duration-100">
        <div className="absolute -top-40 -right-40 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] opacity-40 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }} />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Ray effects - reduced on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute top-0 right-0 origin-right" style={{
                width: '160vw',
                height: '1px',
                background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.4), transparent)',
                transform: `rotate(${120 + i * 2.5}deg)`,
                animation: `ray-move ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                opacity: 0.3,
                ['--rotation' as any]: `${120 + i * 2.5}deg`
              }} />
            ))}
          </div>
        )}

        {/* Circuit lines - simplified on mobile */}
        {circuitLines.slice(0, isMobile ? 3 : 5).map((l, i) => {
          const isH = l.w > 0;
          return (
            <div key={i} className="absolute hidden md:block" style={{
              left: `${l.x}%`,
              top: `${l.y}%`,
              width: isH ? `${l.w}%` : '2px',
              height: isH ? '2px' : `${l.h}%`,
              backgroundColor: 'rgba(59, 130, 246, 0.9)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 5px white',
              maskImage: isH ? 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              animation: `pulse ${3 + (i % 2)}s ease-in-out infinite`
            }} />
          );
        })}

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-4 md:pb-8 px-4">
          <div className="glitch-wrapper">
            <h1 className="glitch-main text-[clamp(2rem,12vw,6rem)] leading-none uppercase font-thin tracking-[0.1em] md:tracking-[0.2em]">
              <span className="text-white font-semibold">BIDYUT</span>
              <span className="text-blue-500 font-semibold">.</span>
              <span className="text-blue-400 font-semibold">FOLIO</span>
            </h1>
            
            <h1 className="glitch-layer glitch-red text-[clamp(2rem,12vw,6rem)] leading-none uppercase font-thin tracking-[0.1em] md:tracking-[0.2em]" aria-hidden="true">
              <span>BIDYUT</span>
              <span>.</span>
              <span>FOLIO</span>
            </h1>
            
            <h1 className="glitch-layer glitch-blue text-[clamp(2rem,12vw,6rem)] leading-none uppercase font-thin tracking-[0.1em] md:tracking-[0.2em]" aria-hidden="true">
              <span>BIDYUT</span>
              <span>.</span>
              <span>FOLIO</span>
            </h1>
          </div>
        </div>

        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 text-blue-400 font-mono text-xs md:text-sm opacity-60 animate-bounce">
          ↓ Scroll to Reveal ↓
        </div>
      </div>

      {/* Split Screen Bottom Half */}
      <div ref={bottomPartRef} className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a1628] to-[#050a18] z-10 transition-transform duration-100">
        <div className="absolute -bottom-40 -left-40 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] opacity-40 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }} />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute bottom-0 right-0 origin-right" style={{
                width: '160vw',
                height: '1px',
                background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.4), transparent)',
                transform: `rotate(${-120 - i * 2.5}deg)`,
                animation: `ray-move ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                opacity: 0.3,
                ['--rotation' as any]: `${-120 - i * 2.5}deg`
              }} />
            ))}
          </div>
        )}

        {circuitLines.slice(0, isMobile ? 3 : 5).map((l, i) => {
          const isH = l.w > 0;
          return (
            <div key={`bottom-${i}`} className="absolute hidden md:block" style={{
              left: `${l.x}%`,
              bottom: `${l.y}%`,
              width: isH ? `${l.w}%` : '2px',
              height: isH ? '2px' : `${l.h}%`,
              backgroundColor: 'rgba(59, 130, 246, 0.9)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 5px white',
              maskImage: isH ? 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
              animation: `pulse ${3 + (i % 2)}s ease-in-out infinite`
            }} />
          );
        })}

        <div className="absolute top-0 left-0 right-0 flex items-start justify-center pt-6 md:pt-12 px-4">
          <p className="text-blue-400 font-mono tracking-[0.3em] md:tracking-[0.6em] text-sm md:text-lg opacity-80">
            WEB DEVELOPER
          </p>
        </div>
      </div>

      {scanning && (
        <div className="fixed inset-0 z-20 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)]" style={{ animation: 'scan 2s linear' }}></div>
        </div>
      )}

      {/* Status Panels - Responsive */}
      {['left', 'right'].map((side) => (
        <div 
          key={side} 
          className={`fixed top-4 md:top-8 z-30 ${side === 'left' ? 'left-2 md:left-8' : 'right-2 md:right-8'} text-left`}
          style={{ animation: `${side === 'left' ? 'slideIn' : 'slideInRight'} 1s ease-out forwards` }}
        >
          <div className="bg-[#050a18]/80 backdrop-blur-sm border border-blue-500/30 p-2 md:p-4 rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <h5 className="text-[10px] md:text-sm tracking-widest uppercase text-cyan-400 font-light mb-2 md:mb-3">
              {side === 'left' ? 'Space Dom.' : 'Systems'}
            </h5>
            <div className="space-y-1 md:space-y-2 text-[10px] md:text-xs font-mono">
              {side === 'left' ? (
                <>
                  <div className="flex justify-between gap-2"><span className="text-blue-400">ALT:</span><span className="text-blue-300 tabular-nums">{isMobile ? Math.floor(stats.altitude/1000) + 'k' : stats.altitude.toLocaleString()} m</span></div>
                  <div className="flex justify-between gap-2"><span className="text-blue-400">VEL:</span><span className="text-blue-300 tabular-nums">{stats.velocity} m/s</span></div>
                  <div className="flex justify-between gap-2"><span className="text-blue-400">PWR:</span><span className={`tabular-nums ${stats.power < 60 ? 'text-red-500' : 'text-blue-300'}`}>{stats.power}%</span></div>
                </>
              ) : (
                <>
                  <div className="flex justify-between gap-2"><span className="text-blue-400">NAV:</span><span className="text-cyan-400">ACTIVE</span></div>
                  <div className="flex justify-between gap-2"><span className="text-blue-400">WPN:</span><span className="text-cyan-400">READY</span></div>
                  <div className="flex justify-between gap-2"><span className="text-blue-400">SHD:</span><span className={`tabular-nums ${stats.shield < 30 ? 'text-red-500' : 'text-blue-300'}`}>{stats.shield}%</span></div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Content Section - Responsive */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4" style={{ marginTop: '150vh' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider transition-all duration-1000" style={{
            clipPath: scrollProgress > 0.7 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
            opacity: scrollProgress > 0.7 ? 1 : 0,
            transform: scrollProgress > 0.7 ? 'scale(1)' : 'scale(0.9)'
          }}>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FUTURE READY
            </span>
          </div>
          <div className="text-base md:text-xl lg:text-2xl text-blue-300 mt-4 md:mt-8 transition-all duration-800 delay-100 px-4" style={{
            opacity: scrollProgress > 0.5 ? 1 : 0,
            transform: scrollProgress > 0.5 ? 'translateY(0)' : 'translateY(40px)'
          }}>
            Crafting digital experiences with cutting-edge technology
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenHud;