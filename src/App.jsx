import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';
import WelcomeScreen from './components/WelcomeScreen';
import FloatingParticles from './components/FloatingParticles';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Only run spotlight tracking on desktop (mouse) devices
    if (isTouchDevice) {
      document.documentElement.style.setProperty('--x', '50%');
      document.documentElement.style.setProperty('--y', '-500px'); // Hide it off-screen on touch
      return;
    }

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      <FloatingParticles />
      <div className="spotlight"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
        <footer>
          <div className="container">
            <p className="footer-text">
              Designed & Built with <span style={{ color: 'var(--accent)' }}>♥</span> by JANISH JOB P
            </p>
            <p className="footer-subtext">
              © All Rights Reserved
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
