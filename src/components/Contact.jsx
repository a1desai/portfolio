import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden border-t border-slate-700/30">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl opacity-15" />

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
            href="mailto:a1desai@torontomu.ca"
            className="group p-6 bg-gradient-to-br from-indigo-500/10 to-slate-800/30 border border-indigo-500/30 hover:border-indigo-400/80 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-indigo-400 group-hover:text-indigo-300" size={24} />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Email</span>
            </div>
            <p className="font-semibold text-indigo-300 group-hover:text-indigo-200 break-all">a1desai@torontomu.ca</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+14372406855"
            className="group p-6 bg-gradient-to-br from-indigo-500/10 to-slate-800/30 border border-indigo-500/30 hover:border-indigo-400/80 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Phone className="text-indigo-400 group-hover:text-indigo-300" size={24} />
              <span className="text-sm text-gray-400 group-hover:text-gray-300">Phone</span>
            </div>
            <p className="font-semibold text-indigo-300 group-hover:text-indigo-200">(437) 240-6855</p>
          </a>

          {/* Location */}
          <div className="group p-6 bg-gradient-to-br from-indigo-500/10 to-slate-800/30 border border-indigo-500/30 rounded-xl cursor-default animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-indigo-400" size={24} />
              <span className="text-sm text-gray-400">Location</span>
            </div>
            <p className="font-semibold text-indigo-300">Toronto, ON</p>
            <p className="text-sm text-gray-500 mt-1">Canada</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-500/10 via-slate-800/30 to-indigo-500/10 border border-indigo-500/30 rounded-xl p-8 md:p-12 text-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-indigo-300 mb-3">Ready to Build Something Great?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're interested in discussing innovative AI/ML solutions, need a full-stack developer, or want to collaborate on something exciting, I'd love to hear from you.
          </p>
          <a
            href="mailto:a1desai@torontomu.ca"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition transform hover:scale-105 duration-300 shadow-lg shadow-indigo-500/50"
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
            className="p-4 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400/80 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 duration-300 group animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Github className="text-indigo-400 group-hover:text-indigo-300" size={24} />
          </a>
          <a
            href="https://linkedin.com/in/aryan-desai-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400/80 rounded-lg transition transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 duration-300 group animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Linkedin className="text-indigo-400 group-hover:text-indigo-300" size={24} />
          </a>
        </div>

        {/* Footer text */}
        <div className="text-center mt-12 pt-8 border-t border-slate-700/30 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-sm text-gray-500">
            Looking for internship opportunities • Open to collaboration • Always learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
