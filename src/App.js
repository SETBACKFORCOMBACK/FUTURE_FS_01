import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionMap = {
      home: homeRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef
    };

    const targetRef = sectionMap[sectionId];
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header onNavClick={scrollToSection} />
      <main>
        <div ref={homeRef}>
          <Hero onNavClick={scrollToSection} />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

