import React, { useState } from 'react';
import { ExternalLink, Github, Code, ArrowLeft, Play } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          <span>Back to Projects</span>
        </button>

        {/* Hero Section with Video */}
        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-white/10 mb-8 bg-black">
            {project.video ? (
              <video 
                src={project.video}
                controls
                autoPlay
                className="w-full h-auto"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            ) : (
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            )}
          </div>

          {/* Header with Meta Info */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-5xl font-bold text-white">{project.title}</h1>
                <span className="text-xs font-semibold text-white uppercase bg-green-500/20 px-3 py-1 rounded-full border border-green-400/40">
                  {project.tag}
                </span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
            </div>
            
            {/* Quick Info Cards */}
            <div className="flex flex-col gap-3 min-w-fit">
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center hover:border-white/20 transition">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Status</p>
                <p className="text-green-400 font-bold">{project.status}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center hover:border-white/20 transition">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Date</p>
                <p className="text-white font-bold">{project.date}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center hover:border-white/20 transition">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Type</p>
                <p className="text-blue-400 font-bold text-sm">{project.type}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-lg text-sm text-gray-300 hover:border-white/40 transition transform hover:scale-105 duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg p-5 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 transition duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                    <span className="text-green-400 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "BeaverBuddy",
      tag: "AI-Powered",
      type: "FULL-STACK + LLM",
      description: "Comprehensive mental health platform designed for Canadian immigrants, featuring AI-powered cultural integration guidance, peer support communities, and personalized wellness resources using OpenAI API.",
      tech: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Prisma", "JWT", "OpenAI API"],
      github: "https://github.com/Build-your-bridge/BeaverBuddy",
      demo: "https://beaverbuddy.vercel.app",
      image: "/images/projects/BeaverBuddy.jpeg",
      video: "/videos/BeaverBuddy Video.mp4",
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
      title: "FlashFocus",
      tag: "Education",
      type: "FULL-STACK WEB",
      description: "Intelligent spaced repetition flashcard system with ML-based content optimization using interval scheduling algorithm for accelerated, efficient learning.",
      tech: ["Java", "TypeScript", "React", "RESTful API", "Algorithm Design"],
      github: "https://github.com/Flash-Focus/FlashFocus",
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
    },
    {
      title: "SentinAI",
      tag: "Hackathon",
      type: "AI/ML",
      description: "Intelligent sentiment analysis and monitoring system built during the AI Hackathon, featuring real-time data processing and advanced NLP capabilities.",
      tech: ["Python", "Machine Learning", "NLP", "Data Processing"],
      github: "https://github.com/AI-Hackathon11/hacks/blob/main/README.md",
      demo: "https://github.com/AI-Hackathon11/hacks",
      image: "/images/projects/SentinAI.png",
      video: "/videos/SentinAI_Demo.mp4",
      highlights: [
        "Developed advanced sentiment analysis algorithms using state-of-the-art NLP models",
        "Implemented real-time data monitoring and processing pipeline",
        "Built scalable system for handling large-scale text analysis",
        "Achieved high accuracy in sentiment classification across multiple languages"
      ],
      date: "January 2026",
      status: "Completed",
      tagColor: "purple",
      isPersonal: false
    },
    {
      title: "AI Racer",
      tag: "Deep Learning",
      type: "REINFORCEMENT LEARNING",
      description: "Advanced autonomous racing AI system trained with reinforcement learning, utilizing deep neural networks trained on 10,000+ episodes in custom Godot game engine environment.",
      tech: ["Python", "PyTorch", "Hugging Face", "Godot", "GDScript", "Deep RL"],
      github: "https://github.com/Reinforcement-Learning-Game/RL-Racing-Game",
      demo: "https://github.com/a1desai/AIRacer",
      image: "/images/projects/AI Racer.webp",
      highlights: [
        "Designed and trained custom neural network policy using PPO algorithm",
        "Built Godot simulation environment with GDScript for ML training pipeline",
        "Achieved 95% win rate against rule-based baselines after optimization",
        "Implemented experience replay buffer for efficient policy learning"
      ],
      date: "December 2025",
      status: "In Progress",
      isPersonal: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-black">
      {selectedProject && (
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
      )}

      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/3 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-white/2 rounded-full filter blur-3xl opacity-15" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <Code size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">Project Portfolio</span>
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
                <div className="absolute inset-0 animate-scan-line opacity-20 bg-gradient-to-b from-white to-transparent" />
              </div>

              <div className="relative z-10">
                {/* Badges at top right */}
                <div className="flex gap-3 flex-wrap justify-end mb-4">
                  <div className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200 border border-white/20">
                    {project.date}
                  </div>
                  {project.tagColor === 'purple' && (
                    <div className="text-xs bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 border border-purple-500/40 font-semibold">
                      {project.tag}
                    </div>
                  )}
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
                  <div className="mb-6 h-24 w-32 rounded-lg overflow-hidden border border-white/20 shadow-lg shadow-white/10">
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-white transition">
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
                      <span className="text-white flex-shrink-0 mt-1">▸</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg group-hover:border-white/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.demo && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/40 hover:border-green-300/80 hover:bg-green-500/20 text-green-300 hover:text-green-200 rounded-lg transition transform hover:scale-105 duration-300"
                    >
                      <span className="text-sm font-medium">Demo</span>
                      <ExternalLink size={14} />
                    </button>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20 text-white rounded-lg transition transform hover:scale-105 duration-300"
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
