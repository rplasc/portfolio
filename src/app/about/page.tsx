'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import timeline from '@/data/timeline';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import { FaGraduationCap, FaHeart, FaMusic, FaFileDownload } from 'react-icons/fa';

export default function AboutPage() {
  const sections = [
    {
      title: 'Education',
      content: 'B.S. in Computer Science & Engineering — UC Merced (Graduating August 2025)',
      icon: <FaGraduationCap className="text-blue-300" size={28} />,
      border: "hover:border-blue-500/50"
    },
    {
      title: 'Core Values',
      content: 'I value open-mindedness, clear communication, and attention to detail — they’re at the core of how I build and collaborate.',
      icon: <FaHeart className="text-pink-300" size={28} />,
      border: "hover:border-pink-500/50"
    },
    {
      title: 'Fun Facts',
      content: 'I originally majored in Film and love playing my electric guitar. I enjoy listening to albums and can nerd out over music at any given time.',
      icon: <FaMusic className="text-purple-300" size={28} />,
      border: "hover:border-purple-500/50"
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-white overflow-hidden pt-32 pb-20 px-6">
      
      <BackgroundBeams />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        <section className="text-center mb-24">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8 group"
          >
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
            
            <Image
              src="/profile.jpg"
              alt="Raul Plascencia"
              width={200}
              height={200}
              className="relative z-10 rounded-full border-2 border-white/20 shadow-2xl object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I’m a Computer Science & Engineering student at UC Merced, passionate about building clean, scalable full-stack solutions. I thrive at the intersection of usability and performance — whether it's backend API design, mobile UX, or AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              <FaFileDownload /> Download Resume
            </a>
          </motion.div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Journey
          </motion.h2>

          <div className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-12 pb-4">
            <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50" />

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 md:-left-3 top-1 w-6 h-6 rounded-full bg-gray-900 border border-blue-500/50 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                </div>
                
                {/* Content */}
                <div className="bg-white/5 border border-white/5 p-5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-blue-300 font-mono mt-1 sm:mt-0">{item.date}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- INFO GRID SECTION --- */}
        <section>
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            More About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 ${section.border} group`}
              >
                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{section.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}