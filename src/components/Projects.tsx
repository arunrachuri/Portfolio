import { useState } from 'react';
import { motion } from "motion/react";
import { ExternalLink, Github, BarChart3, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    title: "Business 360",
    subtitle: "Brick & Mortar and E-commerce",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Multifunctional Power BI dashboard analyzing global sales trends. Combined multiple sources (Excel/CSV/SQL). Used DAX Studio to optimize report performance by 5%.",
    tools: ["Power BI", "SQL", "Excel", "DAX Studio"],
    kpis: ["10% Projected Revenue Growth", "20% Cost Reduction"],
    embedUrl: "", // Placeholder for live dashboard iframe
    github: "https://github.com/arunrachuri/Business-Insights-360-Project",
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNTc5YTUzNGItN2E5OS00M2FiLWI4OTAtNzE2MjZlOWFkOTAzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    image: "/360 thumb.png",
  },
  {
    title: "Mitron Bank Credit Card Strategy",
    subtitle: "Banking Domain",
    duration: "Mar 2025",
    description:
      "4 interactive Power BI dashboards covering demographics, income, and payment insights for 4,000 customers. Optimized targeting accuracy for credit offerings.",
    tools: ["Power BI", "Excel"],
    kpis: ["20% Improved Targeting", "Created four Power BI analytical reports"],
    embedUrl: "",
    github: "https://github.com/arunrachuri/Mitron-Bank---Credit-Card-Launch-Insights",
    demo: "https://app.powerbi.com/view?r=eyJrIjoiZDZjMWQwNDItM2UxOS00MTc0LWJkMmEtMmVkMWRlMDBkMWUzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    image: "/mitron bank thumb.png",
  },
  {
    title: "AtliQ Grands Data Analysis",
    subtitle: "Hospitality Domain",
    duration: "2024",
    description:
      "Python-based EDA on hotel booking data. Handled missing values and anomalies to improve occupancy and revenue metric accuracy.",
    tools: ["Python", "Pandas", "Matplotlib"],
    kpis: ["15% Better Decisions", "20% Increased Accuracy"],
    embedUrl: "",
    github: "https://github.com/arunrachuri/AtliQ-Hotels-Data-Analysis-Project-Using-Python",
    image: "/hospitility thumb.png",
  },
  {
    title: "Ad-Hoc Analysis for Atliq Hardware",
    subtitle: "MySQL & Presentation",
    duration: "Mar 2025 - Apr 2025",
    description:
      "Extracted and cleaned year-over-year growth data using MySQL. Delivered executive-ready presentations via Canva and Excel.",
    tools: ["MySQL", "Excel", "Canva"],
    kpis: ["Ad-hoc SQL", "Executive Reporting"],
    embedUrl: "",
    github: "https://github.com/arunrachuri/Ad-hoc-insights",
    image: "/ad hoc thumb (1).webp",
  },
  {
    title: "P&L Report - FMCG",
    subtitle: "Financial Analysis",
    duration: "Dec 2024",
    description:
      "Created a 4-year P&L report for AtliQ Hardware using Pivot Tables and DAX in Excel to reveal revenue trends. Automated data cleaning using Power Query.",
    tools: ["Excel", "Power Query", "Power Pivot"],
    kpis: ["4 Hours Saved", "25% More Flexibility"],
    embedUrl: "",
    github: "https://github.com/arunrachuri/Excel-Sales-Analytics",
    image: "/excel thumb.png",
  },
];

export function Projects() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-12 px-6 bg-[var(--color-surface)] relative" id="projects">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="projects-title-container">
            <h2 className="projects-title">
              Projects
            </h2>
            <div className="projects-ghost">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 px-2 z-20 relative">
           {projects.map((project, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className={`relative w-full aspect-[4/3] md:aspect-[16/10] group cursor-pointer ${activeCard === idx ? 'z-50' : 'z-0 hover:z-50'}`}
               onClick={() => setActiveCard(activeCard === idx ? null : idx)}
             >
               {/* Front container */}
               <div className={`absolute inset-0 transition-opacity duration-300 delay-200 rounded-lg overflow-hidden shadow-[0_0_10px_1px_#0a0a0a] bg-[#141414] ${activeCard === idx ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                 {project.image ? (
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                 ) : (
                   <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                     <ImageIcon className="w-8 h-8 text-gray-600 mb-2" />
                     <h3 className="text-white font-bold text-sm">{project.title}</h3>
                   </div>
                 )}
                 {/* Optional overlay for title on front */}
                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-16">
                    <h3 className="text-white font-bold text-sm line-clamp-1">{project.title}</h3>
                 </div>
               </div>
 
               {/* Back container (expanded) */}
               <div className={`absolute top-0 left-0 w-full transition-all duration-300 delay-100 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_5px_#0a0a0a] rounded-lg overflow-hidden bg-white dark:bg-black z-50 ${activeCard === idx ? 'opacity-100 pointer-events-auto scale-[1.05] sm:scale-[1.25] md:-translate-y-[15%] sm:-translate-y-[10%]' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-[1.05] sm:group-hover:scale-[1.25] md:group-hover:-translate-y-[15%] sm:group-hover:-translate-y-[10%]'}`}>
                 <div className="w-full aspect-video relative">
                   {project.image ? (
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                       <ImageIcon className="w-10 h-10 text-gray-400 dark:text-gray-700" />
                     </div>
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/50 to-transparent opacity-100 mt-auto h-2/3"></div>
                   
                   <div className="absolute bottom-3 left-4 right-4">
                     <h3 className="text-black dark:text-white font-bold text-sm md:text-base line-clamp-1">{project.title}</h3>
                   </div>
                 </div>
                 
                 <div className="p-4 pt-2 flex flex-col gap-3">
                   <div className="flex gap-2 items-center text-[10px] md:text-[11px]">
                     <span className="font-bold text-[#e50914]">{project.duration || project.kpis[0]}</span>
                     <span className="text-gray-600 dark:text-gray-400 font-bold border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded uppercase tracking-wider">{project.subtitle}</span>
                   </div>
 
                   <p className="text-gray-700 dark:text-gray-300 text-[10px] md:text-xs leading-relaxed line-clamp-3">
                     {project.description}
                   </p>
 
                   <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                     {project.tools.slice(0, 4).map((tool, i) => (
                       <span key={i} className="text-[9px] md:text-[10px] font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1.5 whitespace-nowrap">
                         <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"></span> {tool}
                       </span>
                     ))}
                   </div>
 
                   <div className="flex gap-2 mt-2">
                     {project.demo && (
                       <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 bg-black text-white hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black font-bold text-xs py-2 rounded flex justify-center items-center gap-1.5 transition-colors">
                         <BarChart3 className="w-3.5 h-3.5" /> Live Dashboard
                       </a>
                     )}
                     {project.github && (
                       <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 border-2 border-black/30 text-black hover:bg-black hover:border-black hover:text-white dark:border-[rgba(255,255,255,0.5)] dark:hover:bg-white dark:hover:border-white dark:text-white dark:hover:text-black font-bold text-xs py-2 rounded flex justify-center items-center gap-1.5 transition-colors group/btn">
                         <Github className="w-3.5 h-3.5" /> Repo
                       </a>
                     )}
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
