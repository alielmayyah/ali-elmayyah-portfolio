import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';
import myimage from "../assets/myavatar.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 12 } }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Enhanced Animated Background Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 60, -40, 0], 
          y: [0, -60, 40, 0],
          scale: [1, 1.3, 0.8, 1],
          rotate: [0, 90, 180, 360]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] pointer-events-none" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -70, 30, 0], 
          y: [0, 70, -30, 0],
          scale: [1, 0.7, 1.4, 1],
          rotate: [360, 180, 90, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] pointer-events-none" 
      />

      {/* A slow-moving accent orb for extra depth */}
      <motion.div 
        animate={{ 
          x: [0, 100, -100, 0], 
          y: [0, 50, -50, 0],
          scale: [0.8, 1.2, 0.9, 0.8]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[96px] pointer-events-none" 
      />

      <div className="max-w-4xl text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Avatar floating effect */}
          <motion.div 
            variants={itemVariants} 
            className="relative mb-6 inline-block"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl block" />
            <img src={myimage} className='w-72 h-72 rounded-full mx-auto my-4 relative z-10 border-2 border-zinc-800 shadow-[0_0_40px_rgba(59,130,246,0.15)]' alt="" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-blue-400 font-medium mb-6 backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Headline wrap */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Ali Elmayyah</span>
            </h1>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl text-zinc-400 font-semibold mb-8">
            Front-End Developer
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Passionate about building interactive, scalable, and user-focused web applications.
            I specialize in React and modern web technologies, creating engaging digital experiences
            with clean design and efficient performance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="cursor-pointer px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, borderColor: "rgba(161, 161, 170, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="cursor-pointer px-8 py-3 rounded-full glass-panel text-white font-medium hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social Icons Cascade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
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
              custom={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 100 }}
              key={i}
              whileHover={{ y: -8, scale: 1.1, color: '#60a5fa' }}
              whileTap={{ scale: 0.9 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors duration-300 p-2 glass-panel rounded-full hover:bg-zinc-800 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
