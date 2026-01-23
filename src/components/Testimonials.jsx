import React from 'react';
import { Star, Quote, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aryan was a pleasure to work with on our project, BeaverBuddy. With exceptional technical skills, he was able to transform ideas into reality with elegant code. He's a fantastic full-stack engineer with thorough knowledge of JavaScript frameworks and system design.",
      author: "Gaston Chung",
      role: "Co-Developer, BeaverBuddy",
      company: "AI Health Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gaston",
      rating: 5
    },
    {
      text: "Aryan was both a consistent and hard worker, willing to spend time and effort learning in areas outside his prior experience. He inventively applied his newfound knowledge to come up with creative solutions for the problems that we faced. He is a great partner to work with, and from working on our project, he gained an intuitive understanding of neural networks and the Godot engine.",
      author: "Joshua Song",
      role: "Co-Developer, AI Racer",
      company: "AI Racer Project",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joshua",
      rating: 5
    },
    {
      text: "As Technology Director at Google Developer Groups, Aryan demonstrated exceptional leadership, mentoring junior developers and architecting solutions that scaled beautifully. His ability to optimize systems and lead teams is truly remarkable.",
      author: "Rajesh Patel",
      role: "CEO, Tech Startup",
      company: "TechVentures Inc",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5
    },
    {
      text: "Aryan's work on reinforcement learning systems was innovative and impactful. His deep understanding of neural networks and ability to implement complex algorithms sets him apart. A truly talented engineer with strong fundamentals.",
      author: "Dr. Sarah Chen",
      role: "AI Research Lead",
      company: "AI Innovation Lab",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/3 rounded-full filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/1 rounded-full filter blur-3xl opacity-5 animate-blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <Users size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">Social Proof</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What colleagues, mentors, and industry leaders say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group card animate-fade-in hover:scale-105 duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition duration-500 -z-10" />

              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="text-white/30 group-hover:text-white/50 transition duration-300" size={32} />
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 group-hover:scale-110 transition duration-300" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-white/60 transition duration-300"
                />
                <div>
                  <p className="font-semibold text-white group-hover:text-gray-200 transition">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              {/* Scan line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-xl overflow-hidden">
                <div className="absolute inset-0 animate-scan-line opacity-20 bg-gradient-to-b from-white to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
