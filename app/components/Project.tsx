'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code2, Folder, Mail, Phone, MapPin } from 'lucide-react';

// Extend Window interface for Locomotive Scroll
declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}

// Initial project data
const initialProjects = [
  {
    id: 1,
    name: 'Discord Clone',
    description: 'Real-time chat application with voice channels, text channels, and server management',
    githubLink: 'https://github.com/bidut04/dis',
    liveLink: '',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'TanStack Query', 'NextAuth'],
    category: 'Social Media',
    architecture: 'Standard',
    features: ['Real-time messaging', 'Voice channels', 'Server management', 'Role-based permissions'],
    demoImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'CollabSpark',
    description: 'Collaborative idea-sharing platform where thoughts turn into real-world projects with WebRTC integration',
    githubLink: 'https://github.com/bidut04/colab-india',
    liveLink: '',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'WebRTC', 'JWT'],
    category: 'Social Media',
    architecture: 'Standard',
    features: ['Idea sharing', 'Real-time collaboration', 'Video calls', 'Project matching'],
    demoImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Consult Website',
    description: 'Modern agency website with real-time connection capabilities and interactive features',
    githubLink: 'https://github.com/bidut04/',
    liveLink: 'https://consult-two-wheat.vercel.app/',
    techStack: ['Next.js', 'Socket.io', 'TypeScript', 'Tailwind CSS'],
    category: 'Business',
    architecture: 'Standard',
    features: ['Real-time chat', 'Consultation booking', 'Interactive UI', 'Responsive design'],
    demoImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'Food Delivery Platform',
    description: 'Full-stack food delivery application with multi-role architecture and real-time order tracking',
    githubLink: 'https://github.com/bidut04/aiinit',
    liveLink: '',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Redis', 'TanStack Query', 'NextAuth'],
    category: 'Food & Restaurant',
    architecture: 'Monorepo',
    features: ['Multi-app architecture', 'Restaurant approval system', 'Real-time tracking', 'Menu management', 'Order processing'],
    demoImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop'
  },
  // ✅ NEW — NoobDoc
  {
    id: 5,
    name: 'NoobDoc',
    description: 'A community-driven developer documentation platform where developers can explore versioned tech stack guides, contribute library documentation, and find install commands across all major package managers — all in one place.',
    githubLink: 'https://github.com/bidut04/noob-doc',
    liveLink: 'https://noob-doc-web-oklt.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Clerk'],
    category: 'Education & Docs',
    architecture: 'Monorepo',
    features: [
      'Versioned tech stack documentation',
      'Auto-generated setup guides per version',
      'npm / pnpm / yarn / bun install commands',
      'Version lifecycle tracking (Active, LTS, Beta, Deprecated)',
      'Community library documentation contributions',
      'Redis caching for fast lookups',
      'Clerk authentication',
    ],
    demoImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
  }
];
// Resume Component
const ResumeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div 
        className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10"
        data-scroll
        data-scroll-speed="1"
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Bidyut Kumar Bhowmick
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto mb-4">
            Results-oriented Engineer with excellent communication and team leadership skills. Quick learner and adaptable to new technologies.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 text-gray-300 text-sm md:text-base">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              <span className="break-all">barunbhowmick727@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              <span>7477500659</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              <span>Ghatal, India</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Education */}
          <div className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-300">Education</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-white">Bachelor of Computer Applications</h4>
                <p className="text-sm md:text-base text-gray-400">Bengal Institute of Technology and Management</p>
                <p className="text-xs md:text-sm text-gray-500">11/2021 - 06/2025 | Bolpur Shantiniketan</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-white">Higher Secondary (Arts)</h4>
                <p className="text-sm md:text-base text-gray-400">DVHS</p>
                <p className="text-xs md:text-sm text-gray-500">03/2020 - 04/2022 | 67%</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-300">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Socket.io', 'Git', 'Java', 'C'].map((skill, i) => (
                <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 bg-purple-500/20 rounded-lg text-xs md:text-sm border border-purple-400/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-6 md:mt-8 bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-300">Languages</h3>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-lg border border-blue-400/30 text-xs md:text-sm">
              English - Professional Proficiency
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-lg border border-blue-400/30 text-xs md:text-sm">
              Hindi - Professional Proficiency
            </span>
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-lg border border-blue-400/30 text-xs md:text-sm">
              Bengali - Native
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card with Target Lock Animation
interface Project {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
  category: string;
  architecture: string;
  features: string[];
  demoImage: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onHover: (id: number) => void;
  onLeave: () => void;
  isHovered: boolean;
}

