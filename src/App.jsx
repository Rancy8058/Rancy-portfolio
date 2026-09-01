import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CertificationsAchievements } from './components/CertificationsAchievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      {/* Subtle Ambient Background Animation Layer */}
      <BackgroundEffects />

      {/* Sticky Responsive Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section (Includes Education inside it) */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section (Exactly 2 Projects) */}
        <Projects />

        {/* 5. Certifications & Achievements Section */}
        <CertificationsAchievements />

        {/* 6. Resume Section */}
        <Resume />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
