import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science (Co-op)",
      institution: "Toronto Metropolitan University",
      location: "Toronto, ON",
      period: "2024 - 2029",
      highlights: [
        "$6,000 Entrance Scholarship",
        "Dean's List - Consecutive semesters"
      ],
      coursework: [
        "Data Structures",
        "Algorithms",
        "Machine Learning",
        "Cloud Computing"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-white/3 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-white/1 rounded-full filter blur-3xl opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-left animate-fade-in">
          <h2 className="text-4xl font-bold">
            <span className="glow-text">Education</span>
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6 relative pl-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div
                className="card animate-fade-in group relative overflow-hidden"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Scan line effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-xl overflow-hidden">
                  <div className="absolute inset-0 animate-scan-line opacity-20 bg-gradient-to-b from-white to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-100 transition mb-1">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-3">
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <MapPin size={16} />
                      <span className="text-gray-400">{edu.location}</span>
                    </div>
                  </div>
                  <div className="text-left md:text-right flex-shrink-0">
                    <div className="px-3 py-1 bg-neutral-800/50 rounded text-gray-300 text-xs font-semibold whitespace-nowrap">
                      {edu.period}
                    </div>
                  </div>
                </div>

                {/* Highlights as green boxes */}
                <div className="mt-3 flex flex-wrap gap-2 relative z-10">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded text-green-400 text-xs font-semibold">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
