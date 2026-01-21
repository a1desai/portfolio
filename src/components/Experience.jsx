import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      role: "Technology Director",
      company: "Google Developer Groups on Campus",
      period: "November 2025 – Present",
      location: "Toronto, ON",
      icon: "🚀",
      image: "/images/projects/GDSG.jpg",
      highlights: [
        "Lead development team using Agile methodologies, improving delivery efficiency by 30%",
        "Mentor 50+ students on web development (React, JavaScript, TypeScript)",
        "Establish Git workflows and conduct peer code reviews"
      ],
      impact: "30% efficiency boost"
    },
    {
      role: "AI/ML Contributor",
      company: "Byte - SecureBYTE",
      period: "September 2025 – Present",
      location: "Toronto, ON",
      icon: "🤖",
      image: "/images/projects/Byte.jpg",
      highlights: [
        "Optimized codebase processing workflows using Python and data analysis",
        "Implemented automated testing reducing failures by 35% across 1000+ scans",
        "Debugged and resolved API reliability issues, decreasing errors by 40%"
      ],
      impact: "35% failure reduction"
    },
    {
      role: "Back End Developer",
      company: "Quantum Science and Engineering Club",
      period: "November 2025 – Present",
      location: "Toronto, ON",
      icon: "⚛️",
      image: "/images/projects/Qsec.jpg",
      highlights: [
        "Developed backend architecture for quantum visualization platform",
        "Implemented scalable database operations and API endpoints",
        "Contributed to technical design decisions in collaborative environment"
      ],
      impact: "Production-ready system"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Building impactful solutions across AI/ML, full-stack development, and emerging technologies.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card border-l-4 border-l-violet-500/50 group-hover:border-l-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-0">
                  {/* Image */}
                  {exp.image && (
                    <div className="md:w-40 h-40 overflow-hidden flex-shrink-0">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="text-4xl flex-shrink-0">{exp.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-xs md:text-sm text-green-400 font-semibold">
                            <TrendingUp size={16} />
                            {exp.impact}
                          </div>
                        </div>
                        <p className="text-violet-400 font-semibold hover:text-pink-300 transition">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mb-4 ml-16">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-violet-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-violet-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Highlights - Expandable */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-2 pt-4 border-t border-slate-700/50 ml-16">
                        {exp.highlights.map((highlight, i) => (
                          <li 
                            key={i} 
                            className="flex gap-3 text-gray-300 text-sm animate-fade-in"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <span className="text-violet-400 flex-shrink-0 font-bold">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Show/Hide indicator */}
                    <div className="mt-3 flex items-center gap-2 text-violet-400 text-sm font-semibold group-hover:text-pink-300 transition ml-16">
                      <span>{expandedIndex === index ? 'Show less' : 'View details'}</span>
                      <span className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline view */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase size={24} className="text-violet-400" />
            Career Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-pink-500 to-rose-500 transform md:-translate-x-1/2" />
            <div className="space-y-12 md:space-y-0">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:ml-1/2 md:pl-8'}`}>
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-violet-500 rounded-full transform -translate-x-1.5 md:translate-x--1.5 mt-2" />
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-white font-semibold">{exp.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
