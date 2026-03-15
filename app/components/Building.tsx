import React from 'react'

function Building() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "320px",
      background: "linear-gradient(to bottom, #0a0514 0%, #0d0520 60%, #0a0514 100%)",
    }}>
      <style>{`
        .ph-city-wrap {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 100%;
          pointer-events: none;
          z-index: 3;
          overflow: visible;
        }

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
      `}</style>

      {/* City skyline */}
      <div className="ph-city-wrap">
        <svg width="100%" height="100%" viewBox="0 0 1400 320" preserveAspectRatio="xMidYMax meet" fill="none">
          <defs>
            <linearGradient id="cb1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a855f7"/><stop offset="100%" stopColor="#3b0764"/></linearGradient>
            <linearGradient id="cb2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#2e1065"/></linearGradient>
            <linearGradient id="cb3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc"/><stop offset="100%" stopColor="#4c1d95"/></linearGradient>
            <linearGradient id="cb4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#1d4ed8"/></linearGradient>
            <linearGradient id="cb5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e879f9"/><stop offset="100%" stopColor="#6b21a8"/></linearGradient>
            <linearGradient id="cb6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#065f46"/></linearGradient>
          </defs>

          {/* Background fill matching hero */}
          <rect x="0" y="0" width="1400" height="320" fill="#0a0514"/>

          {/* Subtle purple glow at horizon */}
          <ellipse cx="700" cy="260" rx="700" ry="80" fill="rgba(100,20,180,0.18)"/>

          <rect x="10"  y="170" width="70"  height="120" fill="url(#cb2)" opacity=".7"/>
          <rect x="120" y="155" width="80"  height="135" fill="url(#cb3)" opacity=".8"/>
          <rect x="290" y="100" width="90"  height="190" fill="url(#cb1)" opacity=".85"/>

          {/* Left building windows */}
          <rect className="wf-a" x="300" y="115" width="6" height="5" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"2.8s","--wd":"0s"} as React.CSSProperties}/>
          <rect className="wf-c" x="312" y="115" width="6" height="5" fill="rgba(255,220,160,.8)" rx="1" style={{"--ws":"3.5s","--wd":"0.4s"} as React.CSSProperties}/>
          <rect className="wf-b" x="324" y="115" width="6" height="5" fill="rgba(255,200,100,.6)" rx="1" style={{"--ws":"4.1s","--wd":"0.8s"} as React.CSSProperties}/>
          <rect className="wf-d" x="300" y="128" width="6" height="5" fill="rgba(255,220,160,.7)" rx="1" style={{"--ws":"3.2s","--wd":"1.1s"} as React.CSSProperties}/>
          <rect className="wf-e" x="312" y="128" width="6" height="5" fill="rgba(255,200,100,.8)" rx="1" style={{"--ws":"2.5s","--wd":"0.3s"} as React.CSSProperties}/>
          <rect className="wf-a" x="324" y="128" width="6" height="5" fill="rgba(255,220,160,.6)" rx="1" style={{"--ws":"4.8s","--wd":"1.5s"} as React.CSSProperties}/>
          <rect className="wf-c" x="300" y="141" width="6" height="5" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"3.9s","--wd":"0.7s"} as React.CSSProperties}/>
          <rect className="wf-b" x="312" y="141" width="6" height="5" fill="rgba(255,220,160,.8)" rx="1" style={{"--ws":"2.2s","--wd":"1.9s"} as React.CSSProperties}/>

          <rect x="375" y="175" width="55" height="115" fill="url(#cb5)" opacity=".7"/>

          {/* Center tall building */}
          <rect x="560" y="60" width="100" height="230" fill="url(#cb2)" opacity=".9"/>
          <rect className="wf-b" x="572" y="75"  width="7" height="6" fill="rgba(255,220,160,.8)" rx="1" style={{"--ws":"3.1s","--wd":"0s"} as React.CSSProperties}/>
          <rect className="wf-e" x="585" y="75"  width="7" height="6" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"4.3s","--wd":"0.6s"} as React.CSSProperties}/>
          <rect className="wf-a" x="598" y="75"  width="7" height="6" fill="rgba(255,220,160,.6)" rx="1" style={{"--ws":"2.7s","--wd":"1.2s"} as React.CSSProperties}/>
          <rect className="wf-d" x="611" y="75"  width="7" height="6" fill="rgba(255,200,100,.8)" rx="1" style={{"--ws":"3.8s","--wd":"0.9s"} as React.CSSProperties}/>
          <rect className="wf-c" x="572" y="90"  width="7" height="6" fill="rgba(255,220,160,.7)" rx="1" style={{"--ws":"5.0s","--wd":"0.2s"} as React.CSSProperties}/>
          <rect className="wf-a" x="585" y="90"  width="7" height="6" fill="rgba(255,200,100,.6)" rx="1" style={{"--ws":"2.4s","--wd":"1.7s"} as React.CSSProperties}/>
          <rect className="wf-e" x="598" y="90"  width="7" height="6" fill="rgba(255,220,160,.8)" rx="1" style={{"--ws":"3.6s","--wd":"0.5s"} as React.CSSProperties}/>
          <rect className="wf-b" x="611" y="90"  width="7" height="6" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"4.5s","--wd":"1.0s"} as React.CSSProperties}/>
          <rect className="wf-d" x="572" y="105" width="7" height="6" fill="rgba(255,220,160,.6)" rx="1" style={{"--ws":"2.9s","--wd":"1.4s"} as React.CSSProperties}/>
          <rect className="wf-c" x="585" y="105" width="7" height="6" fill="rgba(255,200,100,.8)" rx="1" style={{"--ws":"3.3s","--wd":"0.1s"} as React.CSSProperties}/>
          <rect className="wf-a" x="598" y="105" width="7" height="6" fill="rgba(255,220,160,.7)" rx="1" style={{"--ws":"4.7s","--wd":"0.8s"} as React.CSSProperties}/>
          <rect className="wf-e" x="611" y="105" width="7" height="6" fill="rgba(255,200,100,.6)" rx="1" style={{"--ws":"2.1s","--wd":"1.6s"} as React.CSSProperties}/>
          <rect className="wf-b" x="572" y="120" width="7" height="6" fill="rgba(255,220,160,.8)" rx="1" style={{"--ws":"3.4s","--wd":"0.3s"} as React.CSSProperties}/>
          <rect className="wf-d" x="585" y="120" width="7" height="6" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"4.9s","--wd":"1.1s"} as React.CSSProperties}/>

          <rect x="655" y="130" width="75" height="160" fill="url(#cb6)" opacity=".55"/>

          {/* Right tall building */}
          <rect x="810" y="90" width="85" height="200" fill="url(#cb1)" opacity=".85"/>
          <rect className="wf-c" x="820" y="105" width="6" height="5" fill="rgba(255,200,100,.8)" rx="1" style={{"--ws":"3.7s","--wd":"0s"} as React.CSSProperties}/>
          <rect className="wf-a" x="832" y="105" width="6" height="5" fill="rgba(255,220,160,.6)" rx="1" style={{"--ws":"2.6s","--wd":"0.7s"} as React.CSSProperties}/>
          <rect className="wf-e" x="844" y="105" width="6" height="5" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"4.2s","--wd":"1.3s"} as React.CSSProperties}/>
          <rect className="wf-b" x="820" y="118" width="6" height="5" fill="rgba(255,220,160,.8)" rx="1" style={{"--ws":"3.0s","--wd":"0.4s"} as React.CSSProperties}/>
          <rect className="wf-d" x="832" y="118" width="6" height="5" fill="rgba(255,200,100,.6)" rx="1" style={{"--ws":"5.1s","--wd":"1.8s"} as React.CSSProperties}/>
          <rect className="wf-c" x="844" y="118" width="6" height="5" fill="rgba(255,220,160,.7)" rx="1" style={{"--ws":"2.3s","--wd":"0.9s"} as React.CSSProperties}/>
          <rect className="wf-a" x="820" y="131" width="6" height="5" fill="rgba(255,200,100,.8)" rx="1" style={{"--ws":"4.0s","--wd":"0.2s"} as React.CSSProperties}/>
          <rect className="wf-e" x="832" y="131" width="6" height="5" fill="rgba(255,220,160,.6)" rx="1" style={{"--ws":"3.5s","--wd":"1.5s"} as React.CSSProperties}/>
          <rect className="wf-b" x="844" y="131" width="6" height="5" fill="rgba(255,200,100,.7)" rx="1" style={{"--ws":"2.8s","--wd":"0.6s"} as React.CSSProperties}/>

          <rect x="890"  y="175" width="50" height="115" fill="url(#cb5)" opacity=".65"/>
          <rect x="975"  y="155" width="80" height="135" fill="url(#cb3)" opacity=".8"/>
          <rect x="1095" y="170" width="70" height="120" fill="url(#cb4)" opacity=".6"/>
          <rect x="1210" y="175" width="65" height="115" fill="url(#cb1)" opacity=".7"/>
          <rect x="1315" y="185" width="60" height="105" fill="url(#cb2)" opacity=".65"/>

          {/* Foreground silhouette — matches #0a0514 */}
          <rect x="0"    y="255" width="160" height="65" fill="#0a0514" opacity="1"/>
          <rect x="430"  y="248" width="100" height="72" fill="#0a0514" opacity="1"/>
          <rect x="740"  y="252" width="90"  height="68" fill="#0a0514" opacity="1"/>
          <rect x="1260" y="265" width="140" height="55" fill="#0a0514" opacity="1"/>

          {/* Ground fill */}
          <rect x="0" y="290" width="1400" height="30" fill="#0a0514"/>

          {/* Glow at base */}
          <ellipse cx="700" cy="295" rx="400" ry="10" fill="rgba(168,85,247,.18)"/>
        </svg>
      </div>
    </div>
  )
}

export default Building