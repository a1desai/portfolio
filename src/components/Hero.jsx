import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import config from '../data/config.json';
import { useTheme } from '../ThemeContext';

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      const next = subIndex + (deleting ? -1 : 1);
      setSubIndex(next);
      setText(words[index].substring(0, next));
    }, deleting ? 35 : 75);
    return () => clearTimeout(t);
  }, [subIndex, index, deleting, words]);

  return text;
};

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);
  const { dark, toggle } = useTheme();

  const role = useTypewriter([
    'AI/ML Builder',
    'Hackathon Winner',
    'Software Engineer',
    'CS Student @ TMU',
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)', animationDelay: '3s' }}
      />

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl shadow-sm border-b border-black/[0.07] dark:border-white/[0.07]'
            : ''
        }`}
        style={scrolled ? { background: 'var(--nav-bg)' } : {}}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="/#"
            className="text-base font-bold tracking-tight"
            style={{ color: 'var(--text)' }}
            whileHover={{ scale: 1.03 }}
          >
            Aryan Desai
          </motion.a>

          <div className="hidden md:flex gap-7 items-center text-sm">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#888] dark:text-[#666] hover:text-[#0D0D0D] dark:hover:text-[#F0EDE8] transition duration-200 font-medium"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Dark mode toggle */}
            <motion.button
              onClick={toggle}
              className="p-2 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1C] text-[#888] dark:text-[#aaa] hover:text-[#0D0D0D] dark:hover:text-[#F0EDE8] hover:shadow-md transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0D0D0D] dark:bg-[#F0EDE8] text-white dark:text-[#0D0D0D] text-sm rounded-lg font-semibold hover:bg-[#222] dark:hover:bg-[#E0DDD8] transition duration-200 shadow-sm"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Resume
            </motion.a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggle}
              className="p-2 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1C] text-[#888] dark:text-[#aaa] transition"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0D0D0D] dark:text-[#F0EDE8] hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-black/[0.07] dark:border-white/[0.07]"
            style={{ background: 'var(--bg)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#888] dark:text-[#666] hover:text-[#0D0D0D] dark:hover:text-[#F0EDE8] transition py-2.5 font-medium text-sm border-b border-black/5 dark:border-white/5 last:border-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero content */}
      <motion.div
        className="max-w-5xl mx-auto px-6 pt-36 pb-24 relative z-10"
        style={{ y: heroY }}
      >
        {/* Open to work badge */}
        {config.openToWork && (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-full text-sm text-green-700 dark:text-green-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {config.statusBadge}
            </span>
          </motion.div>
        )}

        {/* Two-col layout */}
        <div className="grid md:grid-cols-5 gap-12 items-center mb-14">
          {/* Left — text */}
          <div className="md:col-span-3">
            <motion.h1
              className="text-[clamp(56px,10vw,96px)] font-black tracking-tighter leading-none mb-5"
              style={{ color: 'var(--text)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Aryan Desai.
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="mb-7 h-9 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <span className="text-xl md:text-2xl font-medium text-[#888] dark:text-[#666]">
                {role}
                <span className="animate-blink text-blue-600 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Description — 3 lines */}
            <motion.div
              className="text-base md:text-lg leading-relaxed mb-8 max-w-lg space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <p className="text-[#666] dark:text-[#999]">Building real-world AI + full-stack systems.</p>
              <p className="text-[#666] dark:text-[#999]">
                Software Engineer @{' '}
                <a
                  href="https://www.flippilot.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0D0D0D] dark:text-[#F0EDE8] hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  FlipPilot
                </a>
              </p>
              <p className="text-[#666] dark:text-[#999]">
                3rd Year Computer Science @{' '}
                <span className="font-semibold text-[#0D0D0D] dark:text-[#F0EDE8]">TMU</span>.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex gap-3 flex-wrap mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-[#0D0D0D] dark:bg-[#F0EDE8] text-white dark:text-[#0D0D0D] rounded-xl font-semibold hover:bg-[#1a1a1a] dark:hover:bg-[#E0DDD8] transition-all duration-200 inline-flex items-center gap-2 shadow-sm text-[15px]"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-black/15 dark:border-white/15 text-[#0D0D0D] dark:text-[#F0EDE8] bg-white dark:bg-[#1C1C1C] rounded-xl font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 inline-flex items-center gap-2 shadow-sm text-[15px]"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              {[
                { href: config.social.github, Icon: Github, label: 'GitHub' },
                { href: config.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${config.social.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1C] text-[#888] dark:text-[#666] hover:text-[#0D0D0D] dark:hover:text-[#F0EDE8] hover:shadow-md transition duration-200"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile photo */}
          <motion.div
            className="md:col-span-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative select-none">
              {/* Outer spinning dashed ring */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-blue-300/60 dark:border-blue-500/30 animate-spin-slow" />
              {/* Inner static ring */}
              <div className="absolute -inset-2 rounded-full border border-black/8 dark:border-white/8 bg-white/60 dark:bg-white/5 backdrop-blur-sm" />
              {/* Photo */}
              <div className="relative w-56 h-56 rounded-full border-4 border-white dark:border-[#1C1C1C] shadow-xl overflow-hidden">
                <img
                  src="/images/profile/Aryan.jpg"
                  alt="Aryan Desai"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating "currently at" badge */}
              <motion.div
                className="absolute -bottom-3 -right-4 bg-white dark:bg-[#1C1C1C] rounded-2xl px-3.5 py-2.5 shadow-lg border border-black/8 dark:border-white/8 flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-bold whitespace-nowrap" style={{ color: 'var(--text)' }}>FlipPilot SE</span>
              </motion.div>
              {/* Floating school badge */}
              <motion.div
                className="absolute -top-3 -left-4 bg-white dark:bg-[#1C1C1C] rounded-2xl px-3.5 py-2.5 shadow-lg border border-black/8 dark:border-white/8"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-xs font-bold" style={{ color: 'var(--text)' }}>TMU CS '29</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-8 pt-8 border-t border-black/10 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[
            { value: config.heroStats.hackathonWon, label: 'Hackathon Won' },
            { value: config.heroStats.studentsReached, label: 'Students Reached' },
            { value: config.heroStats.projectsShipped, label: 'Projects Shipped' },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="flex items-baseline gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.08 }}
            >
              <span className="text-4xl font-black tracking-tight" style={{ color: 'var(--text)' }}>{value}</span>
              <span className="text-sm font-medium text-[#999] dark:text-[#666]">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
