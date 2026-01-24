import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden border-t border-neutral-800/50 bg-black">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/3 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/1 rounded-full filter blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to full-time opportunities, internships, and collaboration. Reach out to discuss AI/ML projects, mentorship, or just to say hi!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:Aryandes20@gmail.com"
            className="group p-6 bg-neutral-900/50 border border-neutral-800/60 hover:border-neutral-700 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/5 cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-white group-hover:text-gray-100" size={24} />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Email</span>
            </div>
            <p className="font-semibold text-white group-hover:text-gray-200 break-all">Aryandes20@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+14372406855"
            className="group p-6 bg-neutral-900/50 border border-neutral-800/60 hover:border-neutral-700 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/5 cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Phone className="text-white group-hover:text-gray-100" size={24} />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Phone</span>
            </div>
            <p className="font-semibold text-white group-hover:text-gray-200">(437) 240-6855</p>
          </a>

          {/* Location */}
          <div className="group p-6 bg-neutral-900/50 border border-neutral-800/60 rounded-xl cursor-default animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-white" size={24} />
              <span className="text-sm text-gray-400">Location</span>
            </div>
            <p className="font-semibold text-white">Toronto, ON</p>
            <p className="text-sm text-gray-500 mt-1">Canada</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-neutral-900/50 via-black to-neutral-900/50 border border-neutral-800/60 rounded-xl p-8 md:p-12 text-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s', boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)' }}>
          <h3 className="text-2xl font-bold text-white mb-3">Ready to <span className="text-purple-400">Build Something Great</span>?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're interested in discussing innovative AI/ML solutions, need a full-stack developer, or want to collaborate on something exciting, I'd love to hear from you.
          </p>
          <a
            href="mailto:Aryandes20@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition transform hover:scale-105 duration-300 shadow-lg shadow-white/30"
          >
            <Send size={18} />
            Send an Email
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/a1desai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-white/20 duration-300 group animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Github className="text-white group-hover:text-gray-200" size={24} />
          </a>
          <a
            href="https://linkedin.com/in/aryan-desai-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-white/20 duration-300 group animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Linkedin className="text-white group-hover:text-gray-200" size={24} />
          </a>
        </div>


      </div>
    </section>
  );
};

export default Contact;
