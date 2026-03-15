import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-zinc-950/80 mt-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:alielmayyah@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors group">
                  <div className="p-3 glass-panel rounded-full group-hover:bg-blue-500/10 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">alielmayyah@gmail.com</span>
                </a>
                
                <a href="tel:+201123270680" className="flex items-center gap-4 text-zinc-300 hover:text-green-400 transition-colors group">
                  <div className="p-3 glass-panel rounded-full group-hover:bg-green-500/10 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">+20 1123270680</span>
                </a>

                <div className="flex items-center gap-4 text-zinc-300 group">
                  <div className="p-3 glass-panel rounded-full group-hover:bg-red-500/10 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">Cairo, Egypt</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:items-end md:justify-end gap-6 pb-2">
              <h3 className="text-2xl font-bold text-slate-200">Connect with me</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={24} />, href: 'https://github.com/alielmayyah', color: 'hover:text-white', bg: 'hover:bg-zinc-800' },
                  { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/alielmayyah/', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
                  { icon: <Instagram size={24} />, href: 'https://www.instagram.com/alielmayyah/', color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10' },
                  { icon: <Facebook size={24} />, href: 'https://www.facebook.com/ali.elmayyah.5/', color: 'hover:text-blue-600', bg: 'hover:bg-blue-600/10' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-panel rounded-full text-zinc-400 transition-all ${social.color} ${social.bg}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-zinc-800 text-center flex flex-col items-center">
            <p className="text-zinc-500 text-sm">
              Designed & Built by <span className="text-zinc-300 font-semibold mt-1">Ali Elmayyah</span>
            </p>
            <p className="text-zinc-600 text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
