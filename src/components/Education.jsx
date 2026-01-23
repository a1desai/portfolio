import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science (Co-op)",
      institution: "Toronto Metropolitan University",
      location: "Toronto, ON",
      period: "2024 - 2029",
      highlights: [
        "$6,000 Entrance Scholarship",
        "Dean's List - Consecutive semesters",
        "Focus: Software Engineering, AI/ML, Cybersecurity"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-white/3 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-white/1 rounded-full filter blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Academic Background</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card animate-fade-in group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-100 transition mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span className="text-lg">{edu.institution}</span>
                    <span>•</span>
                    <MapPin size={18} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-white font-semibold text-lg">{edu.period}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 space-y-3 pt-6 border-t border-neutral-800/50">
                {edu.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Award size={18} className="text-white/60 flex-shrink-0" />
                    <span className="text-gray-300 text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
