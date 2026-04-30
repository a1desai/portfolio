import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.07] dark:border-white/[0.07] py-8 px-6" style={{ background: 'var(--bg)' }}>
      <motion.div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-[#bbb] dark:text-[#555]">
          © {currentYear}{' '}
          <span className="font-semibold text-[#555] dark:text-[#aaa]">Aryan Desai</span>
        </p>
        <p className="text-xs text-[#ccc] dark:text-[#444]">Built with React · Tailwind · Framer Motion</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
