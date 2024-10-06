import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollUpButton from './components/ScrollUpButton';

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">

      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ScrollUpButton />
    </main>
  );
};

export default HomePage;


