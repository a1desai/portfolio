import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Aryan was a pleasure to work with on BeaverBuddy. With exceptional technical skills, he was able to transform ideas into reality with elegant code. He's a fantastic full-stack engineer with thorough knowledge of JavaScript frameworks and system design.",
    author: 'Gaston Chung',
    role: 'Co-Developer',
    company: 'BeaverBuddy',
    seed: 'Gaston',
    rating: 5,
  },
  {
    text: "Aryan was both a consistent and hard worker, willing to spend time and effort learning in areas outside his prior experience. He inventively applied his newfound knowledge to come up with creative solutions. He's a great partner to work with, and gained an intuitive understanding of neural networks and the Godot engine.",
    author: 'Joshua Song',
    role: 'Co-Developer',
    company: 'ApexRL',
    seed: 'Joshua',
    rating: 5,
  },
  {
    text: "Aryan was a pleasure to work with on FlashFocus. He contributed heavily to building clean and intuitive user-facing features, helping translate complex logic into a smooth and usable interface. His work added a lot of polish to the project, and he was a dependable and collaborative teammate throughout.",
    author: 'Sarim Khan',
    role: 'Co-Developer',
    company: 'FlashFocus',
    seed: 'Sarim',
    rating: 5,
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="page-section px-6 py-28 relative"
    style={{ background: 'var(--bg-alt)' }}
  >
    <div className="max-w-5xl mx-auto w-full">
      {/* Section label */}
      <motion.div
        className="flex items-center gap-4 mb-14"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">07</span>
        <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
        <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Social Proof</span>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        style={{ color: 'var(--text)' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What people say.
      </motion.h2>
      <motion.p
        className="text-[#888] dark:text-[#666] mb-14 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Colleagues I've built things with.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="rounded-3xl p-7 border shadow-sm flex flex-col relative overflow-hidden group"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            initial={{ opacity: 0, y: 40, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
          >
            {/* Colored top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: ['linear-gradient(90deg,#3b82f6,#6366f1)', 'linear-gradient(90deg,#8b5cf6,#ec4899)', 'linear-gradient(90deg,#10b981,#3b82f6)'][i],
              }}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>

            <Quote size={28} className="text-black/10 dark:text-white/10 mb-4 flex-shrink-0" />

            <p className="text-[15px] leading-relaxed italic flex-1 mb-7" style={{ color: 'var(--text-sub)' }}>
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}`}
                alt={t.author}
                className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8 flex-shrink-0"
              />
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{t.author}</p>
                <p className="text-xs text-[#999] dark:text-[#666]">{t.role} · {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
