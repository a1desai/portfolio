import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalEgg from './components/TerminalEgg';
import SectionNav from './components/SectionNav';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <SectionNav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <TerminalEgg />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}

export default App;
