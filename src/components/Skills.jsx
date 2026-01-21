import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "GDScript", "Bash"],
      icon: "🔤"
    },
    {
      category: "Web Technologies",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS", "RESTful APIs", "JWT"],
      icon: "🌐"
    },
    {
      category: "Databases & ORM",
      skills: ["PostgreSQL", "Prisma", "MongoDB", "Firebase"],
      icon: "💾"
    },
    {
      category: "AI/ML & Tools",
      skills: ["PyTorch", "TensorFlow", "OpenAI API", "Hugging Face", "Git", "Docker", "Godot"],
      icon: "🤖"
    },
    {
      category: "Methodologies",
      skills: ["Agile/Scrum", "RESTful Design", "MVC Architecture", "CI/CD", "Test-Driven Development"],
      icon: "⚙️"
    },
    {
      category: "Specializations",
      skills: ["Reinforcement Learning", "Neural Networks", "Full-Stack Development", "Quantum Computing"],
      icon: "✨"
    }
  ];

  const floatAnimations = ['tech-float-1', 'tech-float-2', 'tech-float-3', 'tech-float-4'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full filter blur-3xl opacity-50 -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive toolkit built through real-world project experience and continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group card hover:shadow-2xl hover:shadow-violet-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-violet-400 group-hover:text-pink-300 transition">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className={`tech-badge group/skill cursor-default transform transition hover:scale-110 animate-fade-in ${floatAnimations[i % 4]}`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <span className="text-sm font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Learning */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="card border-l-4 border-l-green-500/70 group hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle size={20} />
                Achievements & Impact
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.65s' }}>
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>$6000 Entrance Scholarship for strong academic performance</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>30% improvement in team delivery efficiency with Agile methodologies</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.75s' }}>
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>35% reduction in test failures through systematic optimization</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>60% improvement in AI model task completion rates</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.85s' }}>
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>80% reduction in content creation time with optimized systems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="card border-l-4 border-l-pink-500/70 group hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-pink-400 mb-4 flex items-center gap-2">
                <Zap size={20} />
                Currently Learning & Exploring
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.75s' }}>
                  <span className="text-pink-400 font-bold mt-1">→</span>
                  <span>Advanced Quantum Computing algorithms and quantum machine learning</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                  <span className="text-pink-400 font-bold mt-1">→</span>
                  <span>Large Language Models and prompt engineering techniques</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.85s' }}>
                  <span className="text-pink-400 font-bold mt-1">→</span>
                  <span>System design patterns for scalable distributed systems</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
                  <span className="text-pink-400 font-bold mt-1">→</span>
                  <span>Cloud architecture with AWS and GCP infrastructure</span>
                </li>
                <li className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.95s' }}>
                  <span className="text-pink-400 font-bold mt-1">→</span>
                  <span>DevOps practices and containerization with Docker & Kubernetes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
