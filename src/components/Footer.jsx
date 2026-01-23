import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/50 bg-gradient-to-t from-black/95 to-black/95 py-12 px-6 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-gray-400 text-sm">
          © {currentYear} <span className="font-semibold text-white">Aryan Desai</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
