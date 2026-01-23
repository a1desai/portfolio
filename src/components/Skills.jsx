import React from 'react';
import { Zap, Database, Brain, Cloud, Code2, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      description: "Core programming languages for software development",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Bash", "GDScript"]
    },
    {
      icon: Zap,
      title: "Web Development",
      description: "Modern full-stack technologies and frameworks",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "HTML/CSS", "REST APIs", "Prisma ORM"]
    },
    {
      icon: Brain,
      title: "AI/ML Technologies",
      description: "Deep learning and machine learning frameworks",
      skills: ["PyTorch", "TensorFlow", "Hugging Face", "Reinforcement Learning", "Neural Networks", "LLMs", "OpenAI API"]
    },
    {
      icon: Database,
      title: "Data & Databases",
      description: "Database design and data management",
      skills: ["PostgreSQL", "SQL", "Prisma", "Data Modeling", "Query Optimization", "Database Design"]
    },
    {
      icon: Cloud,
      title: "Tools & DevOps",
      description: "Development tools and cloud platforms",
      skills: ["Git/GitHub", "Docker", "CI/CD", "AWS", "GCP", "Firebase", "Jest", "Agile/Scrum"]
    },
    {
      icon: Zap,
      title: "Specializations",
      description: "Advanced technical expertise",
      skills: ["JWT Authentication", "Unit Testing", "API Design", "System Architecture", "Algorithm Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/3 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-white/1 rounded-full filter blur-3xl opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <Zap size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical skillset spanning full-stack development, AI/ML, and cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-neutral-900/50 border border-neutral-800/60 hover:border-neutral-700 rounded-xl transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20 text-xs text-white rounded-lg transition transform hover:scale-105 cursor-default duration-200"
                        style={{ animationDelay: `${0.1 + index * 0.05 + i * 0.02}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="pt-12 border-t border-slate-700/30">
          <div className="text-center mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-bold mb-2">Proficiency Levels</h3>
            <p className="text-gray-400">Areas of expertise and depth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Full-Stack Development", level: 95 },
              { name: "AI/ML Engineering", level: 85 },
              { name: "System Design", level: 80 },
              { name: "Cloud Architecture", level: 75 },
              { name: "DevOps & CI/CD", level: 80 },
              { name: "Data Structures & Algorithms", level: 85 }
            ].map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.05}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/30">
                  <div
                    className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${0.6 + index * 0.05}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 pt-12 border-t border-slate-700/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="p-6 bg-gradient-to-br from-white/10 to-slate-800/30 border border-white/20 rounded-xl animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle size={20} />
                Key Achievements
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">✓</span>
                  <span>$6000 Entrance Scholarship for strong academic performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>50+ students mentored in web development and AI/ML</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>35% reduction in test failures through systematic optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Production-ready systems deployed across 3 organizations</span>
                </li>
              </ul>
            </div>

            {/* Continuous Learning */}
            <div className="p-6 bg-gradient-to-br from-white/10 to-slate-800/30 border border-white/20 rounded-xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap size={20} />
                Currently Exploring
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 font-bold mt-1">→</span>
                  <span>Advanced Large Language Models and prompt engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">→</span>
                  <span>Distributed systems and microservices architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">→</span>
                  <span>Kubernetes and advanced container orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">→</span>
                  <span>Quantum computing algorithms and quantum ML</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
