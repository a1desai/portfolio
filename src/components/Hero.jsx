import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative pt-24 overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-500/15 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/30 bg-gradient-to-r from-slate-900/90 to-slate-900/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-300 hover:to-indigo-500 transition">
            Aryan<span className="text-indigo-500">.</span>
          </a>
          <div className="flex gap-8 items-center text-sm">
            <a href="#about" className="text-gray-400 hover:text-indigo-300 transition duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-indigo-300 transition duration-300">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-indigo-300 transition duration-300">Experience</a>
            <a href="#testimonials" className="text-gray-400 hover:text-indigo-300 transition duration-300">Testimonials</a>
            <a href="#contact" className="text-gray-400 hover:text-indigo-300 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Animated badge */}
        <div className="inline-block mb-8 px-4 py-2 border border-indigo-500/40 rounded-full bg-indigo-500/10 backdrop-blur-sm animate-fade-in">
          <span className="text-sm text-indigo-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            Full-Stack Engineer | AI/ML Specialist
          </span>
        </div>

        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-2 border-indigo-500/40 overflow-hidden backdrop-blur-md shadow-2xl shadow-indigo-500/20 animate-glow-pulse">
              <img
                src="/images/profile/Aryan.jpg"
                alt="Aryan Desai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-indigo-400/20 animate-float-up" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="glow-text">Aryan Desai</span>
        </h1>

        <p className="text-2xl text-gray-300 mb-2 animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
          Full-Stack Software Engineer specializing in AI/ML
        </p>

        <p className="text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in text-lg" style={{ animationDelay: '0.4s' }}>
          I build intelligent, scalable systems at the intersection of <span className="text-indigo-300 font-semibold">Deep Learning, Cloud Infrastructure & Full-Stack Development</span>. Currently leading technical initiatives at Google Developer Groups and optimizing ML pipelines at Byte.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">50+</div>
            <div className="text-xs text-gray-500 mt-1">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">6</div>
            <div className="text-xs text-gray-500 mt-1">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">3+</div>
            <div className="text-xs text-gray-500 mt-1">Years Experience</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#projects" className="btn-primary group inline-flex items-center gap-2">
            View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Let's Connect <Mail size={18} />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="https://github.com/a1desai" target="_blank" rel="noopener noreferrer" 
            className="p-3 bg-indigo-500/10 border border-indigo-400/30 hover:bg-indigo-500/20 hover:border-indigo-300 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 duration-300">
            <Github size={20} className="text-indigo-400" />
          </a>
          <a href="https://linkedin.com/in/aryan-desai-cs" target="_blank" rel="noopener noreferrer" 
            className="p-3 bg-indigo-500/10 border border-indigo-400/30 hover:bg-indigo-500/20 hover:border-indigo-300 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 duration-300">
            <Linkedin size={20} className="text-indigo-400" />
          </a>
          <a href="mailto:a1desai@torontomu.ca" 
            className="p-3 bg-indigo-500/10 border border-indigo-400/30 hover:bg-indigo-500/20 hover:border-indigo-300 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 duration-300">
            <Mail size={20} className="text-indigo-400" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-indigo-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
