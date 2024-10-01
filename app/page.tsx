'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import "./globals.css"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}