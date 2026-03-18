"use client";
import { useRef, useEffect, useCallback } from "react";

export default function CursorRevealText() {
  const stageRef  = useRef<HTMLDivElement>(null);
  const fillRef   = useRef<HTMLSpanElement>(null);
  const mcRef     = useRef<SVGCircleElement>(null);
  const gradRef   = useRef<SVGRadialGradientElement>(null);

  const MAX_R        = 120;
  const GROW_SPEED   = 7;
  const SHRINK_SPEED = 6;

  const state = useRef({ currentR: 0, targetR: 0, mouseX: -999, mouseY: -999, raf: 0 });

  const animate = useCallback(() => {
    const s = state.current;
    if (s.currentR < s.targetR) s.currentR = Math.min(s.currentR + GROW_SPEED, s.targetR);
    else if (s.currentR > s.targetR) s.currentR = Math.max(s.currentR - SHRINK_SPEED, s.targetR);

    const attrs = { cx: s.mouseX, cy: s.mouseY, r: s.currentR };
    [mcRef, gradRef].forEach(ref => {
      if (!ref.current) return;
      ref.current.setAttribute("cx", String(attrs.cx));
      ref.current.setAttribute("cy", String(attrs.cy));
      ref.current.setAttribute("r",  String(attrs.r));
    });
    if (gradRef.current) {
      gradRef.current.setAttribute("fx", String(s.mouseX));
      gradRef.current.setAttribute("fy", String(s.mouseY));
    }

    if (s.currentR !== s.targetR) {
      s.raf = requestAnimationFrame(animate);
    } else {
      s.raf = 0;
    }
  }, []);

  const startAnim = useCallback(() => {
    if (!state.current.raf) state.current.raf = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    if (fillRef.current) fillRef.current.style.mask = "url(#revealMask)";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    state.current.mouseX = e.clientX - rect.left;
    state.current.mouseY = e.clientY - rect.top;
    state.current.targetR = MAX_R;
    startAnim();
  }, [startAnim]);

  const handleMouseEnter = useCallback(() => {
    state.current.targetR = MAX_R;
    startAnim();
  }, [startAnim]);

  const handleMouseLeave = useCallback(() => {
    state.current.targetR = 0;
    startAnim();
  }, [startAnim]);

  return (
    <section className="reveal-section">
      <div
        ref={stageRef}
        className="reveal-stage"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <radialGradient
              id="revealGrad"
              ref={gradRef}
              gradientUnits="userSpaceOnUse"
              cx="-999" cy="-999" r="120" fx="-999" fy="-999"
            >
              <stop offset="0%"   stopColor="white" stopOpacity="1" />
              <stop offset="60%"  stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="revealMask">
              <circle ref={mcRef} cx="-999" cy="-999" r="0" fill="url(#revealGrad)" />
            </mask>
          </defs>
        </svg>

        <span className="reveal-outline">BIDYUT.DEV</span>
        <span className="reveal-fill" ref={fillRef}>BIDYUT.DEV</span>
      </div>
    </section>
  );
}