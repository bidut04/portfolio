import React, { useState, useEffect, useRef } from 'react';

const SkillsScrollBanner: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  const [isPaused, setIsPaused] = useState(false);
  const lastScrollY = useRef(0);

  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
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
    <div className="relative w-full overflow-hidden bg-[#050a18] py-16">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
      `}</style>

      {/* Stronger edge fades for a "vanishing" effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#050a18] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#050a18] to-transparent z-20 pointer-events-none" />
      
      <div 
        className={`flex w-max items-center ${scrollDirection === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center px-12 transition-all duration-500"
          >
            {/* Logo Container - No Box, No Border */}
            <div className="relative flex items-center justify-center">
              {/* Animated Glow Backdrop */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[40px] rounded-full scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
              
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 
                           grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 
                           group-hover:scale-125 transition-all duration-500 ease-out"
              />
            </div>
            
            {/* Minimalist Text */}
            <span className="mt-6 text-[10px] font-bold text-blue-100/30 group-hover:text-white uppercase tracking-[0.3em] transition-all duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsScrollBanner;