import React, { useState, useEffect, useRef } from 'react';

const SkillsScrollBanner: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  const [isPaused, setIsPaused] = useState(false);
  const lastScrollY = useRef(0);

  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#FFFFFF' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'right' : 'left');
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      padding: '4rem 0'
    }}>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { 
          animation: scroll-left 40s linear infinite; 
        }
        .animate-scroll-right { 
          animation: scroll-right 40s linear infinite; 
        }
        .skills-container {
          display: flex;
          flex-direction: row;
          width: max-content;
          align-items: center;
          gap: 0;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 3rem;
          min-width: 150px;
        }
        .skill-item:hover .skill-text {
          color: var(--skill-color);
        }
      `}</style>

      {/* Edge fades */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '128px',
        background: 'linear-gradient(to right, #171717, transparent)',
        zIndex: 20,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '128px',
        background: 'linear-gradient(to left, #171717, transparent)',
        zIndex: 20,
        pointerEvents: 'none'
      }} />
      
      <div 
        className={`skills-container ${scrollDirection === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={index} 
            className="skill-item group"
            style={{ '--skill-color': skill.color } as React.CSSProperties}
          >
            {/* Logo Container */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px'
            }}>
              {/* Glow effect with brand color */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `${skill.color}40`,
                filter: 'blur(40px)',
                borderRadius: '50%',
                transform: 'scale(0.5)',
                opacity: 0,
                transition: 'all 0.7s ease'
              }} className="group-hover:opacity-100 group-hover:scale-150" />
              
              <img 
                src={skill.logo} 
                alt={skill.name}
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 10,
                  filter: 'grayscale(1)',
                  opacity: 0.6,
                  transition: 'all 0.5s ease-out'
                }}
                className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
            
            {/* Text with brand color on hover */}
            <span 
              className="skill-text"
              style={{
                marginTop: '1.5rem',
                fontSize: '10px',
                fontWeight: 'bold',
                color: 'rgba(219, 234, 254, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                transition: 'all 0.3s ease'
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsScrollBanner;