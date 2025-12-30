// 'use client'
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// export default function CyberBackground() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const topPartRef = useRef<HTMLDivElement>(null);
//   const bottomPartRef = useRef<HTMLDivElement>(null);
//   const topRaysRef = useRef<HTMLDivElement>(null);
//   const bottomRaysRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!logoRef.current) return;

//     const letters = logoRef.current.querySelectorAll('.letter');
//     const dot = logoRef.current.querySelector('.dot');
//     const cursor = logoRef.current.querySelector('.cursor');

//     const tl = gsap.timeline();

//     tl.set(letters, {
//       opacity: 0,
//       y: -100,
//       rotationX: -90,
//       transformOrigin: '50% 50%',
//     });

//     tl.set(dot, {
//       opacity: 0,
//       scale: 0,
//     });

//     tl.set(cursor, {
//       opacity: 0,
//     });

//     tl.to(letters, {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       duration: 1.2,
//       stagger: {
//         each: 0.08,
//         from: 'start',
//       },
//       ease: 'back.out(1.7)',
//     });

//     tl.to(
//       letters,
//       {
//         color: '#3b82f6',
//         duration: 0.5,
//         stagger: {
//           each: 0.05,
//           from: 'start',
//         },
//         ease: 'power2.inOut',
//       },
//       '-=0.8'
//     );

//     tl.to(
//       letters,
//       {
//         textShadow: '0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.6)',
//         duration: 0.3,
//         stagger: {
//           each: 0.03,
//         },
//       },
//       '-=0.4'
//     );

//     tl.to(dot, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.4,
//       ease: 'elastic.out(1, 0.5)',
//     });

//     tl.to(
//       dot,
//       {
//         color: '#3b82f6',
//         scale: 1.2,
//         duration: 0.3,
//         yoyo: true,
//         repeat: 1,
//       },
//       '-=0.2'
//     );

//     const folioLetters = Array.from(letters).slice(7);
//     tl.to(
//       folioLetters,
//       {
//         color: '#60a5fa',
//         duration: 0.4,
//         stagger: 0.05,
//       },
//       '-=0.3'
//     );

//     tl.to(cursor, {
//       opacity: 1,
//       duration: 0.1,
//     });

//     gsap.to(cursor, {
//       opacity: 0,
//       duration: 0.5,
//       repeat: -1,
//       yoyo: true,
//       ease: 'power1.inOut',
//       delay: 2,
//     });

//     const glitchAnimation = () => {
//       const randomLetters = gsap.utils.shuffle([...letters]).slice(0, 3);

//       gsap.to(randomLetters, {
//         x: () => gsap.utils.random(-5, 5),
//         duration: 0.05,
//         repeat: 5,
//         yoyo: true,
//         onComplete: () => {
//           gsap.to(randomLetters, {
//             x: 0,
//             duration: 0.1,
//           });
//         },
//       });
//     };

//     const glitchInterval = setInterval(glitchAnimation, 5000);

//     return () => {
//       clearInterval(glitchInterval);
//       tl.kill();
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const maxScroll = windowHeight * 1.5;
//       const progress = Math.min(scrollY / maxScroll, 1);

//       if (topPartRef.current && bottomPartRef.current) {
//         topPartRef.current.style.transform = `translateY(-${progress * 100}%)`;
//         bottomPartRef.current.style.transform = `translateY(${progress * 100}%)`;
//       }

//       const rayOpacity = Math.max(0, 1 - progress * 2);
//       if (topRaysRef.current) {
//         topRaysRef.current.style.opacity = `${rayOpacity}`;
//       }
//       if (bottomRaysRef.current) {
//         bottomRaysRef.current.style.opacity = `${rayOpacity}`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const GRID = 70;
//   const LINE = 2;

