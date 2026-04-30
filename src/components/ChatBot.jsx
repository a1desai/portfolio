import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
/* ── Knowledge base ── */
const KB = {
  greeting: `Hey! I'm Aryan's AI assistant 👋 I know everything about him — his projects, experience, skills, and more. What would you like to know?`,

  who: `Aryan Desai is a 3rd-year Computer Science (Co-op) student at Toronto Metropolitan University and a Software Engineer at FlipPilot. He builds real-world AI and full-stack systems — from winning hackathons to leading AI programs across 10+ Canadian universities.`,

  education: `Aryan is in his 3rd year of a B.Sc. Computer Science (Co-op) at Toronto Metropolitan University (TMU), expected to graduate in 2029. He earned a $6,000 entrance scholarship and has been on the Dean's List for consecutive semesters. Courses include Data Structures, Algorithms, Machine Learning, and Cloud Computing.`,

  experience: `Aryan currently holds 4 roles:\n\n• **Software Engineer @ FlipPilot** — building retail extraction pipelines scraping 7+ US marketplaces and an 8-stage AI-powered deal-analysis workflow\n• **AI Project Lead @ CCubed** — leading AI initiatives across 10+ Canadian universities, reaching 500+ students\n• **AI/ML Contributor @ BYTE (TMU Computing Club)** — contributing to SecureBYTE AI, a multi-LLM platform supporting 9+ providers\n• **Technology Director @ Google Developer Groups on Campus** — delivering React, TypeScript & GCP workshops and rebuilding the SolutionHacks website`,

  flippilot: `At FlipPilot (https://www.flippilot.ca/), Aryan is a Software Engineer building:\n• A retail extraction pipeline scraping 7+ US marketplaces using JSON-LD and microdata parsing\n• An 8-stage automated AI workflow for item analysis, price estimation, and multi-channel deal alerts logged to PostgreSQL\n\nFlipPilot is a retail intelligence startup helping people find deals.`,

  ccubed: `At CCubed (Computing Councils of Canada), Aryan is the AI Project Lead. He:\n• Scaled their AI program to 10+ Canadian universities, reaching 500+ computing students\n• Built an adversarial cybersecurity sandbox using LangGraph with autonomous Red/Blue Team AI agents evaluated against 40 real-world CVEs\n• Delivered autonomous systems security research as tech lead`,

  byte: `At BYTE (TMU's Computing Club), Aryan contributes to SecureBYTE AI — a modular multi-LLM platform supporting 9+ providers. He built an output validation module detecting oversized code blocks in LLM responses, improving safety guardrails. GitHub: https://github.com/a1desai/SecureBYTE_AI`,

  gdg: `As Technology Director at Google Developer Groups on Campus (TMU), Aryan:\n• Delivered 3+ technical workshops in React, TypeScript, and GCP, onboarding 30+ first-year students\n• Led the frontend rebuild of the SolutionHacks hackathon website, shipping features for 200+ participants`,

  projects: `Aryan's notable projects:\n\n• **BeaverBuddy** — Won $4,500 (1st/30+ teams) at Build Your Bridge. Full-stack mental health + immigration platform for Canadian newcomers (Next.js, PostgreSQL, GPT-4o-mini)\n• **EchoBase** — Workplace intelligence platform answering natural language queries via LLM reasoning (Next.js, Express, Supabase)\n• **ApexRL** — Multi-agent autonomous racing sim with 95%+ collision-free runs using Deep RL (Python, PyTorch, Godot)\n• **SentinAI** — Chrome Extension for real-time legal risk audits of Terms of Service (GPT-4o-mini)\n• **Sentry-AI** — AI-powered SOC triage platform cutting manual triage time by 60% (React, OpenAI API, VirusTotal API)\n• **FlashFocus** — Intelligent spaced repetition flashcard system (Java, React)`,

  beaverbuddy: `BeaverBuddy is Aryan's hackathon-winning project — it won $4,500 (1st place out of 30+ teams) at Build Your Bridge. It's a full-stack mental health and immigration platform for Canadian newcomers, featuring:\n• JWT-authenticated backend covering 50+ immigration pathways\n• Daily AI-generated cultural quests via GPT-4o-mini\n• Live event discovery via the Ticketmaster API\n\nTech: TypeScript, Next.js, PostgreSQL, Prisma`,

  sentinai: `SentinAI is a Chrome Extension Aryan built at a hackathon. It performs real-time legal risk audits of Terms of Service pages — flagging harmful clauses directly in the browser sidebar. Uses GPT-4o-mini with custom prompt engineering for plain-language risk alerts.`,

  sentryai: `Sentry-AI is Aryan's AI-powered SOC triage platform that:\n• Cuts manual alert triage time by 60% per incident\n• Reduces average investigation steps from 8 to 3\n• Integrates VirusTotal and IPInfo APIs for threat intelligence\n• Built with React/Next.js frontend and Node.js/Express backend`,

  echobase: `EchoBase is a workplace intelligence platform Aryan built that:\n• Ingests multiple data sources and answers natural language queries through an LLM reasoning layer\n• Uses semantic search for fast, accurate cross-document retrieval\n• Built with Next.js, TypeScript, Express.js, and Supabase/PostgreSQL`,

  apexrl: `ApexRL is a multi-agent autonomous racing simulation Aryan built in Godot with Deep RL. Key highlights:\n• 95%+ collision-free runs across multi-track environments\n• Curriculum-based track progression with checkpoint reward system\n• Real-time dashboards tracking 5+ performance metrics\n• Built with Python, PyTorch, and Hugging Face`,

  hackathon: `Aryan won $4,500 (1st place out of 30+ teams) at the Build Your Bridge hackathon with BeaverBuddy — a full-stack mental health and immigration platform for Canadian newcomers. He also competed in multiple other hackathons, building SentinAI (Chrome Extension for legal risk audits).`,

  skills: `Aryan's tech stack:\n\n• **Languages**: TypeScript, Python, Java, JavaScript, SQL\n• **Frontend**: React, Next.js, Tailwind CSS\n• **Backend**: Node.js, Express.js, PostgreSQL, Prisma, Supabase\n• **AI/ML**: PyTorch, Hugging Face, OpenAI API, LangChain, LangGraph\n• **DevOps**: Docker, AWS, GCP, CI/CD\n• **Other**: Chrome Extensions, JWT, Temporal, Drizzle ORM`,

  achievements: `Aryan's key achievements:\n• 🏆 Won $4,500 at Build Your Bridge hackathon (1st / 30+ teams)\n• 🎓 $6,000 entrance scholarship at TMU\n• 📚 Dean's List for consecutive semesters\n• 🌎 Led AI programs reaching 500+ students across 10+ Canadian universities\n• 💼 Software Engineer at a real startup while in 3rd year CS`,

  contact: `You can reach Aryan at:\n• 📧 Email: aryandes20@gmail.com\n• 💼 LinkedIn: linkedin.com/in/aryan-desai-cs\n• 🐙 GitHub: github.com/a1desai\n• 📍 Location: Toronto, ON, Canada`,

  internship: `Aryan is open to 2026 Summer/Fall internship opportunities! He's looking for roles in software engineering, AI/ML, or full-stack development. You can reach him at aryandes20@gmail.com or schedule a call via his portfolio.`,

  fallback: `I'm not sure about that specific topic! You can ask me about:\n• Who Aryan is\n• His education at TMU\n• Work experience (FlipPilot, CCubed, BYTE, GDG)\n• Projects (BeaverBuddy, SentinAI, Sentry-AI, etc.)\n• Skills & tech stack\n• Hackathon wins & achievements\n• How to contact him`,
};

