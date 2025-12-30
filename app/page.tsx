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
  className="fixed pointer-events-none z-50 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-75 ease-out"
  style={{
    left: `${cursorPos.x}px`,
    top: `${cursorPos.y}px`,
    transform: "translate(-50%, -50%)",
    border: "2px solid rgba(152, 16, 250, 0.8)", // Thicker, more visible border
    background: "rgba(152, 16, 250, 0.05)",
    backdropFilter: "blur(4px)",
    boxShadow: "0 0 15px rgba(152, 16, 250, 0.4)", // Glow effect
  }}
>
  {/* Vertical Line */}
  <div className="absolute w-[1px] h-full bg-purple-500 opacity-50" />
  
  {/* Horizontal Line */}
  <div className="absolute h-[1px] w-full bg-purple-500 opacity-50" />

  {/* Center Point (The "Aim") */}
  <div className="w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_5px_#fff]" />
  
  {/* Optional: Scope Notches (Top, Bottom, Left, Right) */}
  <div className="absolute top-0 w-1 h-2 bg-purple-500" />
  <div className="absolute bottom-0 w-1 h-2 bg-purple-500" />
  <div className="absolute left-0 h-1 w-2 bg-purple-500" />
  <div className="absolute right-0 h-1 w-2 bg-purple-500" />
</div>

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