//   const circuitLines = [
//     { x: 2, y: 2, w: 5, h: 0 },
//     { x: 2, y: 2, w: 0, h: 5 },
//     { x: 2, y: 7, w: 5, h: 0 },
//     { x: 7, y: 2, w: 0, h: 5 },
//     { x: 2, y: 7, w: 5, h: 0 },
//     { x: 4, y: 10, w: 0, h: 8 },
//     { x: 0.5, y: 14, w: 7, h: 0 },
//     { x: 1, y: 19, w: 0, h: 7 },
//     { x: 1, y: 26, w: 6, h: 0 },
//     { x: 21, y: 2, w: 5, h: 0 },
//     { x: 21, y: 2, w: 0, h: 5 },
//     { x: 21, y: 7, w: 5, h: 0 },
//     { x: 26, y: 2, w: 0, h: 5 },
//     { x: 21, y: 7, w: 5, h: 0 },
//     { x: 24, y: 10, w: 0, h: 8 },
//     { x: 20.5, y: 14, w: 7, h: 0 },
//     { x: 20, y: 19, w: 7, h: 0 },
//     { x: 23.5, y: 19, w: 0, h: 6 },
//     { x: 8, y: 27, w: 12, h: 0 },
//     { x: 10, y: 3, w: 0, h: 1.5 },
//     { x: 16, y: 3, w: 0, h: 1.5 },
//     { x: 18, y: 6, w: 2, h: 0 },
//     { x: 8, y: 20, w: 0, h: 4 },
//     { x: 8, y: 24, w: 3, h: 0 },
//     { x: 17, y: 20, w: 0, h: 4 },
//     { x: 17, y: 24, w: 3, h: 0 },
//     { x: 1, y: 8, w: 2, h: 0 },
//     { x: 1, y: 16, w: 2, h: 0 },
//     { x: 25, y: 8, w: 2, h: 0 },
//     { x: 25, y: 16, w: 2, h: 0 },
//     { x: 7, y: 7, w: 1, h: 0 },
//     { x: 21, y: 7, w: 1, h: 0 },
//     { x: 0.5, y: 1, w: 0, h: 27 },
//     { x: 27.5, y: 1, w: 0, h: 27 },
//   ];

//   const circuitLinesBottom = [
//     { x: 8, y: 0.5, w: 12, h: 0 },
//     { x: 2, y: 2, w: 0, h: 6 },
//     { x: 2, y: 8, w: 6, h: 0 },
//     { x: 1, y: 10, w: 5, h: 0 },
//     { x: 3.5, y: 10, w: 0, h: 5 },
//     { x: 20, y: 2, w: 6, h: 0 },
//     { x: 26, y: 2, w: 0, h: 6 },
//     { x: 23, y: 10, w: 0, h: 6 },
//     { x: 20, y: 13, w: 6, h: 0 },
//     { x: 11, y: 5, w: 6, h: 0 },
//     { x: 10, y: 2, w: 0, h: 1.5 },
//     { x: 8, y: 2, w: 2, h: 0 },
//     { x: 10, y: 2, w: 0, h: 1.5 },
//     { x: 16, y: 2, w: 0, h: 1.5 },
//     { x: 16, y: 3.5, w: 2, h: 0 },
//     { x: 18, y: 3.5, w: 0, h: 1.5 },
//     { x: 8, y: 10, w: 0, h: 3 },
//     { x: 8, y: 13, w: 2, h: 0 },
//     { x: 18, y: 10, w: 0, h: 3 },
//     { x: 16, y: 13, w: 2, h: 0 },
//     { x: 1, y: 4, w: 1.5, h: 0 },
//     { x: 26.5, y: 4, w: 1.5, h: 0 },
//     { x: 1, y: 12, w: 1.5, h: 0 },
//     { x: 26.5, y: 12, w: 1.5, h: 0 },
//     { x: 0.5, y: 0.5, w: 0, h: 15 },
//     { x: 27.5, y: 0.5, w: 0, h: 15 },
//   ];

//   const text = 'BIDYUT.FOLIO';

