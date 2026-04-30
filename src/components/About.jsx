import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const interests = ['Full-Stack', 'AI/ML', 'Cybersecurity', 'Systems Design'];

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>

      {/* Photo — right side */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none">
        <img
          src="/images/projects/Aryan.jpg"
          alt="Aryan Desai"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--bg) 0%, transparent 35%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 12%, transparent 88%, var(--bg) 100%)' }} />
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">01</span>
          <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">About</span>
        </motion.div>

        <div className="md:w-[55%]">

          {/* Heading + blurb */}
          <motion.div
            className="space-y-4 mb-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
              I build things that ship.
            </h2>
            <p className="leading-relaxed text-base" style={{ color: 'var(--text-sub)' }}>
              3rd-year CS student at TMU, already working in production. I care about writing real code for real users — not just class projects.
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="space-y-3">
            {[
              { label: 'Currently at', title: 'FlipPilot', sub: 'Software Engineer · Remote', delay: 0.1, dot: true },
              { label: 'Studying',     title: 'Toronto Metropolitan University', sub: 'B.Sc. Computer Science Co-op · 3rd Year', delay: 0.18 },
              { label: 'Based in',     title: 'Toronto, ON', sub: 'Canada', delay: 0.26 },
            ].map(({ label, title, sub, delay, dot }) => (
              <motion.div
                key={label}
                className="rounded-2xl p-4 border shadow-sm backdrop-blur-sm"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
              >
                <p className="text-[10px] text-[#bbb] dark:text-[#555] uppercase tracking-[0.18em] font-semibold mb-1.5">{label}</p>
                <div className="flex items-center gap-2">
                  {dot && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />}
                  <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{title}</p>
                </div>
                <p className="text-[#999] dark:text-[#666] text-xs mt-0.5">{sub}</p>
              </motion.div>
            ))}

            {/* Interests */}
            <motion.div
              className="rounded-2xl p-4 border shadow-sm backdrop-blur-sm"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
              whileHover={{ y: -2 }}
            >
              <p className="text-[10px] text-[#bbb] dark:text-[#555] uppercase tracking-[0.18em] font-semibold mb-3">Interested in</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="text-xs text-[#444] dark:text-[#bbb] bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 px-3 py-1 rounded-full font-medium"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.06, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.06 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
