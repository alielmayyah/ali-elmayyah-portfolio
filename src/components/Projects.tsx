import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaJenkins } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiCplusplus, SiArduino, SiFlask } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiPhotoshop } from 'react-icons/di';
import { BsCpu } from 'react-icons/bs';
import wondergameslogo from "../assets/logos/WonderGamesLogo.svg"
import wonderlearnlogo from "../assets/logos/WonderLearn 2.png"

import sanabellogo from "../assets/logos/logo.png"
import immalogo from "../assets/logos/imma logo2 psd@3x.png"
import shufflelogo from "../assets/logos/shufflelogo.png"
import gaminglogo from "../assets/logos/gaminglogo.png"
import hardwarelogo from "../assets/logos/hardwarelogo.png"

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

const projects = [
  {
    name: "WonderGames",
    desc: "An interactive gamified website featuring educational games and engaging learning experiences.",
    tech: ["React", "Node.js", "MongoDB", "Git"],
    color: "from-blue-500 to-cyan-500",
    logo: wondergameslogo,
  },
  {
    name: "WonderLearn Website",
    desc: "A dynamic, responsive educational website designed to deliver smooth user journeys, interactive content, and scalable features.",
    tech: ["React", "Node.js", "Git"],
    color: "from-purple-500 to-pink-500",
    logo: wonderlearnlogo,
  },
  {
    name: "Sanabel Al-Ihsan",
    desc: "A gamified platform designed to encourage students and younger users to perform good deeds through interactive challenges and reward systems.",
    tech: ["React", "MongoDB", "AWS", "Git"],
    color: "from-emerald-500 to-teal-500",
    logo: sanabellogo,
  },
  {
    name: "IMMA – AI Assistant",
    desc: "An AI-powered platform designed to enhance the efficiency and effectiveness of digital marketing.",
    tech: ["React", "Flask", "MongoDB", "AWS", "Docker", "LangChain", "Jenkins", "Git"],
    color: "from-blue-600 to-indigo-600",
    logo: immalogo,
  },
  {
    name: "IMMA UI / UX Case Study",
    desc: "Designed the UI and created a UX case study for the IMMA platform.",
    tech: ["Figma", "Adobe Photoshop"],
    color: "from-pink-500 to-rose-500",
    logo: immalogo,
  },
  {
    name: "Gaming Store",
    desc: "An online gaming website store inspired by Sony’s official PlayStation website.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-indigo-500 to-purple-500",
        logo: gaminglogo,
  },
  {
    name: "Shuffle Music",
    desc: "An online music streaming website.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-amber-500 to-orange-500",
        logo: shufflelogo,
  },
  {
    name: "Hardware Projects",
    desc: "Includes OS Scheduler (C#, C++), RFID Reader (Arduino), and Car Parking System (ATmega32, Sensors, Actuators).",
    tech: ["C++", "C#", "Arduino", "ATmega32"],
    color: "from-slate-500 to-zinc-500",
        logo: hardwarelogo,
  }
];

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
                className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col h-full group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