//   return (
//     <>
//       <style>{`
//         @keyframes ray-move {
//           0%, 100% { opacity: 0.3; transform: translateX(0); }
//           50% { opacity: 0.6; transform: translateX(-20px); }
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }

//         .letter, .dot {
//           display: inline-block;
//           perspective: 1000px;
//         }
//       `}</style>

//       <div ref={containerRef} className="relative min-h-[250vh] bg-white font-sans overflow-hidden">

//         <div
//           ref={topPartRef}
//           className="fixed top-0 left-0 w-full h-1/2 bg-black z-10 transition-transform duration-100"
//         >
//           <div
//             className="absolute -top-40 -right-40 w-[1000px] h-[1000px] opacity-40 pointer-events-none"
//             style={{
//               background: 'radial-gradient(circle, rgba(30,58,138,0.7) 0%, transparent 70%)',
//               filter: 'blur(120px)',
//             }}
//           />

//           <div
//             className="absolute inset-0 opacity-[0.2]"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
//               `,
//               backgroundSize: `${GRID}px ${GRID}px`,
//             }}
//           />

//           <div ref={topRaysRef} className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-300">
//             {[...Array(30)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute top-0 right-0 origin-right"
//                 style={{
//                   width: '160vw',
//                   height: '1px',
//                   background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.4), transparent)',
//                   transform: `rotate(${120 + i * 2.5}deg)`,
//                   animation: `ray-move ${4 + (i % 3)}s ease-in-out infinite`,
//                   animationDelay: `${i * 0.15}s`,
//                   opacity: 0.3
//                 }}
//               />
//             ))}
//           </div>

//           <div className="absolute inset-0 pointer-events-none">
//             {circuitLines.map((l, i) => {
//               const isH = l.w > 0;
//               return (
//                 <div
//                   key={i}
//                   className="absolute"
//                   style={{
//                     left: l.x * GRID,
//                     top: l.y * GRID,
//                     width: isH ? l.w * GRID : LINE,
//                     height: isH ? LINE : l.h * GRID,
//                     backgroundColor: 'rgba(59, 130, 246, 0.9)',
//                     boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 5px white',
//                     maskImage: isH
//                       ? 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
//                       : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
//                     WebkitMaskImage: isH
//                       ? 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
//                       : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
//                     animation: `pulse-slow ${3 + (i % 2)}s ease-in-out infinite`,
//                   }}
//                 />
//               );
//             })}
//           </div>

//           <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-8">
//             <h1
//               ref={logoRef}
//               className="text-8xl font-black text-white tracking-tighter"
//             >
//               {text.split('').map((char, idx) => {
//                 if (char === '.') {
//                   return (
//                     <span key={idx} className="dot text-blue-500">
//                       {char}
//                     </span>
//                   );
//                 }
//                 return (
//                   <span key={idx} className="letter">
//                     {char}
//                   </span>
//                 );
//               })}
//               <span className="cursor">|</span>
//             </h1>
//           </div>

//           <div className="absolute top-8 left-1/2 -translate-x-1/2 text-blue-400 font-mono text-sm opacity-60 animate-bounce">
//             ↓ Scroll to Reveal ↓
//           </div>
//         </div>

//         <div
//           ref={bottomPartRef}
//           className="fixed bottom-0 left-0 w-full h-1/2 bg-black z-10 transition-transform duration-100"
//         >
//           <div
//             className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] opacity-40 pointer-events-none"
//             style={{
//               background: 'radial-gradient(circle, rgba(30,58,138,0.7) 0%, transparent 70%)',
//               filter: 'blur(120px)',
//             }}
//           />

//           <div
//             className="absolute inset-0 opacity-[0.2]"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
//               `,
//               backgroundSize: `${GRID}px ${GRID}px`,
//             }}
//           />

