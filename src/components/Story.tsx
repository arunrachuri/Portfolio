import { motion } from 'motion/react';

export function Story() {
  return (
    <section className="py-12 px-6 bg-[var(--color-surface)] relative" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-glow-panel p-8 md:p-12 rounded-3xl shadow-sm"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 font-serif italic text-center text-[var(--color-text)] wave-text">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>e</span>
            <span>.</span>
          </h2>
          
          <div className="flex flex-col gap-10 mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <div className="relative mt-2">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl transform scale-110 -z-10"></div>
                  <img 
                    src="/about me.png" 
                    alt="About Me" 
                    className="w-full max-w-[280px] md:max-w-[320px] aspect-square object-cover rounded-2xl border-4 transition-all duration-300 story-image-custom-shadow"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-6 text-[#968361] dark:text-gray-400 text-base md:text-lg leading-relaxed text-left">
                <p>
                  I enjoy working with data to uncover insights and solve real-world problems. I have hands-on experience with Power BI, SQL, Excel, and Python, along with working knowledge of Microsoft Fabric. I also have basic skills in HTML, CSS, and JavaScript, which help me present data in a clear and effective way.
                </p>
                <p>
                  I completed my B.Sc in Data Science from Government City College, Hyderabad, in 2025, where I built a strong foundation in data analysis, statistics, and visualization.
                </p>
              </div>
            </div>

            <div className="w-full space-y-6 text-[#968361] dark:text-gray-400 text-base md:text-lg leading-relaxed text-left">
              <p>
                Through my projects, I’ve worked on datasets across domains like sales, banking, and hospitality. I’ve developed interactive dashboards, performed data analysis, and created reports to identify trends and support decision-making.
              </p>
              <p>
                I also completed a Power BI internship simulation with PwC, where I worked on HR analytics dashboards.
              </p>
              <p>
                As a fresher, I’m looking for opportunities in data analytics and business intelligence to apply my skills and grow. <span className="font-bold text-[var(--color-text)]">You can explore my work in this portfolio.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
