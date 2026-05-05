import { motion } from 'motion/react';

const certs = [
  {
    title: "Power BI Virtual Internship",
    org: "PwC Switzerland - Forage",
    date: "Mar 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg"
  },
  {
    title: "SQL Beginner to Advanced",
    org: "Codebasics",
    date: "Apr 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
  },
  {
    title: "Power BI Data Analytics 3.0",
    org: "Codebasics",
    date: "Feb 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
  },
  {
    title: "Excel: Mother of BI",
    org: "Codebasics",
    date: "Dec 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg"
  }
];

export function Experience() {
  return (
    <section className="py-12 px-6 border-y border-[var(--color-surface-hover)]" id="experience">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-montserrat font-bold text-[var(--color-text)] uppercase tracking-wider mb-12 border-b border-[var(--color-surface-hover)] pb-4">
            Education
          </h2>
          
          <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-[var(--color-surface-hover)]">
            <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            
            <p className="font-mono text-sm text-[var(--color-accent)] mb-2">Jun 2022 - Jul 2025</p>
            <h3 className="text-xl font-bold mb-1">Government City College, Hyderabad</h3>
            <p className="text-[var(--color-text-muted)] font-serif italic mb-4">B.Sc (Data Science)</p>
            
            <div className="inline-flex items-center justify-center px-3 py-1 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded font-mono text-sm">
              CGPA: <span className="text-[var(--color-text)] ml-2">8.34</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-montserrat font-bold text-[var(--color-text)] uppercase tracking-wider mb-12 border-b border-[var(--color-surface-hover)] pb-4">
            Certifications
          </h2>
          
          <div className="space-y-4">
            {certs.map((cert, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:-translate-y-1 transition-transform bg-[var(--color-bg)] rounded-lg border border-[var(--color-surface-hover)] hover:border-[var(--color-accent)] cursor-default shadow-sm group">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center p-1 border border-[var(--color-surface-hover)] shadow-sm group-hover:border-[var(--color-accent)] transition-colors">
                    <img src={cert.logo} alt={cert.org} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-text)] mb-1">{cert.title}</div>
                    <div className="text-sm text-[var(--color-text-muted)]">{cert.org}</div>
                  </div>
                </div>
                <div className="text-sm font-mono text-[var(--color-accent)] md:ml-4 ml-[4rem]">{cert.date}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
