import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      name: "BeaverBuddy",
      tagline: "AI-powered mental health platform for Canadian immigrants",
      description: "Full-stack web application with AI-powered check-ins and cultural integration features.",
      location: "Toronto, ON",
      date: "Featured Project",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "OpenAI API", "LLMs"],
      link: "https://github.com/a1desai",
      image: "/images/projects/BeaverBuddy.jpg"
    },
    {
      name: "AI Racer",
      tagline: "Advanced reinforcement learning system for autonomous navigation",
      description: "Neural networks trained with 10,000+ episodes achieving 60% improvement using deep RL.",
      location: "Personal Project",
      date: "ML Research",
      tech: ["Python", "PyTorch", "Godot", "Deep RL", "Neural Networks"],
      link: "https://github.com/a1desai",
      image: "/images/projects/BeaverBuddy.jpg"
    }
  ];

  return (
    <section id="ventures" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl opacity-20 animate-blob" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="glow-text flex items-center justify-center gap-3">
              <Zap size={40} className="text-blue-400" />
              Featured Ventures
            </span>
          </h2>
          <p className="text-gray-400 text-lg">AI/ML-driven projects making real impact</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {ventures.map((venture, index) => (
            <div key={index} className="group card animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10" />

              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-blue-900/40 to-purple-900/40 overflow-hidden rounded-lg mb-6">
                {venture.image && (
                  <img 
                    src={venture.image} 
                    alt={venture.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition">{venture.name}</h3>
                  <p className="text-sm text-gray-400 italic">{venture.tagline}</p>
                </div>
                <a 
                  href={venture.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition transform hover:scale-110"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-300 text-sm mb-4">{venture.description}</p>

              <div className="flex gap-2 flex-wrap mb-4">
                {venture.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 rounded-full text-xs text-blue-300 group-hover:border-purple-400/70 transition">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xs text-gray-500 flex items-center gap-2">
                📍 {venture.location} • <span className="text-blue-400 font-semibold">{venture.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
