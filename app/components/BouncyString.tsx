import React, { useRef } from 'react';
import gsap from 'gsap';

const BouncyString: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  
  // The initial straight path (M = Start, Q = Control Point, Final Point)
  // We use 500 width as a base for responsiveness
  const initialPath = "M 10 100 Q 500 100 990 100";
  const finalPath = "M 10 100 Q 500 100 990 100";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update the Quadratic curve (Q) to follow the mouse position
    // We update the middle values of the 'd' attribute
    const newPath = `M 10 100 Q ${x} ${y} 990 100`;
    
    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    // When mouse leaves, animate back to center with an elastic bounce
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)" // This creates the "bouncy" guitar string effect
    });
  };

  return (
    <div 
      className="relative w-full h-[300px] flex items-center justify-center bg-[#050a18] overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 200" 
        preserveAspectRatio="none"
        className="pointer-events-none"
      >
        <path
          ref={pathRef}
          d={initialPath}
          stroke="#9810fa" // Your glassy purple color
          strokeWidth="3"
          fill="transparent"
          className="drop-shadow-[0_0_8px_rgba(152,16,250,0.8)]"
        />
      </svg>
      
      {/* Optional: Text Hint */}
      <div className="absolute top-10 text-white/20 text-xs tracking-widest uppercase pointer-events-none">
        Hover to strum the string
      </div>
    </div>
  );
};

export default BouncyString;