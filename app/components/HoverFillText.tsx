"use client";
import { useRef, useCallback } from "react";

export default function CursorRevealText() {
  const filledRef = useRef<HTMLSpanElement>(null);
  const RADIUS = 250;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!filledRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    filledRef.current.style.clipPath = `circle(${RADIUS}px at ${x}px ${y}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!filledRef.current) return;
    filledRef.current.style.clipPath = `circle(0px at -999px -999px)`;
  }, []);

  return (
    <section className="reveal-section">
      <div
        className="reveal-stage"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="reveal-outline">BIDYUT.DEV</span>
        <span className="reveal-fill" ref={filledRef}>BIDYUT.DEV</span>
      </div>
    </section>
  );
}