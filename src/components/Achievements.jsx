import React from 'react';
import { Award, Brain, Code2, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "AI/ML Specialist",
      subtitle: "Deep Learning & Neural Networks",
      badge: "PyTorch • TensorFlow",
      award: "Advanced model architecture",
      icon: Brain
    },
    {
      title: "Full-Stack Engineer",
      subtitle: "3+ Years Production Experience",
      badge: "Real-world projects",
      award: "Scalable systems delivery",
      icon: Code2
    },
    {
      title: "Team Leader",
      subtitle: "Mentored 50+ Developers",
      badge: "Google Developer Groups",
      award: "Building strong teams",
      icon: Users
    },
    {
      title: "Innovation Driver",
      subtitle: "Hackathon Awards & Recognition",
      badge: "$1,500+ in prizes",
      award: "Pushing boundaries",
      icon: Award
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="glow-text">Always Shipping</span>
          </h2>
          <p className="text-gray-400 text-lg">Consistently building, testing, and deploying AI/ML systems in production</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index} 
                className="group card animate-fade-in hover:translate-y-[-10px] duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition duration-300 blur-xl -z-10" />

                <div className="flex items-start justify-between mb-4">
                  <Icon className="text-blue-400 group-hover:text-purple-400 transition duration-300" size={32} />
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                </div>

                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-300 transition">{achievement.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{achievement.subtitle}</p>
                
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-blue-300 bg-blue-500/20 px-2 py-1 rounded">
                    {achievement.badge}
                  </span>
                </div>

                <p className="text-sm text-gray-500">{achievement.award}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
