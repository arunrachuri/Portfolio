import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const DataAnalysisBackground = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 top-0 h-full w-full z-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50"></div>

      {/* Floating Bar Chart */}
      <motion.div
        className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] xl:top-[20%] xl:left-[15%]"
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-40">
           <rect x="10" y="50" width="20" height="40" rx="4" fill="var(--color-accent)" opacity="0.6"/>
           <rect x="40" y="20" width="20" height="70" rx="4" fill="var(--color-accent)" opacity="0.8"/>
           <rect x="70" y="40" width="20" height="50" rx="4" fill="var(--color-accent)" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Floating Line Graph */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] md:bottom-[25%] md:left-[10%] xl:bottom-[30%] xl:left-[15%]"
        animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 120 80" className="w-20 h-14 sm:w-24 sm:h-16 md:w-32 md:h-20 opacity-40">
          <polyline points="10,60 40,30 70,50 110,10" fill="none" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
          <circle cx="40" cy="30" r="5" fill="var(--color-accent)" />
          <circle cx="70" cy="50" r="5" fill="var(--color-accent)" />
          <circle cx="110" cy="10" r="5" fill="var(--color-accent)" />
        </svg>
      </motion.div>

      {/* Floating Pie Chart / Donut */}
      <motion.div
        className="absolute top-[15%] right-[5%] md:top-[20%] md:right-[10%] xl:top-[25%] xl:right-[15%]"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-40">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className="text-[var(--color-text)] opacity-20" strokeWidth="14" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="var(--color-accent)" strokeWidth="14" strokeDasharray="150 200" strokeLinecap="round" opacity="0.8" className="origin-center -rotate-90"/>
        </svg>
      </motion.div>

      {/* Network / Scatter Plot */}
      <motion.div
        className="absolute bottom-[25%] right-[5%] md:bottom-[20%] md:right-[10%] xl:bottom-[25%] xl:right-[15%] hidden sm:block"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 opacity-40">
           <line x1="20" y1="20" x2="80" y2="40" stroke="currentColor" className="text-[var(--color-text)] opacity-20" strokeWidth="3" />
           <line x1="80" y1="40" x2="50" y2="80" stroke="var(--color-accent)" strokeWidth="3" opacity="0.5"/>
           <line x1="50" y1="80" x2="20" y2="20" stroke="currentColor" className="text-[var(--color-text)] opacity-20" strokeWidth="3" />
           <circle cx="20" cy="20" r="7" fill="var(--color-accent)" opacity="0.8" />
           <circle cx="80" cy="40" r="9" fill="var(--color-accent)" opacity="0.6"/>
           <circle cx="50" cy="80" r="6" fill="var(--color-accent)" opacity="0.9"/>
        </svg>
      </motion.div>

      {/* Floating Database / Data Layers */}
      <motion.div
        className="absolute top-[45%] left-[-2%] md:top-[50%] md:left-[2%] opacity-30 hidden lg:block"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-24 h-24">
           {/* Cylinder layers */}
           <ellipse cx="50" cy="30" rx="40" ry="15" fill="none" stroke="var(--color-accent)" strokeWidth="4" />
           <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="var(--color-accent)" strokeWidth="4" />
           <ellipse cx="50" cy="70" rx="40" ry="15" fill="none" stroke="var(--color-accent)" strokeWidth="4" />
           <path d="M 10 30 L 10 70 M 90 30 L 90 70" stroke="var(--color-accent)" strokeWidth="4" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [skillIndex, setSkillIndex] = useState(0);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % 4);
    }, 2500);

    return () => {
      clearInterval(skillInterval);
    };
  }, []);

  const specializations = [
    {
      name: "Power BI",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 inline-block mr-2 align-text-bottom"
        >
          <rect x="14" y="2" width="6" height="20" fill="#F2C811" />
          <rect x="8" y="8" width="6" height="14" fill="#E6AD10" />
          <rect x="2" y="14" width="6" height="8" fill="#F9E589" />
        </svg>
      ),
    },
    {
      name: "SQL",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 inline-block mr-2 align-text-bottom"
        >
          <path
            d="M12 2C6.48 2 2 4.01 2 6.5C2 8.99 6.48 11 12 11C17.52 11 22 8.99 22 6.5C22 4.01 17.52 2 12 2ZM12 13C6.48 13 2 10.99 2 8.5V11.5C2 13.99 6.48 16 12 16C17.52 16 22 13.99 22 11.5V8.5C22 10.99 17.52 13 12 13ZM12 18C6.48 18 2 15.99 2 13.5V16.5C2 18.99 6.48 21 12 21C17.52 21 22 18.99 22 16.5V13.5C22 15.99 17.52 18 12 18Z"
            fill="#00758F"
          />
        </svg>
      ),
    },
    {
      name: "Excel",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 inline-block mr-2 align-text-bottom"
        >
          <path d="M2 5.5L12 3V21L2 18.5V5.5Z" fill="#21A366" />
          <path d="M12 3L22 5.5V18.5L12 21V3Z" fill="#107C41" />
          <path
            d="M5.5 8.5L8 12L5.5 15.5H8L9.5 13L11 15.5H13.5L11 12L13.5 8.5H11L9.5 11L8 8.5H5.5Z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg
          viewBox="0 0 128 128"
          className="w-6 h-6 inline-block mr-2 align-text-bottom"
        >
          <path
            fill="#3776AB"
            d="M63.95 0C28.43 0 28.5 15.38 28.5 15.38l.05 15.82h35.8v5.18H21.57S0 35.1 0 64.9c0 29.8 18.73 28.4 18.73 28.4l15.93.06v-18.4s-.2-15.82 16.08-15.82h24.8s15.95 0 15.95-15.84V18.1S91.86 0 63.95 0zm-14.4 9.17c3.96 0 7.18 3.2 7.18 7.17s-3.22 7.2-7.18 7.2-7.17-3.23-7.17-7.2 3.2-7.17 7.17-7.17z"
          />
          <path
            fill="#FFD43B"
            d="M64.6 128c35.5 0 35.4-15.37 35.4-15.37l-.05-15.8H64.16v-5.2h42.78S128 92.9 128 63.1c0-29.8-18.72-28.42-18.72-28.42l-15.94-.05v18.4s.2 15.82-16.1 15.82H52.45s-15.96-.06-15.96 15.83V110s-.35 18 28.1 18zM79 118.83c-3.96 0-7.17-3.23-7.17-7.2 0-3.95 3.2-7.16 7.17-7.16s7.17 3.2 7.17 7.16-3.2 7.2-7.17 7.2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 md:pt-0 md:pb-0 flex flex-col items-center justify-start md:justify-center overflow-x-hidden">
      <DataAnalysisBackground />
      <motion.div
        style={isMobile ? undefined : { y, opacity }}
        className="z-10 px-6 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-0 md:mt-12 lg:mt-20"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-[var(--color-accent)] mb-2 md:mb-4 tracking-widest text-sm uppercase">
              Data Analyst
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6">
              Rachuri Arun
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-[var(--color-text)] font-medium leading-relaxed font-mono tracking-tight mb-4 md:mb-10 min-h-[2.5rem] flex items-center justify-center md:justify-start gap-1 sm:gap-3 w-full"
          >
            I specialize in
            <span className="inline-flex w-[120px] sm:w-[140px] text-left relative overflow-hidden h-10 ml-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={skillIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="absolute inset-0 flex items-center font-sans font-semibold text-[var(--color-accent)]"
                >
                  {specializations[skillIndex].icon}
                  {specializations[skillIndex].name}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* MOBILE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="md:hidden flex justify-center mt-12 mb-16 w-full"
          >
            <div className="relative group mx-auto">
              <div className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-40 blur-[40px] transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full z-10 transition-colors duration-500">
                <img 
                  src="/hero.png" 
                  alt="Rachuri Arun" 
                  className="w-full h-full object-cover rounded-full hero-image-custom-shadow border-4 border-[var(--color-bg)]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-row justify-center md:justify-start gap-4 w-full"
          >
            <a
              href="#projects"
              className="link--popup-text px-4 md:px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] text-sm md:text-base font-medium rounded-full hover:opacity-80 transition-opacity whitespace-nowrap text-center max-w-[150px] w-full"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Rachuri_Arun_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 border-2 border-[var(--color-surface-hover)] text-[var(--color-text)] text-sm md:text-base font-medium rounded-full hover:bg-[var(--color-surface)] transition-colors whitespace-nowrap text-center max-w-[150px] w-full"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6"
          >
          {/* Power BI */}
          <a
            href="#projects"
            className="flex items-center gap-3 bg-[var(--color-surface)]/80 backdrop-blur-sm border border-[var(--color-surface-hover)] hover:border-[var(--color-text-muted)] px-4 py-2 rounded-full cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <rect x="14" y="2" width="6" height="20" fill="#F2C811" />
              <rect x="8" y="8" width="6" height="14" fill="#E6AD10" />
              <rect x="2" y="14" width="6" height="8" fill="#F9E589" />
            </svg>
            <span className="text-sm text-[var(--color-text-muted)]">
              <span className="font-bold text-[var(--color-text)]">2</span>{" "}
              Power BI
            </span>
          </a>

          {/* Python */}
          <a
            href="#projects"
            className="flex items-center gap-3 bg-[var(--color-surface)]/80 backdrop-blur-sm border border-[var(--color-surface-hover)] hover:border-[var(--color-text-muted)] px-4 py-2 rounded-full cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 128 128" className="w-5 h-5">
              <path
                fill="#3776AB"
                d="M63.95 0C28.43 0 28.5 15.38 28.5 15.38l.05 15.82h35.8v5.18H21.57S0 35.1 0 64.9c0 29.8 18.73 28.4 18.73 28.4l15.93.06v-18.4s-.2-15.82 16.08-15.82h24.8s15.95 0 15.95-15.84V18.1S91.86 0 63.95 0zm-14.4 9.17c3.96 0 7.18 3.2 7.18 7.17s-3.22 7.2-7.18 7.2-7.17-3.23-7.17-7.2 3.2-7.17 7.17-7.17z"
              />
              <path
                fill="#FFD43B"
                d="M64.6 128c35.5 0 35.4-15.37 35.4-15.37l-.05-15.8H64.16v-5.2h42.78S128 92.9 128 63.1c0-29.8-18.72-28.42-18.72-28.42l-15.94-.05v18.4s.2 15.82-16.1 15.82H52.45s-15.96-.06-15.96 15.83V110s-.35 18 28.1 18zM79 118.83c-3.96 0-7.17-3.23-7.17-7.2 0-3.95 3.2-7.16 7.17-7.16s7.17 3.2 7.17 7.16-3.2 7.2-7.17 7.2z"
              />
            </svg>
            <span className="text-sm text-[var(--color-text-muted)]">
              <span className="font-bold text-[var(--color-text)]">1</span>{" "}
              Python
            </span>
          </a>

          {/* Excel */}
          <a
            href="#projects"
            className="flex items-center gap-3 bg-[var(--color-surface)]/80 backdrop-blur-sm border border-[var(--color-surface-hover)] hover:border-[var(--color-text-muted)] px-4 py-2 rounded-full cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M2 5.5L12 3V21L2 18.5V5.5Z" fill="#21A366" />
              <path d="M12 3L22 5.5V18.5L12 21V3Z" fill="#107C41" />
              <path
                d="M5.5 8.5L8 12L5.5 15.5H8L9.5 13L11 15.5H13.5L11 12L13.5 8.5H11L9.5 11L8 8.5H5.5Z"
                fill="#FFFFFF"
              />
            </svg>
            <span className="text-sm text-[var(--color-text-muted)]">
              <span className="font-bold text-[var(--color-text)]">1</span>{" "}
              Excel
            </span>
          </a>

          {/* MySQL */}
          <a
            href="#projects"
            className="flex items-center gap-3 bg-[var(--color-surface)]/80 backdrop-blur-sm border border-[var(--color-surface-hover)] hover:border-[var(--color-text-muted)] px-4 py-2 rounded-full cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M12 2C6.48 2 2 4.01 2 6.5C2 8.99 6.48 11 12 11C17.52 11 22 8.99 22 6.5C22 4.01 17.52 2 12 2ZM12 13C6.48 13 2 10.99 2 8.5V11.5C2 13.99 6.48 16 12 16C17.52 16 22 13.99 22 11.5V8.5C22 10.99 17.52 13 12 13ZM12 18C6.48 18 2 15.99 2 13.5V16.5C2 18.99 6.48 21 12 21C17.52 21 22 18.99 22 16.5V13.5C22 15.99 17.52 18 12 18Z"
                fill="#00758F"
              />
            </svg>
            <span className="text-sm text-[var(--color-text-muted)]">
              <span className="font-bold text-[var(--color-text)]">1</span>{" "}
              MySQL
            </span>
          </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="hidden md:flex md:w-1/2 justify-center mt-12 md:mt-0"
        >
          <div className="relative group">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-40 blur-[40px] transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full z-10 transition-colors duration-500">
              {/* Note: I'm using an placeholder name, please change the file name or path accordingly */}
              <img 
                src="/hero.png" 
                alt="Rachuri Arun" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-full hero-image-custom-shadow"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-10 animate-bounce"
      >
        <ArrowDown className="text-[var(--color-text-muted)] w-6 h-6" />
      </motion.div>
    </section>
  );
}
