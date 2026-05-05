import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileText, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useState, useEffect } from 'react';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-surface-hover)] shadow-sm' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">

        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="link--four-color-background text-sm font-medium text-[var(--color-text-muted)] transition-colors">About</a>
          <a href="#skills" className="link--four-color-background text-sm font-medium text-[var(--color-text-muted)] transition-colors">Skills</a>
          <a href="#projects" className="link--four-color-background text-sm font-medium text-[var(--color-text-muted)] transition-colors">Projects</a>
          <a href="#experience" className="link--four-color-background text-sm font-medium text-[var(--color-text-muted)] transition-colors">Experience</a>
        </div>

        <div className="flex flex-1 md:flex-none justify-start md:absolute md:right-0 items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="https://www.linkedin.com/in/arun-rachuri-27437a313/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors hidden sm:block">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/arunrachuri" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors hidden sm:block">
            <Github className="w-5 h-5" />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden ml-auto text-[var(--color-text-muted)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 py-4 px-6 bg-[var(--color-bg)] border-b border-[var(--color-surface-hover)] shadow-lg flex flex-col gap-4"
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[var(--color-text-muted)]">About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[var(--color-text-muted)]">Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[var(--color-text-muted)]">Projects</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-[var(--color-text-muted)]">Experience</a>
          <div className="flex gap-4 mt-2 pt-2 border-t border-[var(--color-surface-hover)] sm:hidden">
            <a href="https://www.linkedin.com/in/arun-rachuri-27437a313/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/arunrachuri" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] py-16 px-6 border-t border-[var(--color-surface-hover)]" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-serif italic">Let's connect.</h2>
            <a href="https://www.linkedin.com/in/arun-rachuri-27437a313/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm mb-8">
            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:arunrachuri11@gmail.com" className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] font-medium rounded-full hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" /> Say Hello
          </a>
        </div>

        <div className="md:text-right flex flex-col md:items-end justify-between">
          <div className="space-y-4 font-mono text-sm">
            <a href="mailto:arunrachuri11@gmail.com" className="block text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">arunrachuri11@gmail.com</a>
            <p className="text-[var(--color-text-muted)]">+91 8074027343</p>
            <p className="text-[var(--color-text-muted)]">Hyderabad, Telangana</p>
          </div>

          <div className="mt-12 text-[var(--color-text-muted)] text-xs flex items-center md:justify-end gap-2">
            <a href="/resume.pdf" download="Rachuri_Arun_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors inline-flex items-center gap-1">
              <FileText className="w-3 h-3" /> Resume PDF
            </a>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} Rachuri Arun.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
