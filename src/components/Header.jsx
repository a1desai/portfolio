import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-xl bg-slate-900/70 border-b border-slate-700/50 hover:bg-slate-900/80 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-pink-300 bg-clip-text text-transparent hover:scale-105 transition transform">
          AD
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-violet-400 transition duration-300"
            >
              {item.label}
            </a>
          ))}
          <a href="/resume" className="btn-primary py-2 px-5 text-xs font-semibold">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="text-violet-400" />
          ) : (
            <Menu size={24} className="text-violet-400" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/50 backdrop-blur border-t border-slate-700/50 animate-slide-down">
          <div className="px-6 py-4 flex flex-col gap-4 max-w-6xl mx-auto">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-violet-400 transition py-2 border-b border-slate-700/30 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a href="/resume" onClick={() => setIsMenuOpen(false)} className="btn-primary py-2 px-5 text-xs font-semibold text-center">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
