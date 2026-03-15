import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiCplusplus } from 'react-icons/si';
import { TbBrandCSharp, TbBrandAdobePremier } from 'react-icons/tb';
import { DiPhotoshop } from 'react-icons/di';
import { MdLanguage } from 'react-icons/md';

const skillIcons: Record<string, any> = {
  "React": <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "HTML": <FaHtml5 className="text-[#E34F26]" />,
  "CSS": <FaCss3Alt className="text-[#1572B6]" />,
  "TailwindCSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Git": <FaGitAlt className="text-[#F05032]" />,
  "Figma": <FaFigma className="text-[#F24E1E]" />,
  "Adobe Photoshop": <DiPhotoshop className="text-[#31A8FF]" />,
  "Adobe Premiere": <TbBrandAdobePremier className="text-[#9999FF]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "C#": <TbBrandCSharp className="text-[#239120]" />,
  "Arabic (Native)": <MdLanguage className="text-zinc-400" />,
  "English (Fluent)": <MdLanguage className="text-zinc-400" />
};

const skills = [
  { category: "Web Development", items: ["React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS"] },
  { category: "Tools & Platforms", items: ["Git", "Figma", "Adobe Photoshop", "Adobe Premiere"] },
  { category: "Other Programming", items: ["C++", "C#"] },
  { category: "Languages", items: ["Arabic (Native)", "English (Fluent)"] }
];

const certs = [
  { name: "Meta Front-End Developer", year: "2024" },
  { name: "Google IT Automation", year: "2022" },
  { name: "Git Training – Egyptian Chinese University", year: "2021" },
  { name: "Web Development Training – Egyptian Chinese University", year: "2020" },
  { name: "Adobe Graphics Diploma – Russian Cultural Center", year: "2014" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Skills Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Skills
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-1" />
          </div>

          <div className="space-y-8">
            {skills.map((skill, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl hover:border-zinc-700 transition-colors">
                <h3 className="text-xl font-semibold text-slate-200 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 text-zinc-300 text-sm font-medium rounded-lg shadow-inner border border-zinc-700/50 hover:bg-zinc-700 hover:text-white transition-all cursor-default"
                    >
                      {skillIcons[item] && <span className="text-lg">{skillIcons[item]}</span>}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Certifications
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent flex-1" />
          </div>

          <div className="space-y-4">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-panel p-6 rounded-2xl flex items-center justify-between border border-zinc-800 hover:border-pink-500/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-pink-500 group-hover:bg-pink-500/10 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-zinc-400 mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
