import React from 'react';
import { Briefcase, MapPin, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Technology Director",
      company: "Google Developer Groups",
      location: "Toronto, ON",
      period: "November 2025 - Present",
      description: "Leading technical initiatives and mentoring 50+ students in web development and AI/ML technologies.",
      image: "/images/projects/GDSG.jpg",
      highlights: [
        "Organizing technical workshops and seminars for developer community",
        "Mentoring students in full-stack development and emerging technologies",
        "Building connections between students and industry professionals"
      ]
    },
    {
      role: "AI/ML Contributor",
      company: "Byte - SecureBYTE",
      location: "Toronto, ON",
      period: "September 2025 - December 2025",
      description: "Optimizing ML pipelines and developing intelligent security solutions using PyTorch and Hugging Face.",
      image: "/images/projects/Byte.jpg",
      highlights: [
        "Building and fine-tuning neural network models for security detection",
        "Optimizing inference pipelines for production environments",
        "Implementing reinforcement learning algorithms for adaptive security systems"
      ]
    },
    {
      role: "Back End Developer",
      company: "Quantum Science & Engineering Club",
      location: "Toronto, ON",
      period: "November 2025 - Present",
      description: "Architecting scalable backend systems and APIs using Node.js, Express, and PostgreSQL.",
      image: "/images/projects/Qsec.jpg",
      highlights: [
        "Designing RESTful APIs with JWT authentication and role-based access control",
        "Managing database architecture with PostgreSQL and Prisma ORM",
        "Implementing CI/CD pipelines for automated deployment and testing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-white/3 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-white/1 rounded-full filter blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <Briefcase size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Driving innovation across full-stack development, AI/ML, and technical leadership
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-white rounded-full border-4 border-slate-900 shadow-lg shadow-white/30" />
              
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-1.5 top-12 w-0.5 h-24 bg-gradient-to-b from-white/40 to-transparent" />
              )}

              {/* Card */}
              <div className="ml-12 p-6 bg-neutral-900/50 border border-neutral-800/60 hover:border-neutral-700 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/5">
                <div className="flex flex-col lg:flex-row lg:gap-6 mb-4">
                  {/* Logo/Image */}
                  {exp.image && (
                    <div className="mb-4 lg:mb-0 flex-shrink-0">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="h-20 w-20 object-cover rounded-lg border border-white/20 shadow-lg"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-400">
                          <span className="font-semibold text-gray-300">{exp.company}</span>
                          <span className="text-gray-600">•</span>
                          <MapPin size={14} className="text-gray-500" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-300 bg-white/10 px-3 py-1 rounded-full inline-block">
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 ml-4">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex gap-3 text-sm text-gray-400">
                          <Code2 size={14} className="text-white/60 flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-12 border-t border-slate-700/30">
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6">
              <span className="glow-text">Education</span>
            </h3>
            <div className="p-6 bg-gradient-to-br from-white/10 to-slate-800/30 border border-white/20 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Bachelor of Science in Computer Science (Co-op)
                  </h4>
                  <p className="text-gray-400 flex items-center gap-2">
                    <span>Toronto Metropolitan University</span>
                    <span className="text-gray-600">•</span>
                    <span>Toronto, ON</span>
                  </p>
                  <p className="text-sm text-gray-300 mt-2 flex gap-2 items-center">
                    <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs">2024 - 2029</span>
                    <span className="inline-block px-2 py-1 bg-green-500/20 rounded text-xs text-green-300">$6,000 Entrance Scholarship</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
