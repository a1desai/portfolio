import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-600/20 rounded-full filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }} />

      {/* Gradient cursor follower */}
      <div
        className="fixed w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
          zIndex: -1,
        }}
      />

      <div className="max-w-5xl mx-auto z-10 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-violet-500/50 overflow-hidden backdrop-blur-md shadow-2xl shadow-violet-500/20 animate-pulse">
                <img src="/images/profile/Aryan.jpg" alt="Aryan Desai" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-violet-400/30 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-left md:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl font-black mb-3 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-rose-400">
                Aryan Desai
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
              Software Engineer
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
              Building intelligent systems at the intersection of <span className="text-violet-300 font-semibold">AI, ML & Full-Stack Development</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a href="#projects" className="btn-primary group flex items-center justify-center sm:justify-start relative overflow-hidden">
                <span className="relative z-10">
                  View My Work
                  <ArrowRight size={18} className="ml-2 inline group-hover:translate-x-1 transition" />
                </span>
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center sm:justify-start hover:shadow-lg hover:shadow-violet-500/50 transition">
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="https://github.com/a1desai" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-slate-800/50 backdrop-blur hover:bg-violet-600/30 rounded-full transition transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 border border-slate-700/50 hover:border-violet-400/50">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aryan-desai-cs/" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-slate-800/50 backdrop-blur hover:bg-violet-600/30 rounded-full transition transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 border border-slate-700/50 hover:border-violet-400/50">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Aryandes20@gmail.com" 
                className="p-3 bg-slate-800/50 backdrop-blur hover:bg-violet-600/30 rounded-full transition transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 border border-slate-700/50 hover:border-violet-400/50">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