/* ── Response matcher ── */
const getResponse = (msg) => {
  const m = msg.toLowerCase().trim();

  if (/^(hi|hello|hey|sup|yo|howdy|good morning|good evening|greetings|what's up|wassup)/.test(m))
    return KB.greeting;

  if (/beaverbuddy|beaver buddy|build your bridge/.test(m)) return KB.beaverbuddy;
  if (/sentinai|sentin ai|chrome extension|terms of service/.test(m)) return KB.sentinai;
  if (/sentry.?ai|soc|triage|cybersecurity platform/.test(m)) return KB.sentryai;
  if (/echobase|echo base|workplace intel/.test(m)) return KB.echobase;
  if (/apexrl|apex rl|racing|reinforcement|godot/.test(m)) return KB.apexrl;
  if (/flashfocus|flash focus|flashcard/.test(m))
    return `FlashFocus is an intelligent spaced repetition flashcard system Aryan built with a Java backend and React frontend. It uses a spaced repetition algorithm for optimized retention intervals and features a full RESTful API.`;

  if (/flippilot|flip pilot/.test(m)) return KB.flippilot;
  if (/ccubed|c3|computing council|c-cubed/.test(m)) return KB.ccubed;
  if (/\bbyte\b|securebyte|tmu.*club|computing club/.test(m)) return KB.byte;
  if (/gdg|google developer|solutionhacks/.test(m)) return KB.gdg;

  if (/project|built|build|make|made|created|shipped|portfolio/.test(m)) return KB.projects;
  if (/hackathon|win|won|award|competition|prize|4500|4,500/.test(m)) return KB.hackathon;
  if (/skill|tech|stack|language|framework|tool|know|use|code|program/.test(m)) return KB.skills;
  if (/achieve|accomplish|scholarship|dean|recognition/.test(m)) return KB.achievements;

  if (/school|university|tmu|toronto metropolitan|education|study|degree|student|year|graduate/.test(m))
    return KB.education;

  if (/work|job|experience|role|position|employ|company|compan/.test(m)) return KB.experience;
  if (/intern|hiring|hire|opportunit|open to|recruit|job hunt/.test(m)) return KB.internship;
  if (/contact|reach|email|linkedin|github|connect|touch|talk/.test(m)) return KB.contact;

  if (/who|about aryan|introduce|tell me about|background|himself|describe/.test(m)) return KB.who;

  return KB.fallback;
};

/* ── Suggested questions ── */
const SUGGESTIONS = [
  'Who is Aryan?',
  'What projects has he built?',
  'What\'s his tech stack?',
  'Tell me about BeaverBuddy',
  'How can I contact him?',
];

/* ── Message bubble ── */
const Bubble = ({ msg }) => {
  const isBot = msg.from === 'bot';
  return (
    <motion.div
      className={`flex gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
          <Bot size={14} className="text-white" />
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? 'rounded-tl-sm border'
            : 'bg-blue-600 text-white rounded-tr-sm'
        }`}
        style={isBot ? { background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text-sub)' } : {}}
      >
        {msg.text.split('\n').map((line, i) => {
          const parts = line.split(/\*\*(.*?)\*\*/g);
          return (
            <p key={i} className={i > 0 ? 'mt-1' : ''}>
              {parts.map((part, j) =>
                j % 2 === 1
                  ? <strong key={j} style={{ color: 'var(--text)' }}>{part}</strong>
                  : part
              )}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ── Typing indicator ── */
const Typing = () => (
  <motion.div
    className="flex gap-2 justify-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
      <Bot size={14} className="text-white" />
    </div>
    <div className="px-4 py-3 rounded-2xl rounded-tl-sm border flex gap-1 items-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#888]"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  </motion.div>
);

/* ── Main ChatBot component ── */
const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 0, from: 'bot', text: KB.greeting },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 100);
    }
  }, [open, minimized, messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), from: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setShowSuggestions(false);
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      setTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, from: 'bot', text: response }]);
    }, 700 + Math.random() * 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center"
            onClick={() => setOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
            <motion.span
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-[#0F0F0F]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl overflow-hidden border flex flex-col"
            style={{
              background: 'var(--bg)',
              borderColor: 'var(--border)',
              height: minimized ? 'auto' : '520px',
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b bg-blue-600" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">Aryan's AI Assistant</p>
                <p className="text-blue-100 text-xs">Ask me anything about Aryan</p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setMinimized(m => !m)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                  aria-label={minimized ? 'Expand' : 'Minimize'}
                >
                  <ChevronDown size={14} className={`transition-transform ${minimized ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                  {messages.map(msg => (
                    <Bubble key={msg.id} msg={msg} />
                  ))}
                  {typing && <Typing />}

                  {/* Suggestions */}
                  {showSuggestions && messages.length === 1 && !typing && (
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-xs text-[#999] dark:text-[#666] font-medium px-1">Suggested questions:</p>
                      <div className="flex flex-wrap gap-2">
                        {SUGGESTIONS.map(s => (
                          <button
                            key={s}
                            onClick={() => sendMessage(s)}
                            className="text-xs px-3 py-1.5 rounded-full border font-medium transition hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                            style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text-sub)' }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="px-4 py-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex gap-2 items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask anything about Aryan..."
                      className="flex-1 text-sm px-3 py-2.5 rounded-xl border outline-none transition focus:border-blue-400"
                      style={{
                        background: 'var(--card)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)',
                      }}
                    />
                    <motion.button
                      onClick={() => sendMessage(input)}
                      disabled={!input.trim() || typing}
                      className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center flex-shrink-0 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Send"
                    >
                      <Send size={15} />
                    </motion.button>
                  </div>
                  <p className="text-[10px] text-[#ccc] dark:text-[#555] mt-2 text-center">
                    AI assistant with knowledge about Aryan Desai
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