const ProjectCard = ({ project, index, onHover, onLeave, isHovered }: ProjectCardProps) => {
  const handleProjectClick = (projectId: number) => {
    window.location.href = `/projects/${projectId}`;
  };

  return (
    <div 
      onClick={() => handleProjectClick(project.id)}
      data-scroll
      data-scroll-speed={index % 2 === 0 ? "1" : "1.5"}
      className="project-card cursor-pointer w-full"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
    >
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full group">
        {/* Image Container with Target Lock Effect */}
        <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
          <img 
            src={project.demoImage} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Corner Target Locks */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {/* Top-left corner */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 w-6 md:w-8 h-6 md:h-8 border-l-2 border-t-2 border-purple-500 animate-pulse" />
            <div className="absolute top-2 md:top-4 left-2 md:left-4 w-8 md:w-12 h-8 md:h-12 border-l border-t border-purple-400/50" />
            
            {/* Top-right corner */}
            <div className="absolute top-2 md:top-4 right-2 md:right-4 w-6 md:w-8 h-6 md:h-8 border-r-2 border-t-2 border-purple-500 animate-pulse" />
            <div className="absolute top-2 md:top-4 right-2 md:right-4 w-8 md:w-12 h-8 md:h-12 border-r border-t border-purple-400/50" />
            
            {/* Bottom-left corner */}
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-6 md:w-8 h-6 md:h-8 border-l-2 border-b-2 border-purple-500 animate-pulse" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-8 md:w-12 h-8 md:h-12 border-l border-b border-purple-400/50" />
            
            {/* Bottom-right corner */}
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-6 md:w-8 h-6 md:h-8 border-r-2 border-b-2 border-purple-500 animate-pulse" />
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-8 md:w-12 h-8 md:h-12 border-r border-b border-purple-400/50" />
          </div>

          {/* Overlay with Tech Stack and Description */}
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} flex flex-col justify-end p-4 md:p-6`}>
            <p className="text-white text-xs md:text-sm mb-2 md:mb-3 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span key={i} className="px-2 md:px-3 py-0.5 md:py-1 bg-purple-500/30 rounded-lg text-[10px] md:text-xs border border-purple-400/50 text-white">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 md:px-3 py-0.5 md:py-1 bg-purple-500/30 rounded-lg text-[10px] md:text-xs border border-purple-400/50 text-white">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 md:p-6 lg:p-8">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                {project.name}
              </h2>
              <div className="flex items-center gap-2 text-xs md:text-sm flex-wrap">
                <span className="px-2 md:px-3 py-1 bg-purple-500/30 rounded-full border border-purple-400/30">
                  {project.category}
                </span>
                {project.architecture === 'Monorepo' && (
                  <span className="px-2 md:px-3 py-1 bg-blue-500/30 rounded-full flex items-center gap-1 border border-blue-400/30">
                    <Folder className="w-3 h-3" />
                    <span className="hidden sm:inline">Monorepo</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4 md:mb-6">
            <div className="text-xs md:text-sm font-semibold text-purple-300 mb-2">
              Key Features
            </div>
            <ul className="grid grid-cols-1 gap-1.5 md:gap-2 text-xs md:text-sm text-gray-300">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 text-sm md:text-base leading-none mt-0.5">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-slate-800/80 hover:bg-slate-700 rounded-lg md:rounded-xl transition-all flex-1 justify-center font-medium text-xs md:text-sm hover:scale-105"
            >
              <Github className="w-3 h-3 md:w-4 md:h-4" />
              GitHub
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg md:rounded-xl transition-all flex-1 justify-center font-medium text-xs md:text-sm hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectShowcase() {
  const [projects] = useState<Project[]>(initialProjects);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollRef = useRef(null);
  const locomotiveRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/locomotive-scroll/4.1.4/locomotive-scroll.min.js';
      script.async = true;
      
      script.onload = () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/locomotive-scroll/4.1.4/locomotive-scroll.min.css';
        document.head.appendChild(link);

        setTimeout(() => {
          if (window.LocomotiveScroll) {
            locomotiveRef.current = new window.LocomotiveScroll({
              el: scrollRef.current,
              smooth: true,
              multiplier: 1,
              class: 'is-reveal',
              smartphone: {
                smooth: true
              },
              tablet: {
                smooth: true
              }
            });
          }
        }, 100);
      };

      document.body.appendChild(script);

      return () => {
        if (locomotiveRef.current) {
          locomotiveRef.current.destroy();
        }
      };
    }
  }, [loading]);

  const categories = ['All', 'Social Media', 'Business', 'Food & Restaurant'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-lg md:text-xl">Loading projects...</div>
      </div>
    );
  }

  return (
    <div ref={scrollRef} data-scroll-container>
      <div className="min-h-screen bg-[#050a18] text-[#60a5fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Header */}
          <div 
            className="text-center mb-12 md:mb-16"
            data-scroll
            data-scroll-speed="2"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent px-4">
              My Projects
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto px-4">
              A showcase of my full-stack development work featuring modern web applications <span className='text-pink-500 block sm:inline mt-2 sm:mt-0'>click project card for better understanding</span>
            </p>
          </div>

          {/* Category Filter */}
          <div 
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4"
            data-scroll
            data-scroll-speed="1"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all text-xs md:text-base ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid - Full width on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pb-12 md:pb-20">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onHover={setHoveredProject}
                onLeave={() => setHoveredProject(null)}
                isHovered={hoveredProject === project.id}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div 
              className="text-center py-20"
              data-scroll
              data-scroll-speed="1"
            >
              <p className="text-gray-400 text-lg md:text-xl">No projects found in this category</p>
            </div>
          )}
        </div>

        {/* Resume Section */}
        <div className="border-t border-white/10">
          <ResumeSection />
        </div>

        {/* Footer Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center py-12 md:py-16 border-t border-white/10"
            data-scroll
            data-scroll-speed="2"
          >
            <p className="text-gray-400 text-base md:text-lg mb-4 px-4">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="https://github.com/bidut04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all font-medium text-sm md:text-base hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}