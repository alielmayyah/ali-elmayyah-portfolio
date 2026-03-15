import { motion } from 'framer-motion';
import eculogo from "../assets/eculogo.png"
export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-200">Bio</h3>
              <p className="text-zinc-400 leading-relaxed">
                I’m Ali Elmayyah, a Front-End Developer passionate about building interactive, scalable, and user-focused web applications. I specialize in React and modern web technologies, creating engaging digital experiences with clean design and efficient performance.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                With experience developing gamified educational platforms and dynamic web applications, I enjoy transforming complex ideas into intuitive products that deliver meaningful user experiences.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My background in graphics design and photography also allows me to approach digital products with both technical precision and strong visual creativity.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-200">Education</h3>
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full group-hover:bg-blue-500/20 transition-colors" />
                <img src={eculogo} className='w-auto h-16 mx-start my-4' alt="" />
                <h4 className="text-xl font-bold text-white mb-2">Egyptian Chinese University</h4>
                <p className="text-blue-400 font-medium mb-1">Bachelor of Engineering – Software Engineering</p>
                <p className="text-sm text-zinc-500 mb-4">September 2019 – June 2024</p>
                
                <div className="space-y-2 mt-4 pt-4 border-t border-zinc-800">
                  <p className="text-zinc-300">
                    <span className="font-semibold text-zinc-400">GPA:</span> 3.09 / 4
                  </p>
                  <p className="text-zinc-300">
                    <span className="font-semibold text-zinc-400">Graduation Project:</span> IMMA (Intelligent Marketing Management Assistant)
                  </p>
                  <p className="text-zinc-300">
                    <span className="font-semibold text-zinc-400">Grade:</span> Excellent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
