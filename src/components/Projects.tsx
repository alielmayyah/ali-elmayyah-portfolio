import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaJenkins } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiCplusplus, SiArduino, SiFlask } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiPhotoshop } from 'react-icons/di';
import { BsCpu } from 'react-icons/bs';
import { projects } from '../data/projects';

const techIcons: Record<string, any> = {
  "React": <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "Git": <FaGitAlt className="text-[#F05032]" />,
  "AWS": <FaAws className="text-[#FF9900]" />,
  "Docker": <FaDocker className="text-[#2496ED]" />,
  "Flask": <SiFlask className="text-white" />,
  "LangChain": <BsCpu className="text-blue-400" />,
  "Jenkins": <FaJenkins className="text-[#D33833]" />,
  "Figma": <FaFigma className="text-[#F24E1E]" />,
  "Adobe Photoshop": <DiPhotoshop className="text-[#31A8FF]" />,
  "HTML": <FaHtml5 className="text-[#E34F26]" />,
  "CSS": <FaCss3Alt className="text-[#1572B6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "C#": <TbBrandCSharp className="text-[#239120]" />,
  "Arduino": <SiArduino className="text-[#00979D]" />,
  "ATmega32": <BsCpu className="text-zinc-400" />
};

// local static array replaced by import from ../data/projects
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-1" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link 
                  to={`/project/${project.id}`}
                  className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col h-full group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 cursor-pointer"
                >
                  <img src={project.logo} alt="" className='h-32 w-auto mx-auto my-3' />
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />

                  <h3 className="text-2xl font-bold text-slate-200 mb-4 z-10 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-zinc-400 flex-grow mb-8 z-10 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 z-10 mt-auto">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-zinc-300 bg-zinc-800/80 rounded-full border border-zinc-700/50 hover:bg-zinc-700 transition-colors"
                      >
                        {techIcons[t] && <span className="text-sm">{techIcons[t]}</span>}
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
