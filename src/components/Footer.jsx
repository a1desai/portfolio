import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-indigo-500/20 bg-gradient-to-t from-slate-900/80 to-slate-900/40 py-12 px-6 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-4 pb-4 border-b border-slate-700/30">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} <span className="font-semibold text-indigo-300">Aryan Desai</span>. All rights reserved.
          </p>
        </div>
        <p className="text-gray-500 text-xs flex items-center justify-center gap-1 flex-wrap">
          <span>Building intelligent systems with</span>
          <span className="text-indigo-400 font-semibold">AI/ML</span>
          <span>•</span>
          <span>Full-Stack Development</span>
          <span>•</span>
          <span className="text-indigo-400">Always Shipping</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
