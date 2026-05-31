import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink } from 'lucide-react';
import certs from '../data/certifications.json';

const tagStyles = {
  purple: 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  blue:   'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  cyan:   'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
};

const Lightbox = ({ cert, onClose }) => (
  <motion.div
    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
    <motion.div
      className="relative z-10 max-w-3xl w-full"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute -top-4 -right-4 z-20 w-9 h-9 rounded-full bg-white dark:bg-[#1C1C1C] shadow-lg flex items-center justify-center text-[#555] dark:text-[#aaa] hover:text-[#0D0D0D] dark:hover:text-white border border-black/10 dark:border-white/10 transition"
      >
        <X size={16} />
      </button>
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full rounded-2xl shadow-2xl border border-white/10"
        style={{ maxHeight: '80vh', objectFit: 'contain' }}
      />
      <div className="mt-4 text-center">
        <p className="text-white font-bold text-lg">{cert.title}</p>
        <p className="text-white/60 text-sm mt-1">{cert.issuer} · {cert.date}</p>
      </div>
    </motion.div>
  </motion.div>
);

const Certifications = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="relative" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">06</span>
          <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Certifications & Awards</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: 'var(--text)' }}>
            Recognition & credentials.
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-sub)' }}>
            Hackathon wins, awards, and professional certifications earned along the way.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="group rounded-2xl border overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(cert)}
            >
              {/* Certificate thumbnail */}
              <div className="relative h-44 bg-black/5 dark:bg-white/5 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-[#1C1C1C]/90 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
                    initial={false}
                  >
                    <ExternalLink size={14} className="text-blue-600" />
                    <span className="text-xs font-semibold" style={{ color: 'var(--text)' }}>View Certificate</span>
                  </motion.div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${tagStyles[cert.tagColor] || tagStyles.blue}`}
                  >
                    {cert.tag}
                  </span>
                  <span className="text-[10px] text-[#bbb] dark:text-[#555] font-medium whitespace-nowrap">{cert.date}</span>
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1" style={{ color: 'var(--text)' }}>
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1">
                  <Award size={11} />
                  {cert.issuer}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-sub)' }}>
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
