import { useState } from 'react';
import { ExternalLink, Github, Code, ArrowLeft, Trophy, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';

/* ── Detail modal ── */
const ProjectDetail = ({ project, onBack }) => (
  <motion.div
    className="fixed inset-0 z-50 overflow-y-auto"
    style={{ background: 'var(--modal-bg)', backdropFilter: 'blur(16px)' }}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#888] dark:text-[#666] hover:text-[#0D0D0D] dark:hover:text-[#F0EDE8] transition mb-8 group text-sm font-semibold"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" />
        Back to Projects
      </button>

      <div className="rounded-3xl overflow-hidden border shadow-sm mb-8" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        {project.video ? (
          <video src={project.video} controls autoPlay className="w-full h-auto" style={{ maxHeight: '480px', objectFit: 'cover' }} />
        ) : project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-black/5 dark:bg-white/5">
            <Code size={40} className="text-black/20 dark:text-white/20" />
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>{project.title}</h1>
            <span className="text-xs font-semibold text-[#444] dark:text-[#bbb] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">{project.tag}</span>
          </div>
          <p className="text-[#666] dark:text-[#999] leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-col gap-2.5 min-w-[140px]">
          {[['Status', project.status, 'text-green-600 dark:text-green-400'], ['Date', project.date, ''], ['Type', project.type, 'text-blue-600 dark:text-blue-400']].map(([label, val, cls]) => (
            <div key={label} className="rounded-xl px-4 py-3 text-center border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <p className="text-[#aaa] dark:text-[#555] text-[10px] uppercase tracking-wider mb-1">{label}</p>
              <p className={`${cls} font-bold text-xs`} style={!cls ? { color: 'var(--text)' } : {}}>{val}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>Technology Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-sm text-[#444] dark:text-[#bbb] hover:bg-black/10 dark:hover:bg-white/10 transition">{tech}</span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text)' }}>Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.highlights.map((h, i) => (
            <div key={i} className="rounded-xl p-4 flex gap-3 shadow-sm border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="w-6 h-6 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 dark:text-green-400 text-xs font-bold">✓</span>
              </div>
              <p className="text-[#555] dark:text-[#aaa] text-sm leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Tag chip color ── */
const tagCls = (project) => {
  if (project.tagColor === 'purple') return 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800';
  if (project.tagColor === 'cyan')   return 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800';
  return 'bg-black/5 dark:bg-white/5 text-[#555] dark:text-[#aaa] border-black/10 dark:border-white/10';
};

/* ── Accent gradient per index ── */
const ACCENTS = [
  'linear-gradient(to bottom, #3b82f6, #6366f1)',
  'linear-gradient(to bottom, #8b5cf6, #ec4899)',
  'linear-gradient(to bottom, #10b981, #3b82f6)',
  'linear-gradient(to bottom, #f59e0b, #ef4444)',
  'linear-gradient(to bottom, #06b6d4, #3b82f6)',
  'linear-gradient(to bottom, #f43f5e, #f97316)',
];

/* ── Main component ── */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all',       label: 'All' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'ai',        label: 'AI / ML' },
  ];

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="page-section px-6 py-28 relative" style={{ background: 'var(--bg-alt)' }}>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">04</span>
            <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
            <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            Things I've built.
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {filters.map(f => (
            <motion.button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: activeFilter === f.key ? 'var(--text)' : 'var(--border)',
                color:        activeFilter === f.key ? 'var(--bg)'   : 'var(--text-muted)',
                background:   activeFilter === f.key ? 'var(--text)' : 'var(--card)',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          <motion.div className="space-y-5" layout>
            {filtered.map((project, index) => {
              const fromLeft = index % 2 === 0;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                >
                  <motion.div
                    className="group rounded-3xl border shadow-sm overflow-hidden relative"
                    style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                    whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  >
                    {/* Animated left accent bar */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                      style={{ background: ACCENTS[index % ACCENTS.length], transformOrigin: 'top' }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                    />

                    <div className="p-7 md:p-8 pl-10 relative z-10">
                      {/* Badges */}
                      <div className="flex gap-2 flex-wrap mb-5">
                        <span className="text-xs bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 px-2.5 py-1 rounded-full text-[#888] dark:text-[#666] font-medium">{project.date}</span>
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${tagCls(project)}`}>{project.tag}</span>
                        {project.isPersonal && (
                          <span className="text-xs bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 px-2.5 py-1 rounded-full font-semibold">Personal</span>
                        )}
                        <span className="text-xs bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 px-2.5 py-1 rounded-full font-medium">{project.status}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                        <div className="flex items-start gap-3">
                          {project.image && (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-14 h-14 rounded-2xl border border-black/8 dark:border-white/8 object-cover shadow-sm flex-shrink-0 group-hover:scale-105 transition duration-300"
                            />
                          )}
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-extrabold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-200" style={{ color: 'var(--text)' }}>
                                {project.title}
                              </h3>
                              {project.tag === 'Hackathon Winner' && (
                                <Trophy size={16} className="text-amber-500 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-[10px] text-[#bbb] dark:text-[#555] uppercase tracking-[0.15em] font-bold">{project.type}</p>
                          </div>
                        </div>
                      </div>

                      <p className="mb-5 text-[15px] leading-relaxed" style={{ color: 'var(--text-sub)' }}>{project.description}</p>

                      {/* Highlights */}
                      <motion.div
                        className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                      >
                        {project.highlights.map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex gap-2 text-[13px]"
                            style={{ color: 'var(--text-sub)' }}
                            variants={{
                              hidden:   { opacity: 0, x: fromLeft ? -12 : 12 },
                              visible:  { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
                            }}
                          >
                            <span className="text-blue-500 flex-shrink-0 mt-0.5 font-bold">▸</span>
                            <span>{h}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map(tech => (
                          <motion.span
                            key={tech}
                            className="text-xs text-[#555] dark:text-[#aaa] bg-black/[0.04] dark:bg-white/[0.04] border border-black/8 dark:border-white/8 px-2.5 py-1 rounded-lg font-medium"
                            whileHover={{ scale: 1.07 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2.5 flex-wrap">
                        {project.demo && project.status !== 'Coming Soon' && (
                          <motion.button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-xl text-xs font-bold"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Demo <ExternalLink size={12} />
                          </motion.button>
                        )}
                        {project.github && project.status !== 'Coming Soon' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#444] dark:text-[#bbb] rounded-xl text-xs font-bold"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Github size={14} /> Code <ExternalLink size={12} />
                          </motion.a>
                        )}
                        {project.linkedinPost && (
                          <motion.a
                            href={project.linkedinPost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 rounded-xl text-xs font-bold"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Linkedin size={12} /> Post
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
