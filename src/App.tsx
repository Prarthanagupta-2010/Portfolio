import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-espresso-950 flex flex-col font-sans selection:bg-gold-500/20 selection:text-espresso-950">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Page 1 — Landing / Hero */}
        <Hero />

        {/* Page 2 — About Me */}
        <About />

        {/* Page 3 — Work Experience */}
        <Experience />

        {/* Page 4 — Education */}
        <Education />

        {/* Page 5 — Projects */}
        <Projects />

        {/* Page 6 — Skills */}
        <Skills />

        {/* Page 7 — Certifications */}
        <Certifications />

        {/* Page 8 — Achievements & Recognition */}
        <Achievements />

        {/* Page 9 — Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
