import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 text-white min-h-screen">
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
