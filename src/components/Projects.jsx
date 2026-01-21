import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "BeaverBuddy",
      description: "Full-stack mental health web application for Canadian immigrants with AI-powered check-ins and cultural integration features.",
      longDescription: "A comprehensive platform designed to support mental health and cultural integration for Canadian immigrants.",
      tech: ["TypeScript", "Next.js", "Express.js", "PostgreSQL", "Prisma", "OpenAI API", "JWT"],
      highlights: [
        "Secure JWT authentication and session management",
        "AI-generated daily check-ins and cultural quests using ChatGPT",
        "Integrated Ticketmaster API for local events discovery",
        "Optimized PostgreSQL queries with Prisma ORM"
      ],
      image: "/images/projects/BeaverBuddy.jpg",
      github: "https://github.com/a1desai",
      demo: null,
      featured: true,
      color: "from-violet-500 to-pink-400"
    },
    {
      title: "AI Racer",
      description: "Reinforcement learning racing game built with Godot, featuring neural networks trained with 10,000+ episodes to achieve 60% improvement in task completion.",
      longDescription: "An AI training platform for autonomous racing with real-time visualization.",
      tech: ["Python", "Godot", "GDScript", "PyTorch", "Hugging Face", "Reinforcement Learning"],
      highlights: [
        "Designed reward functions and training loops for autonomous navigation",
        "Implemented collision avoidance and lap time optimization",
        "Real-time visualization of AI decision-making and learning progress",
        "Dynamic track environments with optimized racer behavior"
      ],
      github: "https://github.com/a1desai",
      demo: null,
      featured: true,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "FlashFocus",
      description: "Educational web application helping students master flashcard learning with optimized content delivery and efficient data processing.",
      longDescription: "Smart flashcard learning system with efficient data processing.",
      tech: ["React", "TypeScript", "Java", "RESTful API", "HTML/CSS"],
      highlights: [
        "Reusable UI components for enhanced user experience",
        "Java backend reducing content creation time by 80%",
        "Efficient data processing and database management",
        "Responsive design for all devices"
      ],
      github: "https://github.com/a1desai",
      demo: null,
      featured: false,
      color: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl opacity-30 -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of my recent work showcasing full-stack development, AI/ML, and innovative problem-solving.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg hover:border-violet-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10`} />

              {/* Project Image */}
              {project.image && (
                <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-300 transition duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <Sparkles className="text-yellow-400 opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110" size={24} />
                </div>

                <p className="text-gray-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-gray-400 flex items-center">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights - Animated on hover */}
                <div className={`mb-6 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500`}>
                  <h4 className="text-sm font-semibold text-violet-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex gap-2 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                        <span className="text-pink-400 flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-700/50 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-3 py-2 bg-violet-600/20 hover:bg-violet-600/40 text-violet-400 hover:text-violet-300 rounded-lg transition transform hover:translate-x-1 text-sm font-semibold">
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-pink-600/20 hover:bg-pink-600/40 text-pink-400 hover:text-pink-300 rounded-lg transition transform hover:translate-x-1 text-sm font-semibold">
                      <ExternalLink size={16} />
                      View Demo
                    </a>
                  )}
                  <div className="ml-auto">
                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-violet-400 transition" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
