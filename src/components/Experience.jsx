import { MapPin, Code2, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = () => (
  <section id="experience" className="page-section px-6 py-28 relative" style={{ background: 'var(--bg)' }}>
    <div className="max-w-4xl mx-auto w-full">
      {/* Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">03</span>
          <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
          Where I've worked.
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="space-y-6">
        {experienceData.map((exp, index) => {
          const fromLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className="group rounded-3xl border shadow-sm overflow-hidden relative"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
            >
              {/* Gradient left accent */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                style={{
                  background: [
                    'linear-gradient(to bottom, #3b82f6, #6366f1)',
                    'linear-gradient(to bottom, #8b5cf6, #ec4899)',
                    'linear-gradient(to bottom, #10b981, #3b82f6)',
                    'linear-gradient(to bottom, #f59e0b, #ef4444)',
                  ][index % 4],
                  transformOrigin: 'top',
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
              />

              <div className="p-7 md:p-8 pl-10">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    {exp.image && (
                      <motion.img
                        src={exp.image}
                        alt={exp.company}
                        className="w-14 h-14 rounded-2xl border border-black/8 dark:border-white/8 object-cover shadow-sm flex-shrink-0"
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-200" style={{ color: 'var(--text)' }}>
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#888] dark:text-[#666]">
                        <span className="font-semibold text-[#444] dark:text-[#aaa]">{exp.company}</span>
                        <span className="text-[#ddd] dark:text-[#333]">·</span>
                        <MapPin size={12} className="text-[#ccc] dark:text-[#555]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="self-start text-xs font-bold text-[#888] dark:text-[#666] bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[15px] mb-5 leading-relaxed" style={{ color: 'var(--text-sub)' }}>{exp.description}</p>

                {/* Highlights */}
                <motion.div
                  className="space-y-2.5 mb-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: index * 0.06 + 0.25 } } }}
                >
                  {exp.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3 text-[15px]"
                      style={{ color: 'var(--text-sub)' }}
                      variants={{
                        hidden: { opacity: 0, x: fromLeft ? -16 : 16 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                      }}
                    >
                      <Code2 size={14} className="text-blue-400 flex-shrink-0 mt-1" />
                      <span>{h}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* External links */}
                {(exp.website || exp.github) && (
                  <div className="flex gap-2.5 flex-wrap">
                    {exp.website && (
                      <motion.a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 rounded-xl text-xs font-bold"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <ExternalLink size={12} /> Website
                      </motion.a>
                    )}
                    {exp.github && (
                      <motion.a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#444] dark:text-[#bbb] rounded-xl text-xs font-bold"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github size={14} /> GitHub <ExternalLink size={12} />
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