//           <div ref={bottomRaysRef} className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-300">
//             {[...Array(30)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute bottom-0 right-0 origin-right"
//                 style={{
//                   width: '160vw',
//                   height: '1px',
//                   background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.4), transparent)',
//                   transform: `rotate(${-120 - i * 2.5}deg)`,
//                   animation: `ray-move ${4 + (i % 3)}s ease-in-out infinite`,
//                   animationDelay: `${i * 0.15}s`,
//                   opacity: 0.3
//                 }}
//               />
//             ))}
//           </div>

//           <div className="absolute inset-0 pointer-events-none">
//             {circuitLinesBottom.map((l, i) => {
//               const isH = l.w > 0;
//               return (
//                 <div
//                   key={`bottom-${i}`}
//                   className="absolute"
//                   style={{
//                     left: l.x * GRID,
//                     top: l.y * GRID,
//                     width: isH ? l.w * GRID : LINE,
//                     height: isH ? LINE : l.h * GRID,
//                     backgroundColor: 'rgba(59, 130, 246, 0.9)',
//                     boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 5px white',
//                     maskImage: isH
//                       ? 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
//                       : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
//                     WebkitMaskImage: isH
//                       ? 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
//                       : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
//                     animation: `pulse-slow ${3 + (i % 2)}s ease-in-out infinite`,
//                   }}
//                 />
//               );
//             })}
//           </div>

//           <div className="absolute top-0 left-0 right-0 flex items-start justify-center pt-8">
//             <div className="text-center">
//               <p className="text-blue-400 font-mono tracking-[0.6em] text-lg opacity-80">
//                 WEB DEVELOPER
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// 'use client'
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// export default function CyberBackground() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const topPartRef = useRef<HTMLDivElement>(null);
//   const bottomPartRef = useRef<HTMLDivElement>(null);
//   const topRaysRef = useRef<HTMLDivElement>(null);
//   const bottomRaysRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!logoRef.current) return;

//     const letters = logoRef.current.querySelectorAll('.letter-main');
//     const dot = logoRef.current.querySelector('.dot');
//     const cursor = logoRef.current.querySelector('.cursor');
//     const glitchLayers = logoRef.current.querySelectorAll('.glitch-layer');

//     const tl = gsap.timeline();

//     // Initial State
//     tl.set([letters, dot], { opacity: 0, y: -50 });
//     tl.set(glitchLayers, { opacity: 0 });

//     // 1. Entrance Animation
//     tl.to([letters, dot], {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       stagger: 0.05,
//       ease: 'back.out(2)',
//     });

//     // 2. Reveal Glitch Layers after entrance
//     tl.to(glitchLayers, { opacity: 0.7, duration: 0.5 });

//     // 3. Infinite Glitch Loop (The Codepen Effect)
//     const startGlitch = () => {
//       const tlGlitch = gsap.timeline({ repeat: -1 });

//       tlGlitch.to(glitchLayers, {
//         duration: 0.1,
//         skewX: () => gsap.utils.random(-10, 10),
//         x: () => gsap.utils.random(-5, 5),
//         opacity: () => gsap.utils.random(0.4, 0.8),
//         stagger: 0.02,
//       })
//       .to(glitchLayers, {
//         duration: 0.1,
//         skewX: 0,
//         x: 0,
//         opacity: 0.7,
//       }, "+=0.05");
//     };

//     startGlitch();

//     // Cursor Blink
//     gsap.to(cursor, { opacity: 0, duration: 0.5, repeat: -1, yoyo: true });

//     return () => { tl.kill(); };
//   }, []);

//   // ... (Keep your existing scroll logic and circuit lines here)

//   const text = 'BIDYUT.FOLIO';
//   const GRID = 70;
//   const LINE = 2;

//   // Render Helper for Glitch Layers
//   const renderText = (className: string) => (
//     <div className={className}>
//       {text.split('').map((char, idx) => (
//         <span key={idx} className={char === '.' ? 'dot' : 'letter-inner'}>
//           {char}
//         </span>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         .glitch-wrapper {
//           position: relative;
//           display: inline-block;
//           color: white;
//           font-size: 8rem;
//           font-weight: 900;
//           letter-spacing: -0.05em;
//           line-height: 1;
//         }

