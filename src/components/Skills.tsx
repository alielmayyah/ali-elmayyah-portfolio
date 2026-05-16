import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiVite,
  SiExpress,
  SiVercel,
  SiRender,
  SiPostman,
  SiMongoose,
  SiSequelize,
  SiSwagger,
  SiCloudinary,
  SiIonic,
  SiCapacitor,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAdobePremier } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import {
  Braces,
  Camera,
  Database,
  FileSpreadsheet,
  KeyRound,
  Languages,
  Palette,
  Workflow,
} from "lucide-react";

const skillIcons: Record<string, ReactNode> = {
  // Frontend
  "React.js": <FaReact className="text-[#61DAFB]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "JavaScript (ES6+)": <SiJavascript className="text-[#F7DF1E]" />,
  HTML5: <FaHtml5 className="text-[#E34F26]" />,
  CSS3: <FaCss3Alt className="text-[#1572B6]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  Bootstrap: <FaBootstrap className="text-[#7952B3]" />,
  "Framer Motion": <Workflow className="text-[#F472B6]" />,
  Vite: <SiVite className="text-[#646CFF]" />,

  // Backend
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-white" />,
  "REST APIs": <Braces className="text-blue-400" />,
  "JWT Authentication": <KeyRound className="text-amber-400" />,
  Swagger: <SiSwagger className="text-[#85EA2D]" />,

  // Databases
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Mongoose: <SiMongoose className="text-[#800000]" />,
  "MySQL / MariaDB": <SiMysql className="text-[#4479A1]" />,
  Sequelize: <SiSequelize className="text-[#52B0E7]" />,
  SQL: <Database className="text-cyan-300" />,

  // Mobile
  Ionic: <SiIonic className="text-[#3880FF]" />,
  "Capacitor (iOS & Android)": <SiCapacitor className="text-zinc-300" />,

  // Cloud / DevOps
  Git: <FaGitAlt className="text-[#F05032]" />,
  GitHub: <FaGithub className="text-zinc-200" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  AWS: <FaAws className="text-[#FF9900]" />,
  Vercel: <SiVercel className="text-white" />,
  Render: <SiRender className="text-[#46E3B7]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Cloudinary: <SiCloudinary className="text-[#3448C5]" />,

  // Design Tools
  Figma: <FaFigma className="text-[#F24E1E]" />,
  "Adobe Photoshop": <DiPhotoshop className="text-[#31A8FF]" />,
  "Adobe Premiere Pro": <TbBrandAdobePremier className="text-[#9999FF]" />,
  "Design Systems": <Palette className="text-pink-400" />,

  // Programming Languages
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "C#": <TbBrandCSharp className="text-[#239120]" />,
  Python: <FaPython className="text-[#3776AB]" />,

  // Other
  "Microsoft Office Suite": <FileSpreadsheet className="text-emerald-400" />,
  Photography: <Camera className="text-orange-400" />,
  "Arabic (Native)": <Languages className="text-zinc-400" />,
  "English (Fluent)": <Languages className="text-zinc-400" />,
};

const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Swagger",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Mongoose", "MySQL", "Sequelize", "SQL"],
  },
  { category: "Mobile", items: ["Ionic", "Capacitor (iOS & Android)"] },
  {
    category: "Cloud / DevOps",
    items: ["Git", "GitHub", "Vercel", "Render", "Postman", "Cloudinary"],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Adobe Photoshop", "Adobe Premiere Pro", "Design Systems"],
  },
  { category: "Programming Languages", items: ["C++", "C#", "Python"] },
  {
    category: "Other",
    items: [
      "Microsoft Office Suite",
      "Photography",
      "Arabic (Native)",
      "English (Fluent)",
    ],
  },
];

const certs = [
  { name: "Meta Back-End Developer", year: "2026" },
  { name: "Meta Front-End Developer", year: "2024" },
  { name: "Google IT Automation", year: "2022" },
  { name: "Git Training - Egyptian Chinese University", year: "2021" },
  {
    name: "Web Development Training - Egyptian Chinese University",
    year: "2020",
  },
  { name: "Adobe Graphics Diploma - Russian Cultural Center", year: "2014" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 sm:px-12 lg:px-24 bg-zinc-950/50"
    >
      <div className="grid gap-16 mx-auto max-w-7xl lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-transparent md:text-5xl bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500">
              Skills
            </h2>
            <div className="flex-bg-linear-to-rnt-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="space-y-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-6 transition-colors glass-panel rounded-2xl hover:border-zinc-700"
              >
                <h3 className="mb-4 text-xl font-semibold text-slate-200">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border rounded-lg shadow-inner cursor-default bg-zinc-800/80 text-zinc-300 border-zinc-700/50 hover:bg-zinc-700 hover:text-white"
                    >
                      {skillIcons[item] && (
                        <span className="text-lg">{skillIcons[item]}</span>
                      )}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-transparent md:text-5xl bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              Certifications
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-pink-500/50 to-transparent" />
          </div>

          <div className="space-y-4">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center justify-between p-6 transition-all border glass-panel rounded-2xl border-zinc-800 hover:border-pink-500/30 group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 text-pink-500 transition-colors rounded-full bg-zinc-800 group-hover:bg-pink-500/10">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold transition-colors text-slate-200 group-hover:text-white">
                      {cert.name}
                    </h4>
                    <p className="mt-1 text-sm text-zinc-400">{cert.year}</p>
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
