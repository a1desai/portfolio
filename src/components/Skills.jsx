import React from 'react';
import { Zap, Database, Brain, Cloud, Code2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import GitHubActivity from './GitHubActivity';

const ICON_MAP = { Zap, Database, Brain, Cloud, Code2 };

const MARQUEE_TECHS = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PyTorch',
  'LangChain', 'LangGraph', 'PostgreSQL', 'Docker', 'AWS', 'Supabase',
  'Temporal', 'Express.js', 'Prisma', 'GCP', 'Drizzle ORM', 'JWT',
];

const TechMarquee = () => (
  <div className="overflow-hidden py-5 border-y border-black/[0.07] dark:border-white/[0.07] my-14">
    <div className="flex gap-10 animate-marquee whitespace-nowrap">
      {[...MARQUEE_TECHS, ...MARQUEE_TECHS].map((tech, i) => (
        <span
          key={i}
          className="text-sm font-semibold text-[#bbb] dark:text-[#555] hover:text-[#555] dark:hover:text-[#bbb] transition duration-200 cursor-default flex items-center gap-2.5"
        >
          <span className="w-1 h-1 rounded-full bg-[#ddd] dark:bg-[#444]" />
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = skillsData.categories.map(c => ({
    ...c,
    icon: ICON_MAP[c.icon] || Code2,
  }));

  return (
    <section id="skills" className="page-section py-28 px-6 relative" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">02</span>
          <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Skills</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-black tracking-tight mb-4"
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          What I work with
        </motion.h2>
        <motion.p
          className="text-[#888] dark:text-[#666] mb-0 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Full-stack to AI/ML — here's the stack I reach for.
        </motion.p>

        <TechMarquee />

        {/* Skill category cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition duration-300">
                    <Icon size={18} className="text-[#555] dark:text-[#aaa] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2.5 py-1 bg-black/[0.04] dark:bg-white/[0.04] border border-black/8 dark:border-white/8 text-xs text-[#555] dark:text-[#aaa] rounded-lg hover:bg-black/8 dark:hover:bg-white/8 transition duration-200 cursor-default"
                      whileHover={{ scale: 1.06 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements + Exploring */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <motion.div
            className="rounded-2xl p-6 border shadow-sm"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <CheckCircle size={14} className="text-green-500" />
              Key Achievements
            </h3>
            <ul className="space-y-3">
              {skillsData.achievements.map((a, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span style={{ color: 'var(--text-sub)' }}>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>{a.label}</span> — {a.detail}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl p-6 border shadow-sm"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
          >
            <h3 className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <Zap size={14} className="text-blue-500" />
              Currently Exploring
            </h3>
            <ul className="space-y-3">
              {skillsData.exploring.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22 + i * 0.07 }}
                >
                  <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span style={{ color: 'var(--text-sub)' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <GitHubActivity />
    </section>
  );
};

export default Skills;