//         /* The Codepen RGB Split Effect */
//         .glitch-layer {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events-none;
//           mix-blend-mode: screen;
//         }

//         .glitch-red {
//           color: #ff0000;
//           transform: translateX(-2px);
//           z-index: -1;
//           animation: glitch-anim-1 2s infinite linear alternate-reverse;
//         }

//         .glitch-blue {
//           color: #0000ff;
//           transform: translateX(2px);
//           z-index: -2;
//           animation: glitch-anim-2 3s infinite linear alternate-reverse;
//         }

//         @keyframes glitch-anim-1 {
//           0% { clip-path: inset(20% 0 50% 0); }
//           20% { clip-path: inset(80% 0 10% 0); }
//           40% { clip-path: inset(40% 0 40% 0); }
//           60% { clip-path: inset(10% 0 70% 0); }
//           80% { clip-path: inset(50% 0 20% 0); }
//           100% { clip-path: inset(30% 0 60% 0); }
//         }

//         @keyframes glitch-anim-2 {
//           0% { clip-path: inset(10% 0 80% 0); }
//           20% { clip-path: inset(40% 0 30% 0); }
//           40% { clip-path: inset(70% 0 10% 0); }
//           60% { clip-path: inset(20% 0 50% 0); }
//           80% { clip-path: inset(60% 0 20% 0); }
//           100% { clip-path: inset(40% 0 40% 0); }
//         }
//       `}</style>

//       <div ref={containerRef} className="relative min-h-[250vh] bg-white overflow-hidden">
//         {/* Top Part */}
//         <div ref={topPartRef} className="fixed top-0 left-0 w-full h-1/2 bg-black z-10 transition-transform">
//           {/* ... Rays and Circuits (Keep existing) ... */}
          
//           <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-8">
//             <div ref={logoRef} className="glitch-wrapper">
//               {/* Main White Text */}
//               <div className="relative z-10">
//                 {text.split('').map((char, idx) => (
//                   <span key={idx} className={char === '.' ? 'dot text-blue-500' : 'letter-main inline-block'}>
//                     {char}
//                   </span>
//                 ))}
//                 <span className="cursor text-blue-500">|</span>
//               </div>

