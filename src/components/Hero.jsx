import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

// Portfolio Hero Section
const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative pt-24 overflow-hidden bg-black" style={{ position: 'relative', zIndex: 1 }}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-white/5 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/3 rounded-full filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-gradient-to-r from-black/95 to-black/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-white transition">
            Aryan
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center text-sm ml-auto">
            <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition duration-300">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition duration-300">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition ml-auto"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800/50 bg-black/98 backdrop-blur-xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition duration-300 py-2">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition duration-300 py-2">Skills</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition duration-300 py-2">Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition duration-300 py-2">Projects</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition duration-300 py-2">Testimonials</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition duration-300 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status text */}
        <p className="text-2xl font-bold mb-8 tracking-wide animate-green-glow">
          Looking for 2026 Summer/Fall Internships
        </p>

        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-2 border-white/40 overflow-hidden backdrop-blur-md shadow-2xl shadow-white/10 animate-glow-pulse">
              <img
                src="/images/profile/Aryan.jpg"
                alt="Aryan Desai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="glow-text">Aryan Desai</span>
        </h1>

        <p className="text-2xl text-gray-300 mb-6 animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
          Hey I'm Aryan, a Computer Science student interested in <span className="font-bold text-blue-400">Software Engineering, AI/ML, and Cybersecurity</span>. ✨
        </p>

        <p className="text-xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          I explore full-stack development and intelligent systems through hands-on projects and continuous learning.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs text-gray-500 mt-1">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">6</div>
            <div className="text-xs text-gray-500 mt-1">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-xs text-gray-500 mt-1">Years Experience</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#projects" className="btn-primary group inline-flex items-center gap-2">
            View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
          <a href="/resume/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
            Resume <Mail size={18} />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="https://github.com/a1desai" target="_blank" rel="noopener noreferrer" 
            className="p-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-white/20 duration-300">
            <Github size={20} className="text-white" />
          </a>
          <a href="https://linkedin.com/in/aryan-desai-cs" target="_blank" rel="noopener noreferrer" 
            className="p-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-white/20 duration-300">
            <Linkedin size={20} className="text-white" />
          </a>
          <a href="mailto:Aryandes20@gmail.com" 
            className="p-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-white/20 duration-300">
            <Mail size={20} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
