import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, BarChart, Table, Code, Filter, Network, FileSpreadsheet
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Power BI": <BarChart className="w-5 h-5 text-[#F2C811]" />,
  "DAX": <Code className="w-4 h-4 text-[#0173C7]" />,
  "Power Query": <Filter className="w-4 h-4 text-[#50A942]" />,
  "Data Modeling": <Network className="w-4 h-4 text-[#E76D21]" />,
  "KPI Dashboards": <BarChart className="w-4 h-4 text-[#D31F2A]" />,
  
  "SQL": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="SQL" className="w-5 h-5" />,
  "Joins": <Table className="w-4 h-4 text-gray-500" />,
  "CTEs": <Code className="w-4 h-4 text-gray-500" />,
  "Window Functions": <Table className="w-4 h-4 text-gray-500" />,
  "Stored Procedures": <Database className="w-4 h-4 text-gray-500" />,
  "Query Optimization": <Database className="w-4 h-4 text-[#336791]" />,
  
  "Excel": <FileSpreadsheet className="w-5 h-5 text-[#217346]" />,
  "Formulas": <Code className="w-4 h-4 text-gray-500" />,
  "Power Pivot": <Table className="w-4 h-4 text-[#217346]" />,
  "Data Cleaning": <Filter className="w-4 h-4 text-gray-500" />,

  "Python": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-5 h-5" />,
  "NumPy": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="NumPy" className="w-5 h-5" />,
  "Pandas": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="w-5 h-5" />,
  "Matplotlib": <BarChart className="w-4 h-4 text-[#11557C]" />,
  "Seaborn": <BarChart className="w-4 h-4 text-[#4C72B0]" />,

  "Microsoft Fabric": <img src="https://davidalzamendi.com/wp-content/uploads/2023/05/Fabric_final_x256.png" alt="Microsoft Fabric" className="w-5 h-5 rounded-sm" />,
  "HTML": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="w-5 h-5" />,
  "CSS": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="w-5 h-5" />,
  "Canva": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-5 h-5" />,
  "Figma": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-5 h-5" />,
  "GitHub": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 dark:invert" />
};

const skills = [
  { category: "Business Intelligence", items: ["Power BI", "DAX", "Power Query", "Data Modeling", "KPI Dashboards"] },
  { category: "Query & Database", items: ["SQL", "Joins", "CTEs", "Window Functions", "Stored Procedures", "Query Optimization"] },
  { category: "Spreadsheet Analytics", items: ["Excel", "Formulas", "Power Pivot", "Power Query", "Data Cleaning"] },
  { category: "Programming & Python", items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"] },
  { category: "Other Tools", items: ["Microsoft Fabric", "HTML", "CSS", "Canva", "Figma", "GitHub"] }
];

export function Skills() {
  return (
    <section className="py-8 px-6 border-b border-[var(--color-surface-hover)]" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 font-serif italic text-center text-[var(--color-text)] wave-text">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
          <span>.</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skillSet, idx) => (
            <motion.div 
              key={skillSet.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative drop-shadow-xl w-full flex flex-col overflow-hidden rounded-xl bg-[var(--skill-card-border)] p-[2px]"
            >
              <div className="relative flex flex-col z-[1] w-full h-full opacity-90 rounded-xl bg-[var(--skill-card-bg)] p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-[var(--color-accent)]">{skillSet.category}</h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {skillSet.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-[13px] sm:text-sm text-[var(--color-text)] flex items-center gap-2 sm:gap-3">
                      {iconMap[item] ? (
                        <motion.div 
                          className="w-5 flex justify-center items-center shrink-0"
                          initial={{ opacity: 0, y: 5, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            delay: idx * 0.1 + itemIdx * 0.05 + 0.2
                          }}
                        >
                          {iconMap[item]}
                        </motion.div>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-surface-hover)] mx-1.5 shrink-0" />
                      )}
                      <span className="break-words leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute w-56 h-48 blur-[50px] -left-1/4 -top-1/4 pointer-events-none z-0" style={{ backgroundColor: "var(--skill-card-glow)" }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
