'use client';
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft, Code2, Workflow, CheckCircle2, FileCode, Server, Database, Zap } from 'lucide-react';

// Project data with detailed information
interface WorkflowStep {
  title: string;
  description: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
  category: string;
  architecture: 'Standard' | 'Monorepo';
  demoImage: string;
  features: string[];
  workflow: WorkflowStep[];
  howItWorks: string;
  technicalHighlights: string[];
}

type ProjectsData = {
  [key: number]: Project;
};
const projectsData: ProjectsData = {
  1: {
    id: 1,
    name: 'Discord Clone',
    description: 'Real-time chat application with voice channels, text channels, and server management built with modern web technologies',
    fullDescription: 'A comprehensive Discord-inspired communication platform featuring real-time messaging, voice channels, server management with role-based permissions, and a modern user interface. The application uses Socket.io for real-time communication and PostgreSQL for data persistence.',
    githubLink: 'https://github.com/bidut04/dis',
    liveLink: '',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'TanStack Query', 'NextAuth', 'Prisma', 'Tailwind CSS'],
    category: 'Social Media',
    architecture: 'Standard',
    demoImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop',
    features: [
      'Real-time messaging with Socket.io',
      'Voice channels for audio communication',
      'Server management and creation',
      'Role-based permissions system',
      'User authentication with NextAuth',
      'Channel organization',
      'Direct messaging',
      'File sharing capabilities'
    ],
    workflow: [
      {
        title: 'Authentication',
        description: 'Users sign in using NextAuth with multiple providers. Session management ensures secure access to all features.'
      },
      {
        title: 'Server Creation',
        description: 'Users can create their own servers or join existing ones using invite links. Each server has customizable settings.'
      },
      {
        title: 'Channel Management',
        description: 'Server owners create text and voice channels. Permissions control who can access each channel.'
      },
      {
        title: 'Real-time Communication',
        description: 'Socket.io handles instant message delivery. Messages are stored in PostgreSQL for persistence.'
      },
      {
        title: 'Voice Channels',
        description: 'WebRTC technology enables voice communication between users in voice channels.'
      }
    ],
    howItWorks: 'The application uses a client-server architecture where Next.js handles the frontend and API routes. Socket.io manages real-time bidirectional communication between clients and server. PostgreSQL stores user data, messages, and server configurations. TanStack Query optimizes data fetching and caching for better performance.',
    technicalHighlights: [
      'Server-Side Rendering with Next.js for optimal performance',
      'Real-time WebSocket connections using Socket.io',
      'Type-safe database operations with Prisma ORM',
      'Optimistic UI updates with TanStack Query',
      'Secure authentication flow with NextAuth',
      'Responsive design with Tailwind CSS'
    ]
  },
  2: {
    id: 2,
    name: 'CollabSpark',
    description: 'Collaborative idea-sharing platform where thoughts turn into real-world projects',
    fullDescription: 'CollabSpark is a social platform designed to connect innovators and turn ideas into reality. Users can share project ideas, find collaborators, and communicate through integrated video calls. The platform uses WebRTC for peer-to-peer video communication and Socket.io for real-time updates.',
    githubLink: 'https://github.com/bidut04/colab-india',
    liveLink: '',
    techStack: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'WebRTC', 'JWT', 'Material-UI'],
    category: 'Social Media',
    architecture: 'Standard',
    demoImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    features: [
      'Idea posting and discovery',
      'Real-time collaboration tools',
      'Video calls with WebRTC',
      'Project matching algorithm',
      'User profiles and portfolios',
      'Skill-based search',
      'Real-time notifications',
      'Project progress tracking'
    ],
    workflow: [
      {
        title: 'User Registration',
        description: 'Users create profiles highlighting their skills, interests, and past projects using JWT-based authentication.'
      },
      {
        title: 'Idea Submission',
        description: 'Users post project ideas with descriptions, required skills, and goals. Ideas are stored in MongoDB.'
      },
      {
        title: 'Discovery & Matching',
        description: 'Algorithm matches users with relevant projects based on skills and interests. Real-time updates via Socket.io.'
      },
      {
        title: 'Collaboration',
        description: 'Interested users can join projects and communicate through the platform\'s messaging system.'
      },
      {
        title: 'Video Communication',
        description: 'WebRTC enables peer-to-peer video calls for team meetings without external tools.'
      }
    ],
    howItWorks: 'CollabSpark uses a MERN stack architecture. The React frontend provides an interactive user interface, while Express.js handles API requests. MongoDB stores user profiles and project data. Socket.io maintains real-time connections for instant notifications and chat. WebRTC facilitates direct peer-to-peer video calls between users.',
    technicalHighlights: [
      'Peer-to-peer video calling with WebRTC',
      'Real-time updates using Socket.io',
      'JWT-based secure authentication',
      'NoSQL database design with MongoDB',
      'RESTful API architecture',
      'Responsive Material-UI components'
    ]
  },
  3: {
    id: 3,
    name: 'Consult Website',
    description: 'Modern agency website with real-time connection capabilities',
    fullDescription: 'A professional consulting agency website featuring real-time chat capabilities, consultation booking system, and interactive UI elements. Built with Next.js and TypeScript for type safety and optimal performance.',
    githubLink: 'https://github.com/bidut04/',
    liveLink: 'https://consult-two-wheat.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'React Hook Form', 'Zod'],
    category: 'Business',
    architecture: 'Standard',
    demoImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    features: [
      'Real-time chat support',
      'Consultation booking system',
      'Interactive service showcase',
      'Responsive design',
      'Contact form with validation',
      'Team member profiles',
      'Portfolio section',
      'Client testimonials'
    ],
    workflow: [
      {
        title: 'Landing Page',
        description: 'Visitors are greeted with an engaging hero section showcasing services and value propositions.'
      },
      {
        title: 'Service Exploration',
        description: 'Interactive sections highlight consulting services with smooth animations and detailed descriptions.'
      },
      {
        title: 'Live Chat',
        description: 'Socket.io-powered chat allows instant communication with consultants without page reloads.'
      },
      {
        title: 'Booking System',
        description: 'Users can schedule consultations through an integrated form with date/time selection.'
      },
      {
        title: 'Form Submission',
        description: 'Validated contact forms use Zod schemas to ensure data integrity before submission.'
      }
    ],
    howItWorks: 'The website leverages Next.js for server-side rendering and static site generation, ensuring fast load times and SEO optimization. Socket.io enables real-time chat functionality. TypeScript provides type safety throughout the codebase. Tailwind CSS delivers a modern, responsive design.',
    technicalHighlights: [
      'Server-Side Rendering for SEO',
      'Type-safe development with TypeScript',
      'Real-time chat with Socket.io',
      'Form validation using Zod',
      'Optimized images with Next.js Image',
      'Utility-first CSS with Tailwind'
    ]
  },
  4: {
    id: 4,
    name: 'Food Delivery Platform',
    description: 'Full-stack food delivery application with multi-role architecture',
    fullDescription: 'A comprehensive food delivery ecosystem built as a monorepo containing separate applications for customers, restaurants, delivery partners, and administrators. Features real-time order tracking, restaurant approval workflows, and sophisticated menu management.',
    githubLink: 'https://github.com/bidut04/aiinit',
    liveLink: '',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Redis', 'TanStack Query', 'NextAuth', 'Prisma', 'Turborepo', 'Shadcn/ui'],
    category: 'Food & Restaurant',
    architecture: 'Monorepo',
    demoImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop',
    features: [
      'Multi-app monorepo architecture',
      'Restaurant approval system',
      'Real-time order tracking',
      'Menu management dashboard',
      'Order processing workflow',
      'Delivery partner matching',
      'Payment integration',
      'Rating and review system',
      'Admin analytics dashboard',
      'Real-time notifications'
    ],
    workflow: [
      {
        title: 'Restaurant Onboarding',
        description: 'Restaurants apply through a dedicated portal. Admin reviews and approves applications via approval dashboard.'
      },
      {
        title: 'Menu Setup',
        description: 'Approved restaurants create menus with items, descriptions, prices, and images. Data stored in PostgreSQL.'
      },
      {
        title: 'Customer Ordering',
        description: 'Customers browse restaurants, add items to cart, and place orders. TanStack Query handles data fetching.'
      },
      {
        title: 'Order Processing',
        description: 'Restaurant receives order notification via Socket.io. They confirm and prepare the order.'
      },
      {
        title: 'Delivery Assignment',
        description: 'System assigns available delivery partner. Real-time location tracking via Socket.io and Redis caching.'
      },
      {
        title: 'Completion',
        description: 'Order delivered and payment processed. Users can rate experience and provide feedback.'
      }
    ],
    howItWorks: 'Built as a Turborepo monorepo with separate Next.js apps for each user role, sharing common UI components and utilities. PostgreSQL handles persistent data storage. Redis caches frequently accessed data and manages real-time delivery tracking. Socket.io provides real-time updates across all apps. Prisma ORM ensures type-safe database operations.',
    technicalHighlights: [
      'Monorepo architecture with Turborepo',
      'Shared UI component library with Shadcn/ui',
      'Real-time tracking with Socket.io and Redis',
      'Type-safe database with Prisma ORM',
      'Optimistic updates with TanStack Query',
      'Multi-tenant authentication with NextAuth',
      'Efficient data caching strategy',
      'Scalable microservices-ready architecture'
    ]
  }
};

