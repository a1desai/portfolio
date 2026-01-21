import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/a1desai', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-desai-cs/', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:Aryandes20@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="border-t border-slate-700/50 bg-gradient-to-b from-slate-900/50 to-slate-900 backdrop-blur relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-600/5 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center border-t border-slate-700/50 pt-12">
          {/* Copyright */}
          <p className="text-gray-400 text-base">
            © {currentYear} Aryan Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
