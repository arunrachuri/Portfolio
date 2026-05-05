/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navigation, Footer } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen selection:bg-[var(--color-accent)] selection:text-white transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <Story />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