export default function ProjectDetailPage() {
const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Get project ID from URL
    const pathParts = window.location.pathname.split('/');
    const projectId = parseInt(pathParts[pathParts.length - 1]);
    
    // Load project data
    const projectData = projectsData[projectId];
    if (projectData) {
      setProject(projectData);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050a18] flex items-center justify-center">
        <div className="text-[#60a5fa] text-xl">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050a18] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#60a5fa] mb-4">Project Not Found</h1>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a18] text-[#60a5fa]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.demoImage} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-[#050a18]/80 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-[#60a5fa] hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              {project.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg shadow-blue-500/30"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileCode className="w-8 h-8 text-blue-400" />
              Project Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-blue-400" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 text-center hover:bg-blue-500/20 transition-all hover:scale-105"
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
            {project.architecture === 'Monorepo' && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/30 rounded-xl">
                <p className="text-sm text-gray-300">
                  <strong className="text-blue-300">Architecture:</strong> This project uses a monorepo structure, allowing multiple applications to share common code and dependencies efficiently.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-400" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Server className="w-8 h-8 text-blue-400" />
              How It Works
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.howItWorks}
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Technical Highlights</h3>
            <ul className="space-y-3">
              {project.technicalHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 text-xl">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Workflow className="w-8 h-8 text-blue-400" />
              Application Workflow
            </h2>
            <div className="space-y-6">
              {project.workflow.map((step, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-400/30 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#050a18]" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-400/30">
            <h2 className="text-3xl font-bold mb-4">Interested in this project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Check out the source code on GitHub or explore the live demo to see it in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all text-lg font-medium"
              >
                <Github className="w-6 h-6" />
                Explore Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/30 text-lg font-medium"
                >
                  <ExternalLink className="w-6 h-6" />
                  Try Live Demo
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}