import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import wonderlearnlogo from "../assets/logos/WonderLearn 2.png";

const experiences = [
  {
    role: "Front-End Developer",
    company: "WonderLearn",
    date: "2024 – Present",
    desc: [
      "Developed an interactive mobile learning application",
      "Built dynamic and responsive web interfaces",
      "Contributed to scalable educational platform features"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: <img src={wonderlearnlogo} alt="WonderLearn" className="w-8 h-8 object-contain" />
  },
  {
    role: "Graphics Designer",
    company: "WonderLearn",
    date: "2023 – 2024",
    desc: [
      "Designed graphics and visual assets for educational materials"
    ],
    color: "from-purple-500 to-pink-500",
    icon: <img src={wonderlearnlogo} alt="WonderLearn" className="w-8 h-8 object-contain" />
  },
  {
    role: "Freelance Photographer",
    company: "Self-Employed",
    date: "2017 – 2023",
    desc: [
      "Provided professional photography services for various clients"
    ],
    color: "from-amber-500 to-orange-500",
    icon: <Camera className="w-8 h-8 text-orange-400" />
  }
];


export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Experience
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent flex-1" />
          </div>

          <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[-5px] md:left-[-25px] top-2 h-4 w-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-zinc-950`} />

                <div className="md:ml-10 glass-panel p-6 sm:p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        {exp.icon}
                        <h3 className="text-2xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <h4 className="text-lg font-medium text-zinc-400 mt-1">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="inline-flex mt-3 sm:mt-0 text-sm font-semibold tracking-wider text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-800">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.desc.map((item, j) => (
                      <li key={j} className="flex items-start text-zinc-400">
                        <span className="text-blue-500 mr-3 mt-1.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
