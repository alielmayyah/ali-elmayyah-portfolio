import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaJenkins,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiCplusplus,
  SiArduino,
  SiFlask,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiVercel,
  SiRender,
  SiLangchain,
  SiCloudinary,
  SiSwagger,
  SiIonic,
  SiCapacitor,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import { BsCpu } from "react-icons/bs";
import { Database, KeyRound, Smartphone, Workflow, Wrench } from "lucide-react";
import { projects } from "../data/projects";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const techIcons: Record<string, any> = {
  React: <FaReact className="text-[#61DAFB]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-white" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  Git: <FaGitAlt className="text-[#F05032]" />,
  AWS: <FaAws className="text-[#FF9900]" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  Flask: <SiFlask className="text-white" />,
  LangChain: <SiLangchain className="text-[#1C3C3C]" />,
  Jenkins: <FaJenkins className="text-[#D33833]" />,
  Figma: <FaFigma className="text-[#F24E1E]" />,
  "Adobe Photoshop": <DiPhotoshop className="text-[#31A8FF]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Framer Motion": <Workflow className="text-[#F472B6]" />,
  Cloudinary: <SiCloudinary className="text-[#3448C5]" />,
  JWT: <KeyRound className="text-amber-400" />,
  Swagger: <SiSwagger className="text-[#85EA2D]" />,
  Vercel: <SiVercel className="text-white" />,
  Render: <SiRender className="text-[#46E3B7]" />,
  Ionic: <SiIonic className="text-[#3880FF]" />,
  Capacitor: <SiCapacitor className="text-zinc-300" />,
  HTML: <FaHtml5 className="text-[#E34F26]" />,
  CSS: <FaCss3Alt className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "C#": <TbBrandCSharp className="text-[#239120]" />,
  Arduino: <SiArduino className="text-[#00979D]" />,
  ATmega32: <BsCpu className="text-zinc-400" />,
  Sensors: <Database className="text-cyan-300" />,
  Actuators: <Wrench className="text-orange-300" />,
  Smartphone: <Smartphone className="text-zinc-300" />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-transparent md:text-5xl bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Projects
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/50 to-transparent" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                  <img
                    src={project.logo}
                    alt=""
                    className="w-auto h-32 mx-auto my-3"
                  />
                  {/* Glow Effect */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${project.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-linear-to-t from-zinc-950/80 to-transparent group-hover:opacity-100" />

                  <h3 className="z-10 mb-4 text-2xl font-bold transition-colors text-slate-200 group-hover:text-blue-400">
                    {project.name}
                  </h3>

                  <p className="z-10 mb-8 leading-relaxed grow text-zinc-400">
                    {project.desc}
                  </p>

                  <div className="z-10 flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-zinc-300 bg-zinc-800/80 rounded-full border border-zinc-700/50 hover:bg-zinc-700 transition-colors"
                      >
                        {techIcons[t] && (
                          <span className="text-sm">{techIcons[t]}</span>
                        )}
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
