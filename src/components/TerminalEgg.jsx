import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TRIGGER = 'aryan';

const COMMANDS = {
  whoami: [
    '> Aryan Desai',
    '> CS student @ Toronto Metropolitan University',
    '> Software Engineer | AI/ML | Cybersecurity',
    '> Currently: SWE Intern @ FlipPilot | Tech Director @ GDG',
  ],
  'ls projects': [
    'sentry-ai/     echobase/     beaverbuddy/',
    'flashfocus/    sentinai/     ai-racer/',
  ],
  'cat skills.txt': [
    'Languages:   TypeScript  Python  Java  C++  SQL',
    'Frontend:    React  Next.js  Tailwind',
    'Backend:     Node.js  Express  PostgreSQL  Prisma',
    'AI/ML:       PyTorch  Hugging Face  OpenAI  LLMs',
    'DevOps:      Docker  AWS  GCP  CI/CD  Jest',
  ],
  'cat achievements.txt': [
    '$4,500 winner — Build Your Bridge competition',
    '$6,000 entrance scholarship — TMU',
    '50+ students mentored in React / TypeScript / AI',
    '35% scan failure reduction @ Byte-SecureBYTE',
  ],
  help: [
    'Available commands:',
    '  whoami             — who is this guy?',
    '  ls projects        — list projects',
    '  cat skills.txt     — view skills',
    '  cat achievements.txt — bragging rights',
    '  clear              — clear terminal',
    '  exit               — close',
  ],
};

const BOOT_LINES = [
  'Initializing aryan.sh v2.0.0...',
  'Loading personality modules... ✓',
  'Mounting /skills, /projects, /ambition... ✓',
  'Ready. Type `help` to get started.',
];

const TerminalEgg = () => {
  const [open, setOpen] = useState(false);
  const [buffer, setBuffer] = useState('');
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [booted, setBooted] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Global keydown listener to detect "aryan" typed anywhere
  useEffect(() => {
    const onKey = (e) => {
      if (open) return;
      const next = (buffer + e.key).slice(-TRIGGER.length);
      setBuffer(next);
      if (next === TRIGGER) {
        setOpen(true);
        setBuffer('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, buffer]);

  // Boot sequence on open
  useEffect(() => {
    if (!open) return;
    setLines([]);
    setBooted(false);
    setInput('');
    let i = 0;
    const tick = setInterval(() => {
      setLines(prev => [...prev, BOOT_LINES[i]]);
      i++;
      if (i >= BOOT_LINES.length) {
        clearInterval(tick);
        setBooted(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    }, 280);
    return () => clearInterval(tick);
  }, [open]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleClose = () => {
    setOpen(false);
    setLines([]);
    setBooted(false);
  };

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    setLines(prev => [...prev, `$ ${cmd}`]);
    if (trimmed === 'exit') { handleClose(); return; }
    if (trimmed === 'clear') { setLines([]); return; }
    const output = COMMANDS[trimmed];
    if (output) {
      setLines(prev => [...prev, ...output]);
    } else if (trimmed !== '') {
      setLines(prev => [...prev, `command not found: ${trimmed}. Type \`help\`.`]);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    }
    if (e.key === 'Escape') handleClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            className="w-full max-w-2xl bg-neutral-950 border border-neutral-700 rounded-xl shadow-2xl shadow-green-500/10 overflow-hidden"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800">
              <div className="flex gap-1.5">
                <button onClick={handleClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-2 text-xs text-gray-400 font-mono">aryan.sh — bash</span>
              <button onClick={handleClose} className="ml-auto text-gray-600 hover:text-gray-300 transition">
                <X size={14} />
              </button>
            </div>

            {/* Terminal body */}
            <div
              className="h-80 overflow-y-auto p-4 font-mono text-sm text-green-400 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div key={i} className={line.startsWith('$') ? 'text-white' : 'text-green-400'}>
                  {line}
                </div>
              ))}

              {booted && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-white">$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="flex-1 bg-transparent outline-none text-green-300 caret-green-400"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalEgg;
