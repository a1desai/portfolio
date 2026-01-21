import React from 'react';
import { ArrowRight, Lightbulb, Code, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "3+", label: "Years", description: "Professional Experience" },
    { value: "50+", label: "Students", description: "Mentored" },
    { value: "10+", label: "Projects", description: "Shipped" },
    { value: "100%", label: "Driven", description: "By Curiosity" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="font-bold text-violet-400">CS student at Toronto Metropolitan University</span> pursuing a passion for building intelligent, scalable systems. With experience spanning <span className="font-bold text-pink-400">full-stack development, AI/ML, and emerging technologies</span>, I've worked on projects ranging from mental health web applications to reinforcement learning systems.
            </p>

            <div className="flex items-start gap-3 p-4 bg-violet-500/10 rounded-lg border border-violet-400/30 hover:border-violet-400/60 transition group">
              <Code className="text-violet-400 flex-shrink-0 mt-1 group-hover:text-pink-400 transition" size={24} />
              <div>
                <p className="font-semibold text-violet-300 mb-1">Leadership & Mentorship</p>
                <p className="text-gray-400 text-sm">At Google Developer Groups, I lead development teams using Agile methodologies and mentor 50+ students on web technologies.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-pink-500/10 rounded-lg border border-pink-400/30 hover:border-pink-400/60 transition group">
              <Zap className="text-pink-400 flex-shrink-0 mt-1 group-hover:text-violet-400 transition" size={24} />
              <div>
                <p className="font-semibold text-pink-300 mb-1">AI/ML Optimization</p>
                <p className="text-gray-400 text-sm">My work at Byte focused on optimizing codebase processing workflows using Python and ML, reducing test failures by 35%.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-rose-500/10 rounded-lg border border-rose-400/30 hover:border-rose-400/60 transition group">
              <Lightbulb className="text-rose-400 flex-shrink-0 mt-1 group-hover:text-violet-400 transition" size={24} />
              <div>
                <p className="font-semibold text-rose-300 mb-1">Passionate About Innovation</p>
                <p className="text-gray-400 text-sm">I'm particularly excited about the intersection of AI and software engineering—building systems that are intelligent and adaptive.</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary group inline-flex items-center mt-6">
              Let's Connect
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group card hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden transform hover:scale-110 cursor-default animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-pink-300 bg-clip-text text-transparent mb-2 group-hover:text-5xl transition-all">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-violet-400 to-pink-300 rounded-full" />
            Key Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Full-Stack Mastery", desc: "Building complete solutions from React frontends to scalable Node.js backends" },
              { title: "AI/ML Integration", desc: "Implementing machine learning models and AI APIs in production applications" },
              { title: "Clean Architecture", desc: "Writing maintainable, scalable code with strong focus on best practices" }
            ].map((item, i) => (
              <div key={i} className="group card hover:shadow-xl animate-fade-in" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <h4 className="text-violet-400 font-bold mb-2 group-hover:text-pink-300 transition">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
