'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import CyberText from '@/components/CyberText';

export default function ContactPage() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-3xl mb-4 text-amber-300" />,
      label: 'Email',
      value: 'rplasc.2025@gmail.com',
      href: 'mailto:rplasc.2025@gmail.com',
      description: 'Best for inquiries and collaborations.',
      color: 'hover:border-amber-400/40 hover:shadow-amber-500/20'
    },
    {
      icon: <FaLinkedin className="text-3xl mb-4 text-emerald-300" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com/in/raul-plascencia',
      description: 'Let’s connect professionally.',
      color: 'hover:border-emerald-400/40 hover:shadow-emerald-500/20'
    },
    {
      icon: <FaGithub className="text-3xl mb-4 text-rose-200" />,
      label: 'GitHub',
      value: 'Check out my Code',
      href: 'https://github.com/rplasc',
      description: 'Explore my repositories and contributions.',
      color: 'hover:border-rose-300/40 hover:shadow-rose-400/20'
    },
  ];

  return (
    <main className="relative min-h-screen w-full pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      
      <BackgroundBeams />

      <section className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <CyberText text='Get in' /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]">Touch</span>
          </h1>
          <p className="text-[color:var(--muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities as a Software Engineer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col items-center justify-center p-6 sm:p-8 bg-[color:var(--bg-soft)]/70 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 ${item.color} shadow-lg`}
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-sm text-[color:var(--muted)] group-hover:text-white transition-colors">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Large "Quick Action" Button */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <div className="p-1 rounded-full bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-rose-300 max-w-md mx-auto">
                <a 
                    href="mailto:rplasc.2025@gmail.com"
                    className="flex items-center justify-center gap-3 w-full bg-[color:var(--bg)] hover:bg-[color:var(--bg-soft)] text-white rounded-full py-4 px-8 transition-colors"
                >
                    <FaPaperPlane className="text-[color:var(--accent)]" />
                    <span className="font-semibold text-lg">Send me an Email directly</span>
                </a>
            </div>
        </motion.div>

      </section>
    </main>
  );
}
