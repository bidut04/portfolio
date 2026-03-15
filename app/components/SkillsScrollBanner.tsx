import React, { useState, useEffect, useRef } from 'react';

const SkillsScrollBanner: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lastScrollY = useRef(0);

  const skills = [
    { name: 'HTML5',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',           color: '#E34F26' },
    { name: 'CSS3',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',             color: '#1572B6' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',           color: '#61DAFB' },
    { name: 'Next.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',         color: '#FFFFFF' },
    { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',         color: '#339933' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',       color: '#FFFFFF' },
    { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',       color: '#47A248' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
    { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',               color: '#F05032' },
    { name: 'Java',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',             color: '#007396' },
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

  const allSkills = [...skills, ...skills];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      background: '#050a18',
      padding: '4rem 0',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    }}>
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left  { animation: scroll-left  40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .skills-track {
          display: flex;
          flex-direction: row;
          width: max-content;
          align-items: center;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 3rem;
          min-width: 150px;
          cursor: pointer;
        }
      `}</style>

      {/* Edges faded via maskImage on parent — no overlay needed */}

      <div
        className={`skills-track ${scrollDirection === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setHoveredIndex(null); }}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {allSkills.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="skill-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Logo wrapper with glow */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
              }}>
                {/* Glow blob — only visible on hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `${skill.color}55`,
                  filter: 'blur(20px)',
                  borderRadius: '50%',
                  transform: isHovered ? 'scale(1.6)' : 'scale(0.4)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'all 0.5s ease',
                  pointerEvents: 'none',
                }} />

                {/* Logo image */}
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 10,
                    // Grayscale when not hovered, full color on hover
                    filter: isHovered ? 'grayscale(0) brightness(1.1)' : 'grayscale(1)',
                    opacity: isHovered ? 1 : 0.5,
                    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    transition: 'all 0.4s ease',
                  }}
                />
              </div>

              {/* Skill name — brand color on hover */}
              <span style={{
                marginTop: '1.2rem',
                fontSize: '10px',
                fontWeight: 'bold',
                color: isHovered ? skill.color : 'rgba(219, 234, 254, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                transition: 'color 0.3s ease',
              }}>
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsScrollBanner;