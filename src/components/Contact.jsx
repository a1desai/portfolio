import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import config from '../data/config.json';

const Contact = () => {
  const contactItems = [
    { icon: Mail,   label: 'Email',    value: config.social.email,    href: `mailto:${config.social.email}` },
    { icon: Phone,  label: 'Phone',    value: '(437) 240-6855',        href: 'tel:+14372406855' },
    { icon: MapPin, label: 'Location', value: 'Toronto, ON',           href: null },
  ];

  const socialLinks = [
    { icon: Github,   label: 'GitHub',   href: config.social.github },
    { icon: Linkedin, label: 'LinkedIn', href: config.social.linkedin },
  ];

  return (
    <section id="contact" className="page-section py-28 px-6 relative border-t border-black/[0.07] dark:border-white/[0.07]" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-[#bbb] dark:text-[#444] tracking-[0.2em]">05</span>
          <div className="h-px w-10 bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-[#999] dark:text-[#666] uppercase tracking-[0.18em] font-semibold">Contact</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text)' }}>
            Let's build something.
          </h2>
          <p className="text-[#888] dark:text-[#666] text-lg max-w-xl leading-relaxed">
            Open to internships, collaborations, and interesting problems. I reply fast.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              {href ? (
                <a
                  href={href}
                  className="block rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 group"
                  style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition">
                      <Icon size={18} className="text-[#555] dark:text-[#aaa] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
                    </div>
                    <ArrowUpRight size={14} className="text-[#ccc] dark:text-[#555] group-hover:text-blue-500 transition" />
                  </div>
                  <p className="text-[10px] text-[#bbb] dark:text-[#555] uppercase tracking-widest font-semibold mb-1">{label}</p>
                  <p className="font-bold text-sm break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" style={{ color: 'var(--text)' }}>{value}</p>
                </a>
              ) : (
                <div className="rounded-2xl p-5 border shadow-sm" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="p-2 bg-black/5 dark:bg-white/5 rounded-xl w-fit mb-3">
                    <Icon size={18} className="text-[#555] dark:text-[#aaa]" />
                  </div>
                  <p className="text-[10px] text-[#bbb] dark:text-[#555] uppercase tracking-widest font-semibold mb-1">{label}</p>
                  <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          className="bg-[#0D0D0D] dark:bg-[#F0EDE8] rounded-3xl p-8 md:p-12 text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ scale: 1.005 }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white dark:text-[#0D0D0D] mb-3 tracking-tight">
            Ready to work together?
          </h3>
          <p className="text-[#888] dark:text-[#555] mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Whether it's an internship, a side project, or something I haven't heard of yet — reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={`mailto:${config.social.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-[#0D0D0D] font-bold rounded-xl transition duration-200 text-sm shadow-sm"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Send an Email
            </motion.a>
            <motion.a
              href={config.social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 hover:bg-white/15 dark:hover:bg-black/15 text-white dark:text-[#0D0D0D] font-bold rounded-xl transition duration-200 text-sm"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={16} />
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border rounded-xl text-[#888] dark:text-[#666] hover:text-[#0D0D0D] dark:hover:text-[#F0EDE8] hover:shadow-md transition duration-200 flex items-center gap-2 text-sm font-medium shadow-sm"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
