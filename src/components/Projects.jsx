import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BeaverBuddy",
      tag: "AI-Powered",
      type: "FULL-STACK + LLM",
      description: "Comprehensive mental health platform designed for Canadian immigrants, featuring AI-powered cultural integration guidance, peer support communities, and personalized wellness resources using OpenAI API.",
      tech: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Prisma", "JWT", "OpenAI API"],
      github: "https://github.com/a1desai/BeaverBuddy",
      demo: "https://beaverbuddy.vercel.app",
      image: "/images/projects/BeaverBuddy.jpeg",
      highlights: [
        "Implemented secure JWT authentication with role-based access control",
        "Built RESTful APIs with Express.js processing 1000+ requests/day",
        "Integrated OpenAI API for intelligent cultural guidance and support recommendations",
        "Designed PostgreSQL schema with Prisma ORM for efficient data management"
      ],
      date: "December 2025",
      status: "Completed",
      isPersonal: true
    },
    {
      title: "AI Racer",
      tag: "Deep Learning",
      type: "REINFORCEMENT LEARNING",
      description: "Advanced autonomous racing AI system trained with reinforcement learning, utilizing deep neural networks trained on 10,000+ episodes in custom Godot game engine environment.",
      tech: ["Python", "PyTorch", "Hugging Face", "Godot", "GDScript", "Deep RL"],
      github: "https://github.com/a1desai/AIRacer",
      demo: "https://github.com/a1desai/AIRacer",
      image: "/images/projects/AIRacer.jpg",
      highlights: [
        "Designed and trained custom neural network policy using PPO algorithm",
        "Built Godot simulation environment with GDScript for ML training pipeline",
        "Achieved 95% win rate against rule-based baselines after optimization",
        "Implemented experience replay buffer for efficient policy learning"
      ],
      date: "December 2025",
      status: "Showcase",
      isPersonal: true
    },
    {
      title: "FlashFocus",
      tag: "Education",
      type: "FULL-STACK WEB",
      description: "Intelligent spaced repetition flashcard system with ML-based content optimization using interval scheduling algorithm for accelerated, efficient learning.",
      tech: ["Java", "TypeScript", "React", "RESTful API", "Algorithm Design"],
      github: "https://github.com/a1desai/FlashFocus",
      demo: "https://flashfocus-app.vercel.app",
      image: "/images/projects/FlashFocus.jpeg",
      highlights: [
        "Implemented spaced repetition algorithm for optimized retention intervals",
        "Built full-stack application with Java backend and React frontend",
        "Designed RESTful APIs with proper error handling and validation",
        "Created responsive UI with Tailwind CSS for seamless learning experience"
      ],
      date: "June 2025",
      status: "Completed",
      isPersonal: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-3xl opacity-15" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
            <Code size={16} className="text-indigo-400" />
            <span className="text-sm text-indigo-300 font-semibold">Project Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Production-grade full-stack and AI/ML solutions showcasing technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Scan line effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-xl overflow-hidden">
                <div className="absolute inset-0 animate-scan-line opacity-20 bg-gradient-to-b from-indigo-400 to-transparent" />
              </div>

              <div className="relative z-10">
                {/* Badges at top right */}
                <div className="flex gap-3 flex-wrap justify-end mb-4">
                  <div className="text-xs bg-indigo-500/10 px-3 py-1 rounded-full text-indigo-300 border border-indigo-500/30">
                    {project.date}
                  </div>
                  {project.isPersonal && (
                    <div className="text-xs bg-orange-500/20 px-3 py-1 rounded-full text-orange-400 border border-orange-500/40 font-semibold">
                      Personal
                    </div>
                  )}
                  <div className="text-xs bg-green-500/10 px-3 py-1 rounded-full text-green-300 border border-green-500/30">
                    {project.status}
                  </div>
                </div>

                {/* Project Image */}
                {project.image && (
                  <div className="mb-6 h-24 w-32 rounded-lg overflow-hidden border border-indigo-500/30 shadow-lg shadow-indigo-500/20">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-indigo-300 group-hover:text-indigo-200 transition">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold text-indigo-300 uppercase bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/50 group-hover:border-indigo-300/80 transition">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-indigo-400 transition">
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-indigo-500 flex-shrink-0 mt-1">▸</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-400/40 px-3 py-1.5 rounded-lg group-hover:border-indigo-300/60 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/40 hover:border-green-300/80 hover:bg-green-500/20 text-green-300 hover:text-green-200 rounded-lg transition transform hover:scale-105 duration-300"
                    >
                      <span className="text-sm font-medium">Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/40 hover:border-indigo-300/80 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 rounded-lg transition transform hover:scale-105 duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">View Code</span>
                    <ExternalLink size={14} />
                  </a>
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
