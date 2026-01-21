import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aryan was a pleasure to work with on our project, BeaverBuddy. With my imagination and his exceptional technical skills, he was able to make my visions become a reality with our app. He's a fantastic full stack software engineer with thorough knowledge of JavaScript frameworks.",
      author: "Gaston Chung",
      role: "Co-Developer, BeaverBuddy",
      initials: "GC",
      rating: 5
    },
    {
      text: "Working with Aryan on the BeaverBuddy project was fantastic. He brought both technical excellence and a strong user-centric mindset. Highly recommended!",
      author: "James Chen",
      role: "Product Manager, Mental Health App",
      initials: "JC",
      rating: 5
    },
    {
      text: "As Technology Director, Aryan demonstrated exceptional leadership, mentoring junior developers and architecting solutions that scaled beautifully. A true asset to any team.",
      author: "Rajesh Patel",
      role: "CEO, Tech Startup",
      initials: "RP",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">What Others Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group card border-l-4 border-l-violet-500/50 hover:border-l-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
