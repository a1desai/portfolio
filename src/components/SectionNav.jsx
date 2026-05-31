import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const SECTIONS = [
  { id: 'hero',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'education',       label: 'Education' },
  { id: 'certifications',  label: 'Certifications' },
  { id: 'testimonials',    label: 'Testimonials' },
  { id: 'contact',      label: 'Contact' },
];

const SectionNav = () => {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState(null);
  const { dark } = useTheme();

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center">
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex items-center justify-end gap-2 group"
          aria-label={label}
        >
          {/* Tooltip label */}
          <AnimatePresence>
            {hovered === id && (
              <motion.span
                className="text-xs font-semibold rounded-lg px-2.5 py-1 shadow-sm whitespace-nowrap border"
                style={{
                  color: 'var(--text)',
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.18 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Dot */}
          <motion.div
            className="rounded-full transition-colors duration-200"
            animate={{
              width:  active === id ? 10 : 6,
              height: active === id ? 10 : 6,
              backgroundColor: active === id
                ? (dark ? '#F0EDE8' : '#0D0D0D')
                : (dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'),
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            whileHover={{ scale: 1.4 }}
          />
        </a>
      ))}
    </div>
  );
};

export default SectionNav;
