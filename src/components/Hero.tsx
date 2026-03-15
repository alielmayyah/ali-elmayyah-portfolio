import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';
import myimage from "../assets/myavatar.png"
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img src={myimage} className='w-72 h-72 rounded-full mx-auto my-4' alt="" />
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-blue-400 font-medium mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Ali Elmayyah</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl text-zinc-400 font-semibold mb-8">
            Front-End Developer
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Passionate about building interactive, scalable, and user-focused web applications.
            I specialize in React and modern web technologies, creating engaging digital experiences
            with clean design and efficient performance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-full glass-panel text-white font-medium hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center gap-6 mt-16"
        >
          {[
            { icon: <Github />, href: 'https://github.com/alielmayyah' },
            { icon: <Linkedin />, href: 'https://www.linkedin.com/in/alielmayyah/' },
            { icon: <Instagram />, href: 'https://www.instagram.com/alielmayyah/' },
            { icon: <Facebook />, href: 'https://www.facebook.com/ali.elmayyah.5/' },
            { icon: <Mail />, href: 'mailto:alielmayyah@gmail.com' },
          ].map((item, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -5, color: '#60a5fa' }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors p-2 glass-panel rounded-full hover:bg-zinc-800"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