//               {/* Glitch Layers (The effect you requested) */}
//               {renderText("glitch-layer glitch-red")}
//               {renderText("glitch-layer glitch-blue")}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Part */}
//         <div ref={bottomPartRef} className="fixed bottom-0 left-0 w-full h-1/2 bg-black z-10 transition-transform">
//            {/* ... Keep Bottom Content ... */}
//         </div>
//       </div>
//     </>
//   );
// }

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

  useEffect(() => {
    // Create starfield
    if (starfieldRef.current) {
      for (let i = 0; i < 200; i++) {
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
    };
  }, []);

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
      `}</style>

      <div ref={starfieldRef} className="fixed inset-0 z-0"></div>
      
      {/* Split Screen Top Half */}
      <div ref={topPartRef} className="fixed top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0a1628] to-[#050a18] z-10 transition-transform duration-100">
        <div className="absolute -top-40 -right-40 w-[1000px] h-[1000px] opacity-40 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }} />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '70px 70px'
        }} />

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

        {circuitLines.map((l, i) => {
          const isH = l.w > 0;
          return (
            <div key={i} className="absolute" style={{
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

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-12">
          <div className="glitch-wrapper">
            <h1 className="glitch-main text-[min(10vw,100px)] leading-none uppercase font-thin tracking-[0.2em]">
              <span className="text-white font-semibold text-9xl">BIDYUT</span>
              <span className="text-blue-500 font-semibold">.</span>
              <span className="text-blue-400 font-semibold text-9xl">FOLIO</span>
              
            </h1>
            
            <h1 className="glitch-layer glitch-red text-[min(10vw,100px)] leading-none uppercase font-thin tracking-[0.2em]" aria-hidden="true">
              <span>BIDYUT</span>
              <span>.</span>
              <span>FOLIO</span>
              <span>|</span>
            </h1>
            
            <h1 className="glitch-layer glitch-blue text-[min(10vw,100px)] leading-none uppercase font-thin tracking-[0.2em]" aria-hidden="true">
              <span>BIDYUT</span>
              <span>.</span>
              <span>FOLIO</span>
              <span>|</span>
            </h1>
          </div>
        </div>

        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-blue-400 font-mono text-sm opacity-60 animate-bounce">
          ↓ Scroll to Reveal ↓
        </div>
      </div>

      {/* Split Screen Bottom Half */}
      <div ref={bottomPartRef} className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a1628] to-[#050a18] z-10 transition-transform duration-100">
        <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] opacity-40 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }} />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '70px 70px'
        }} />

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

        {circuitLines.map((l, i) => {
          const isH = l.w > 0;
          return (
            <div key={`bottom-${i}`} className="absolute" style={{
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

        <div className="absolute top-0 left-0 right-0 flex items-start justify-center pt-12">
          <p className="text-blue-400 font-mono tracking-[0.6em] text-lg opacity-80">
            WEB DEVELOPER
          </p>
        </div>
      </div>

      {scanning && (
        <div className="fixed inset-0 z-20 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)]" style={{ animation: 'scan 2s linear' }}></div>
        </div>
      )}

      {/* Status Panels */}
    {['left', 'right'].map((side) => (
  <div 
    key={side} 
    className={`fixed top-8 z-30 ${side === 'left' ? 'left-8 text-left' : 'right-8 text-right'}`}
    style={{ animation: `${side === 'left' ? 'slideIn' : 'slideInRight'} 1s ease-out forwards` }}
  >
    <div className="bg-[#050a18]/80 backdrop-blur-sm border border-blue-500/30 p-4 rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]">
      <h5 className="text-sm tracking-widest uppercase text-cyan-400 font-light mb-3">
        {side === 'left' ? 'Space Domination' : 'Systems Online'}
      </h5>
      <div className="space-y-2 text-xs font-mono">
        {side === 'left' ? (
          <>
            <div className="flex justify-between"><span className="text-blue-400">ALT:</span><span className="text-blue-300 tabular-nums">{stats.altitude.toLocaleString()} m</span></div>
            <div className="flex justify-between"><span className="text-blue-400">VEL:</span><span className="text-blue-300 tabular-nums">{stats.velocity} m/s</span></div>
            <div className="flex justify-between"><span className="text-blue-400">PWR:</span><span className={`tabular-nums ${stats.power < 60 ? 'text-red-500' : 'text-blue-300'}`}>{stats.power}%</span></div>
          </>
        ) : (
          <>
            <div className="flex justify-between gap-4"><span className="text-blue-400">NAV:</span><span className="text-cyan-400">ACTIVE</span></div>
            <div className="flex justify-between gap-4"><span className="text-blue-400">WPN:</span><span className="text-cyan-400">READY</span></div>
            <div className="flex justify-between gap-4"><span className="text-blue-400">SHD:</span><span className={`tabular-nums ${stats.shield < 30 ? 'text-red-500' : 'text-blue-300'}`}>{stats.shield}%</span></div>
          </>
        )}
      </div>
    </div>
  </div>
))}

      {/* Content Section */}
      <div className="relative z-20 min-h-screen flex items-center justify-center" style={{ marginTop: '150vh' }}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-6xl md:text-8xl font-bold tracking-wider transition-all duration-1000" style={{
            clipPath: scrollProgress > 0.7 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
            opacity: scrollProgress > 0.7 ? 1 : 0,
            transform: scrollProgress > 0.7 ? 'scale(1)' : 'scale(0.9)'
          }}>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">FUTURE READY</span>
          </div>
          <div className="text-xl md:text-2xl text-blue-300 mt-8 transition-all duration-800 delay-100" style={{
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