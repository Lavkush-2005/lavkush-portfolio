import { Hero } from '@components/sections/Hero';
import { About } from '@components/sections/About';
import { Skills } from '@components/sections/Skills';
import { Projects } from '@components/sections/Projects';
import { Certifications } from '@components/sections/Certifications';
import { Contact } from '@components/sections/Contact';

/**
 * Home page — Phase 4B adds the Contact section below Certifications,
 * completing the full section lineup. Footer renders globally in
 * App.jsx directly after this page's content.
 */
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default Home;
