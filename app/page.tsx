'use client'

import { useEffect, useState } from "react";
import CyberBackground from "./components/cyberBackgriund";
import ProjectShowcase from "./components/Project";
import BouncyString from "./components/BouncyString";
import ResumeSection from "./components/ResumeSection";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main>
      {/* Glass cursor follower */}
      <div
        className="fixed pointer-events-none z-50 w-10 h-10 rounded-full transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
          
          // Semi-transparent background (Purple tint)
          background: "rgba(152, 16, 250, 0.15)", 
          
          // High-intensity blur
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          
          // Glass Edge
          border: "1px solid rgba(255, 255, 255, 0.4)",
          
          // Outer glow and Inner shadow for depth
          boxShadow: `
            0 8px 32px 0 rgba(0, 0, 0, 0.3),
            inset 0 0 10px rgba(255, 255, 255, 0.2)
          `,
          
          // Specular highlight
          backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
        }}
      />

      {/* Cyber background with split reveal effect */}
      <CyberBackground />
      
      {/* Projects section with smooth scroll */}
      <div className="relative z-10">
        <ProjectShowcase />
        <ResumeSection/>
        <BouncyString/>
      </div>
    </main>
  );
}