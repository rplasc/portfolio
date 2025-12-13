'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { BackgroundBeams } from '@/components/BackgroundBeams';

export default function ContactPage() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-3xl mb-4 text-blue-400" />,
      label: 'Email',
      value: 'rplasc.2025@gmail.com',
      href: 'mailto:rplasc.2025@gmail.com',
      description: 'Best for inquiries and collaborations.',
      color: 'hover:border-blue-500/50 hover:shadow-blue-500/20'
    },
    {
      icon: <FaLinkedin className="text-3xl mb-4 text-blue-600" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com/in/raul-plascencia',
      description: 'Let’s connect professionally.',
      color: 'hover:border-blue-700/50 hover:shadow-blue-700/20'
    },
    {
      icon: <FaGithub className="text-3xl mb-4 text-gray-200" />,
      label: 'GitHub',
      value: 'Check out my Code',
      href: 'https://github.com/rplasc',
      description: 'Explore my repositories and contributions.',
      color: 'hover:border-gray-500/50 hover:shadow-gray-500/20'
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-white pt-32 pb-20 px-6 overflow-hidden">
      
      <BackgroundBeams />

      <section className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities as a Software Engineer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
              className={`group flex flex-col items-center justify-center p-8 bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 ${item.color} shadow-lg`}
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors">
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
            <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 max-w-md mx-auto">
                <a 
                    href="mailto:rplasc.2025@gmail.com"
                    className="flex items-center justify-center gap-3 w-full bg-gray-950 hover:bg-gray-900 text-white rounded-full py-4 px-8 transition-colors"
                >
                    <FaPaperPlane className="text-blue-400" />
                    <span className="font-semibold text-lg">Send me an Email directly</span>
                </a>
            </div>
        </motion.div>

      </section>
    </main>
  );
}