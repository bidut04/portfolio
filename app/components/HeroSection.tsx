'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Building from "../components/Building"

export default function HeroSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .ph-hero {
          min-height: 100vh;
          background: #0a0514;
          position: relative;
          overflow: visible;
          display: flex;
          flex-direction: column;
          font-family: 'DM Sans', sans-serif;
        }

        .ph-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 20%, rgba(130,40,230,0.55) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 10% 50%, rgba(100,20,200,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 90% 50%, rgba(100,20,200,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(80,10,160,0.6) 0%, transparent 70%),
            #0a0514;
          pointer-events: none;
        }

        /* ── Side ring wrappers ── */
        .ph-svg-left,
        .ph-svg-right {
          position: absolute;
          top: 50%;
          width: 289px;
          height: 289px;
          pointer-events: none;
          z-index: 2;
        }
        .ph-svg-left  { left: -200px;  transform: translateY(-50%); }
        .ph-svg-right { right: -200px; transform: translateY(-50%); }

        /* Outer ring spins one way, inner the other */
        .ph-svg-left  .ph-ring-outer { animation: ph-spin-cw  25s linear infinite; }
        .ph-svg-right .ph-ring-outer { animation: ph-spin-ccw 25s linear infinite; }
        .ph-svg-left  .ph-ring-inner { animation: ph-spin-ccw 18s linear infinite; }
        .ph-svg-right .ph-ring-inner { animation: ph-spin-cw  18s linear infinite; }

        /* KEY: use fill="#fff" on all paths + CSS filter to convert white → purple */
        .ph-ring-outer {
          position: absolute;
          inset: 0;
          width: 289px;
          height: 289px;
          opacity: 0.9;
          filter: invert(35%) sepia(90%) saturate(600%) hue-rotate(240deg) brightness(1.3)
                  drop-shadow(0 0 10px rgba(168,85,247,0.8));
        }
        .ph-ring-inner {
          position: absolute;
          inset: 0;
          width: 289px;
          height: 289px;
          opacity: 0.7;
          filter: invert(35%) sepia(90%) saturate(600%) hue-rotate(240deg) brightness(1.5)
                  drop-shadow(0 0 6px rgba(192,132,252,0.6));
        }

        @keyframes ph-spin-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes ph-spin-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }


        /* ── Stars ── */
        .ph-star {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.8);
          pointer-events: none;
          z-index: 1;
          animation: ph-twinkle var(--d, 3s) ease-in-out var(--dl, 0s) infinite;
        }
        @keyframes ph-twinkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50%       { opacity: 0.15; transform: scale(0.4); }
        }

        /* ── Navbar ── */
        .ph-nav {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
        }
        .ph-logo {
          display: flex; align-items: center; gap: 10px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: 18px;
          text-decoration: none;
        }
        .ph-logo-box {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: #fff;
        }
        .ph-nav-links { display: flex; gap: 40px; list-style: none; }
        .ph-nav-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none; font-size: 14px; font-weight: 500;
          transition: color 0.2s;
        }
        .ph-nav-links a:hover { color: #fff; }

        /* ── Hero content ── */
        .ph-content {
          position: relative; z-index: 10;
          flex: 1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 20px 24px 200px;
        }

        /* ── Headline ── */
        .ph-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5.5vw, 4rem);
          color: #ffffff;
          line-height: 1.12;
          margin-bottom: 1.2rem;
          letter-spacing: -0.5px;
        }
        .ph-headline .ph-highlight {
          position: relative;
          display: inline-block;
          color: #ffffff;
          padding: 0 6px;
        }
        .ph-headline .ph-highlight::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1.5px solid rgba(168,85,247,0.7);
          background: rgba(120,40,200,0.25);
          border-radius: 2px;
        }

        .ph-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 2.4rem;
        }

        /* ══ Explore button ══ */
        .ph-btn-wrap {
          position: relative;
          display: inline-block;
        }
        .ph-btn-wrap::before,
        .ph-btn-wrap::after {
          content: '';
          position: absolute;
          width: 14px; height: 14px;
          border-color: #c084fc; border-style: solid;
          opacity: 0.9; z-index: 2;
        }
        .ph-btn-wrap::before { top:-4px; left:-4px; border-width: 2px 0 0 2px; }
        .ph-btn-wrap::after  { bottom:-4px; right:-4px; border-width: 0 2px 2px 0; }

        .ph-explore-border {
          position: absolute;
          inset: -1.5px;
          background: linear-gradient(135deg, #b060ff 0%, #7c3aed 50%, #c084fc 100%);
          clip-path: polygon(
            16px 0%, calc(100% - 16px) 0%,
            100% 16px, 100% calc(100% - 16px),
            calc(100% - 16px) 100%, 16px 100%,
            0% calc(100% - 16px), 0% 16px
          );
          z-index: 0;
        }

        .ph-explore-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative; z-index: 1;
          cursor: pointer; user-select: none;
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 15px;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #fff; border: none; outline: none;
          min-width: 220px; padding: 15px 52px;
          background: linear-gradient(160deg, #2d0a5c 0%, #1a0338 45%, #280850 100%);
          clip-path: polygon(
            16px 0%, calc(100% - 16px) 0%,
            100% 16px, 100% calc(100% - 16px),
            calc(100% - 16px) 100%, 16px 100%,
            0% calc(100% - 16px), 0% 16px
          );
          box-shadow: 0 0 18px rgba(168,85,247,.45), 0 0 40px rgba(168,85,247,.15);
          transition: all 0.22s ease;
        }
        .ph-explore-btn:hover {
          background: linear-gradient(160deg, #3b1070 0%, #220a4a 45%, #350c65 100%);
          box-shadow: 0 0 28px rgba(168,85,247,.75), 0 0 60px rgba(168,85,247,.3);
          transform: translateY(-2px) scale(1.02);
        }
        .ph-explore-btn:active { transform: scale(0.97); }

        /* ══ Building window random flicker ══ */
        @keyframes wf-a {
          0%,100%{opacity:.5} 23%{opacity:.9} 24%{opacity:.08} 26%{opacity:.8}
          60%{opacity:.55} 61%{opacity:.05} 63%{opacity:.7} 85%{opacity:.35}
        }
        @keyframes wf-b {
          0%,100%{opacity:.3} 10%{opacity:.85} 11%{opacity:.08} 13%{opacity:.7}
          45%{opacity:.45} 70%{opacity:.9} 71%{opacity:.05} 73%{opacity:.6}
        }
        @keyframes wf-c {
          0%,100%{opacity:.7} 33%{opacity:.08} 35%{opacity:.85} 55%{opacity:.25}
          56%{opacity:.9} 80%{opacity:.05} 82%{opacity:.6} 90%{opacity:.4}
        }
        @keyframes wf-d {
          0%,100%{opacity:.4} 15%{opacity:.9} 40%{opacity:.08} 42%{opacity:.7}
          65%{opacity:.3} 66%{opacity:.85} 88%{opacity:.05} 90%{opacity:.6}
        }
        @keyframes wf-e {
          0%,100%{opacity:.6} 5%{opacity:.05} 7%{opacity:.85} 30%{opacity:.2}
          50%{opacity:.9} 51%{opacity:.08} 75%{opacity:.7} 95%{opacity:.28}
        }
        .wf-a { animation: wf-a var(--ws,3s) ease-in-out var(--wd,0s) infinite; }
        .wf-b { animation: wf-b var(--ws,4s) ease-in-out var(--wd,0s) infinite; }
        .wf-c { animation: wf-c var(--ws,5s) ease-in-out var(--wd,0s) infinite; }
        .wf-d { animation: wf-d var(--ws,3.5s) ease-in-out var(--wd,0s) infinite; }
        .wf-e { animation: wf-e var(--ws,4.5s) ease-in-out var(--wd,0s) infinite; }

        /* ── Floating tech icons ── */
        .ph-icon {
          position: absolute;
          z-index: 8;
          display: flex; align-items: center; justify-content: center;
          animation: ph-float var(--dur, 7s) ease-in-out var(--del, 0s) infinite;
          filter:
            drop-shadow(0 0 8px var(--glow, rgba(192,132,252,0.8)))
            drop-shadow(0 0 18px var(--glow, rgba(192,132,252,0.3)));
        }
        @keyframes ph-float {
          0%, 100% { transform: translateY(0) rotate(var(--r0, 0deg)); }
          50%       { transform: translateY(-13px) rotate(var(--r1, 0deg)); }
        }

        /* ── Circuit floor ── */
        .ph-floor-wrap {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 25%;
          pointer-events: none;
          z-index: 2;
        }

        /* ── bottom-layer.png ── */
        .ph-bottom-banner {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 200px;
          pointer-events: none;
          dispaly:inherite
          z-index: 5;
        }

        /* ── Cursor scope ── */
        .ph-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid rgba(152,16,250,0.8);
          background: rgba(152,16,250,0.05);
          backdrop-filter: blur(4px);
          box-shadow: 0 0 15px rgba(152,16,250,0.4);
          transform: translate(-50%, -50%);
          transition: left 0.05s linear, top 0.05s linear;
        }
      `}</style>

      {/* Purple cursor scope */}
      <div className="ph-cursor" style={{ left:`${cursorPos.x}px`, top:`${cursorPos.y}px` }}>
        <div style={{ position:"absolute", width:"1px", height:"100%", background:"rgba(168,85,247,0.5)" }} />
        <div style={{ position:"absolute", height:"1px", width:"100%", background:"rgba(168,85,247,0.5)" }} />
        <div style={{ width:"4px", height:"4px", background:"#c084fc", borderRadius:"50%", boxShadow:"0 0 5px #fff" }} />
        <div style={{ position:"absolute", top:0,    width:"4px",  height:"8px", background:"#a855f7" }} />
        <div style={{ position:"absolute", bottom:0, width:"4px",  height:"8px", background:"#a855f7" }} />
        <div style={{ position:"absolute", left:0,   height:"4px", width:"8px",  background:"#a855f7" }} />
        <div style={{ position:"absolute", right:0,  height:"4px", width:"8px",  background:"#a855f7" }} />
      </div>

      <div className="ph-hero">

        <div className="ph-bg" />

        {/* ══ LEFT — exact PH SVG, outer CW / inner CCW ══ */}
        <div className="ph-svg-left">
          <svg className="ph-ring-outer" xmlns="http://www.w3.org/2000/svg" width="289" height="289" fill="none" viewBox="0 0 289 289">
            <path fill="#fff" d="M272.894 126.269a129.7 129.7 0 01-62.459 129.882 129.71 129.71 0 01-143.899-7.999 129.705 129.705 0 0159.726-232.103 129.841 129.841 0 01146.632 110.22zm-255.49 36.21A128.345 128.345 0 10126.45 17.396 128.48 128.48 0 0017.403 162.48z"/>
            <path fill="#fff" d="M287.381 124.234a144.313 144.313 0 01-229.6 135.612 144.312 144.312 0 01-9.51-222.91 144.314 144.314 0 0175.97-35.333 144.475 144.475 0 01163.14 122.631zM3.132 164.554a142.847 142.847 0 00188.707 114.785 142.841 142.841 0 0075.688-207.503 142.848 142.848 0 00-143.111-68.71A142.967 142.967 0 003.132 164.553z"/>
            <path fill="#fff" d="M49.422 50.628l3.248 3.302A129.243 129.243 0 0042.55 65.1l-3.626-2.883a132.624 132.624 0 0110.498-11.59zm68.498-35.9a132.677 132.677 0 0131.251-2.17l-.161 4.555c-10.101-.5-20.225.201-30.16 2.09l-.93-4.475zM22.403 88.846l4.19 1.968a128.171 128.171 0 00-10.7 73.875l-4.568.687a132.698 132.698 0 0111.078-76.584v.054zm142.36-74.603a132.636 132.636 0 0169.24 34.431l-3.181 3.302a127.911 127.911 0 00-66.841-33.232l.782-4.501zM14.613 180.671l4.461-1.239a129.37 129.37 0 0031.345 54.914l-3.328 3.221a133.68 133.68 0 01-32.477-56.896z"/>
          </svg>
          <svg className="ph-ring-inner" xmlns="http://www.w3.org/2000/svg" width="289" height="289" fill="none" viewBox="0 0 289 289">
            <path fill="#fff" d="M245.066 77.257A121.283 121.283 0 1176.846 44.16a121.392 121.392 0 01168.22 33.097zM44.786 211.679a119.937 119.937 0 1032.8-166.441 120.125 120.125 0 00-32.8 166.441z"/>
            <path fill="#fff" d="M158.443 248.105l1.981 16.171a120.989 120.989 0 01-29.041 0l1.927-16.171a104.512 104.512 0 0025.133 0zm-26.386-.108l-2.129 16.171a120.491 120.491 0 01-28.084-7.277l5.942-15.174a104.143 104.143 0 0024.298 6.28h-.027zm-25.497-6.738l-6.064 15.093a121.911 121.911 0 01-25.416-14.069l9.555-13.219a104.745 104.745 0 0021.952 12.182l-.027.013zm-23.017-12.923l-9.703 13.098a121.751 121.751 0 01-21.103-19.944l12.546-10.417a105.502 105.502 0 0018.287 17.249l-.027.014zM59.65 85.019l-1.064 1.576-13.584-9.015 1.226-1.82L59.65 85.02zm-1.752 2.695a105.365 105.365 0 00-10.996 22.613l-15.403-5.377a120.765 120.765 0 0112.708-26.13l13.691 8.894zm6.604 122.443l-12.654 10.255a120.05 120.05 0 01-15.444-24.607l14.743-6.94a104.278 104.278 0 0013.355 21.224v.068zm-18.004-98.644a103.929 103.929 0 00-4.96 24.634l-16.251-1.267a120.263 120.263 0 015.74-28.488l15.47 5.121zm4.137 76.152l-14.824 6.738a120.952 120.952 0 01-8.746-27.706l16.023-3.005a104.58 104.58 0 007.547 23.973zm-9.177-50.319a106.05 106.05 0 001.347 25.106l-16.05 2.83a122.377 122.377 0 01-1.603-29.001l16.306 1.065z"/>
          </svg>
        </div>

        {/* ══ RIGHT — exact PH SVG, outer CCW / inner CW ══ */}
        <div className="ph-svg-right">
          <svg className="ph-ring-outer" xmlns="http://www.w3.org/2000/svg" width="289" height="289" fill="none" viewBox="0 0 289 289">
            <path fill="#fff" d="M272.894 126.269a129.7 129.7 0 01-62.459 129.882 129.71 129.71 0 01-143.899-7.999 129.705 129.705 0 0159.726-232.103 129.841 129.841 0 01146.632 110.22zm-255.49 36.21A128.345 128.345 0 10126.45 17.396 128.48 128.48 0 0017.403 162.48z"/>
            <path fill="#fff" d="M287.381 124.234a144.313 144.313 0 01-229.6 135.612 144.312 144.312 0 01-9.51-222.91 144.314 144.314 0 0175.97-35.333 144.475 144.475 0 01163.14 122.631zM3.132 164.554a142.847 142.847 0 00188.707 114.785 142.841 142.841 0 0075.688-207.503 142.848 142.848 0 00-143.111-68.71A142.967 142.967 0 003.132 164.553z"/>
            <path fill="#fff" d="M49.422 50.628l3.248 3.302A129.243 129.243 0 0042.55 65.1l-3.626-2.883a132.624 132.624 0 0110.498-11.59zm68.498-35.9a132.677 132.677 0 0131.251-2.17l-.161 4.555c-10.101-.5-20.225.201-30.16 2.09l-.93-4.475zM22.403 88.846l4.19 1.968a128.171 128.171 0 00-10.7 73.875l-4.568.687a132.698 132.698 0 0111.078-76.584v.054zm142.36-74.603a132.636 132.636 0 0169.24 34.431l-3.181 3.302a127.911 127.911 0 00-66.841-33.232l.782-4.501zM14.613 180.671l4.461-1.239a129.37 129.37 0 0031.345 54.914l-3.328 3.221a133.68 133.68 0 01-32.477-56.896z"/>
          </svg>
          <svg className="ph-ring-inner" xmlns="http://www.w3.org/2000/svg" width="289" height="289" fill="none" viewBox="0 0 289 289">
            <path fill="#fff" d="M245.066 77.257A121.283 121.283 0 1176.846 44.16a121.392 121.392 0 01168.22 33.097zM44.786 211.679a119.937 119.937 0 1032.8-166.441 120.125 120.125 0 00-32.8 166.441z"/>
            <path fill="#fff" d="M158.443 248.105l1.981 16.171a120.989 120.989 0 01-29.041 0l1.927-16.171a104.512 104.512 0 0025.133 0zm-26.386-.108l-2.129 16.171a120.491 120.491 0 01-28.084-7.277l5.942-15.174a104.143 104.143 0 0024.298 6.28h-.027zm-25.497-6.738l-6.064 15.093a121.911 121.911 0 01-25.416-14.069l9.555-13.219a104.745 104.745 0 0021.952 12.182l-.027.013zm-23.017-12.923l-9.703 13.098a121.751 121.751 0 01-21.103-19.944l12.546-10.417a105.502 105.502 0 0018.287 17.249l-.027.014zM59.65 85.019l-1.064 1.576-13.584-9.015 1.226-1.82L59.65 85.02zm-1.752 2.695a105.365 105.365 0 00-10.996 22.613l-15.403-5.377a120.765 120.765 0 0112.708-26.13l13.691 8.894zm6.604 122.443l-12.654 10.255a120.05 120.05 0 01-15.444-24.607l14.743-6.94a104.278 104.278 0 0013.355 21.224v.068zm-18.004-98.644a103.929 103.929 0 00-4.96 24.634l-16.251-1.267a120.263 120.263 0 015.74-28.488l15.47 5.121zm4.137 76.152l-14.824 6.738a120.952 120.952 0 01-8.746-27.706l16.023-3.005a104.58 104.58 0 007.547 23.973zm-9.177-50.319a106.05 106.05 0 001.347 25.106l-16.05 2.83a122.377 122.377 0 01-1.603-29.001l16.306 1.065z"/>
          </svg>
        </div>

        {/* Stars */}
        {[
          { w:2, top:"6%",  left:"18%", d:"4s",   dl:"0s"   },
          { w:1, top:"12%", left:"42%", d:"3s",   dl:".5s"  },
          { w:2, top:"8%",  left:"68%", d:"5s",   dl:"1s"   },
          { w:1, top:"18%", left:"80%", d:"3.5s", dl:".2s"  },
          { w:2, top:"4%",  left:"88%", d:"4s",   dl:"1.5s" },
          { w:1, top:"22%", left:"30%", d:"6s",   dl:".8s"  },
          { w:1, top:"30%", left:"55%", d:"4s",   dl:".3s"  },
          { w:2, top:"10%", left:"58%", d:"5s",   dl:"2s"   },
        ].map((s, i) => (
          <div key={i} className="ph-star" style={{
            width:`${s.w}px`, height:`${s.w}px`,
            top:s.top, left:s.left,
            // @ts-ignore
            "--d":s.d, "--dl":s.dl,
          }} />
        ))}

        {/* Floating tech icons */}
        <div className="ph-icon" style={{ top:"22%", left:"13%",
          // @ts-ignore
          "--dur":"7s","--del":"0s","--glow":"rgba(192,132,252,.8)","--r0":"-8deg","--r1":"-3deg" }}>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
            <rect width="54" height="54" rx="12" fill="rgba(168,85,247,.12)" stroke="rgba(192,132,252,.5)" strokeWidth="1.5"/>
            <text x="27" y="36" textAnchor="middle" fontSize="18" fontWeight="800" fill="#c084fc" fontFamily="Arial,sans-serif">CSS</text>
          </svg>
        </div>
        <div className="ph-icon" style={{ top:"19%", right:"13%",
          // @ts-ignore
          "--dur":"8s","--del":"1s","--glow":"rgba(129,140,248,.8)","--r0":"6deg","--r1":"10deg" }}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="12" fill="rgba(99,102,241,.12)" stroke="rgba(129,140,248,.5)" strokeWidth="1.5"/>
            <ellipse cx="26" cy="26" rx="13" ry="5" stroke="#818cf8" strokeWidth="1.4" fill="none"/>
            <ellipse cx="26" cy="26" rx="13" ry="5" stroke="#818cf8" strokeWidth="1.4" fill="none" transform="rotate(60 26 26)"/>
            <ellipse cx="26" cy="26" rx="13" ry="5" stroke="#818cf8" strokeWidth="1.4" fill="none" transform="rotate(120 26 26)"/>
            <circle cx="26" cy="26" r="3" fill="#818cf8"/>
          </svg>
        </div>
        <div className="ph-icon" style={{ top:"50%", left:"9%",
          // @ts-ignore
          "--dur":"6s","--del":".5s","--glow":"rgba(192,132,252,.7)","--r0":"-4deg","--r1":"-1deg" }}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect width="50" height="50" rx="12" fill="rgba(168,85,247,.12)" stroke="rgba(192,132,252,.4)" strokeWidth="1.5"/>
            <path d="M10 28c2-8 6-12 12-12 6 0 9 3 12 6 2-4 6-6 10-6" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M8 36c2-8 6-12 12-12 6 0 9 3 12 6 2-4 6-6 10-6" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <div className="ph-icon" style={{ top:"48%", right:"8%",
          // @ts-ignore
          "--dur":"9s","--del":"1.5s","--glow":"rgba(134,239,172,.7)","--r0":"5deg","--r1":"9deg" }}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="12" fill="rgba(74,222,128,.08)" stroke="rgba(134,239,172,.4)" strokeWidth="1.5"/>
            <path d="M26 10 L40 18 L40 34 L26 42 L12 34 L12 18 Z" stroke="#86efac" strokeWidth="1.4" fill="none"/>
            <text x="26" y="31" textAnchor="middle" fontSize="11" fontWeight="700" fill="#86efac" fontFamily="Arial,sans-serif">JS</text>
          </svg>
        </div>

        {/* Navbar */}
        <nav className="ph-nav">
          <a className="ph-logo" href="#">
            <div className="ph-logo-box">▶</div>
            Bidut
          </a>
          <ul className="ph-nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hero content */}
        <div className="ph-content">
          <h1 className="ph-headline">
            Full Stack Developer <br />
            Bidyut
          </h1>
          <p className="ph-sub">
            Building high-performance web systems — real-time apps,<br />
            scalable architectures, and clean production-grade code.
          </p>

          {/* Explore button */}
          <div className="ph-btn-wrap">
            <div className="ph-explore-border" />
            {/* <button className="ph-explore-btn" tabIndex={0} type="button">
              Explore
            </button> */}
<button
  tabIndex={0}
  type="button"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    cursor: "pointer",
    userSelect: "none",
    textDecoration: "none",
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    minWidth: "64px",
    padding: "6px 8px",
    borderRadius: "4px",
    backgroundImage: "url('/banner/explore-btn.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontWeight: 600,
    color: "#FCE6FA",
    textTransform: "capitalize",
    fontSize: "18px",
    width: "270px",
    height: "56px",
  }}
>
  Explore
</button>

          </div>
        </div>

        {/* Circuit floor — z:2 */}
        <div className="ph-floor-wrap">
          <svg width="100%" height="100%" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice" fill="none">
            <line x1="0"   y1="400" x2="1400" y2="400" stroke="rgba(168,85,247,.35)" strokeWidth="1"/>
            <line x1="80"  y1="360" x2="1320" y2="360" stroke="rgba(168,85,247,.22)" strokeWidth=".8"/>
            <line x1="180" y1="320" x2="1220" y2="320" stroke="rgba(168,85,247,.16)" strokeWidth=".6"/>
            <line x1="270" y1="285" x2="1130" y2="285" stroke="rgba(168,85,247,.11)" strokeWidth=".5"/>
            <line x1="700" y1="100" x2="0"    y2="400" stroke="rgba(168,85,247,.18)" strokeWidth=".5"/>
            <line x1="700" y1="100" x2="1400" y2="400" stroke="rgba(168,85,247,.18)" strokeWidth=".5"/>
            <line x1="700" y1="100" x2="280"  y2="400" stroke="rgba(168,85,247,.10)" strokeWidth=".4"/>
            <line x1="700" y1="100" x2="1120" y2="400" stroke="rgba(168,85,247,.10)" strokeWidth=".4"/>
            <line x1="700" y1="100" x2="560"  y2="400" stroke="rgba(168,85,247,.06)" strokeWidth=".3"/>
            <line x1="700" y1="100" x2="840"  y2="400" stroke="rgba(168,85,247,.06)" strokeWidth=".3"/>
            <line x1="700" y1="100" x2="700"  y2="400" stroke="rgba(168,85,247,.25)" strokeWidth=".6"/>
            <path d="M180 380 L180 358 L320 358 L320 338 L480 338" stroke="rgba(192,132,252,.55)" strokeWidth="1" fill="none"/>
            <circle cx="320" cy="358" r="2.5" fill="rgba(192,132,252,.8)"/>
            <path d="M1220 380 L1220 355 L1080 355 L1080 333 L920 333" stroke="rgba(192,132,252,.55)" strokeWidth="1" fill="none"/>
            <circle cx="1080" cy="355" r="2.5" fill="rgba(192,132,252,.8)"/>
            <path d="M340 370 L360 350 L380 370 L400 350 L420 370" stroke="rgba(168,85,247,.3)" strokeWidth=".7" fill="none"/>
            <circle cx="700" cy="390" r="5"  fill="rgba(192,132,252,.9)"/>
            <circle cx="700" cy="390" r="12" fill="rgba(192,132,252,.12)"/>
          </svg>
        </div>

        {/* City skyline — pinned to bottom of hero */}
       

        {/* bottom-layer.png */}
        <div className="ph-bottom-banner">
          <Image
            src="/bottom-layer.png"
            alt=""
            fill
            style={{ objectFit:"cover", objectPosition:"top center" }}
            priority
          />

           {/* <div style={{
          position: "absolute",
          bottom: -50,
          left: 0,
          right: 0,
          zIndex: 4,
          pointerEvents: "none",
          
        }}>
          <Building/> */}
        {/* </div> */}
        </div>
 


      </div>
     
    </>
  );
}