import React from 'react';
import { MapPin, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import educationData from '../data/education.json';

const Education = () => (
  <section
    id="education"
    className="page-section px-6 py-28 relative"
    style={{ background: 'var(--bg)' }}
  >
    <div className="max-w-4xl mx-auto w-full">
      {/* Section label */}
      <motion.div
        className="flex items-center gap-4 mb-14"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">06</span>
        <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
        <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Education</span>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-14"
        style={{ color: 'var(--text)' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Where I'm learning.
      </motion.h2>

      {educationData.map((edu, i) => (
        <motion.div
          key={i}
          className="rounded-3xl border shadow-sm overflow-hidden"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.09)' }}
        >
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-400" />

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                {edu.image && (
                  <motion.img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-16 h-16 rounded-2xl border border-black/8 dark:border-white/8 object-cover shadow-sm flex-shrink-0"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                )}
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 tracking-tight" style={{ color: 'var(--text)' }}>
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#666] dark:text-[#999]">
                    <BookOpen size={14} className="text-[#bbb] dark:text-[#555]" />
                    <span className="font-semibold text-[#444] dark:text-[#aaa]">{edu.institution}</span>
                    <span className="text-[#ddd] dark:text-[#333]">·</span>
                    <MapPin size={13} className="text-[#bbb] dark:text-[#555]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <span className="self-start text-sm font-bold text-[#888] dark:text-[#666] bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 px-4 py-2 rounded-full whitespace-nowrap">
                {edu.period}
              </span>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {edu.highlights.map((h, j) => (
                <motion.div
                  key={j}
                  className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-full text-sm text-green-700 dark:text-green-400 font-semibold"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + j * 0.08, type: 'spring', stiffness: 280 }}
                >
                  <Award size={13} className="text-green-500 dark:text-green-400" />
                  {h}
                </motion.div>
              ))}
            </div>

            {/* Coursework */}
            {edu.coursework && (
              <div>
                <p className="text-[10px] font-bold text-[#bbb] dark:text-[#555] uppercase tracking-[0.18em] mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, k) => (
                    <motion.span
                      key={k}
                      className="text-sm text-[#555] dark:text-[#aaa] bg-black/[0.04] dark:bg-white/[0.04] border border-black/8 dark:border-white/8 px-3 py-1.5 rounded-lg font-medium"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + k * 0.07 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
