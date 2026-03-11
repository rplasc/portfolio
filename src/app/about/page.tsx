'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import timeline from '@/data/timeline';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import CyberText from '@/components/CyberText';
import { FaGraduationCap, FaHeart, FaMusic, FaFileDownload } from 'react-icons/fa';

export default function AboutPage() {
  const sections = [
    {
      title: 'Education',
      content: 'B.S. in Computer Science & Engineering — UC Merced',
      icon: <FaGraduationCap className="text-amber-300" size={28} />,
      border: "hover:border-amber-400/40"
    },
    {
      title: 'Core Values',
      content: 'I value open-mindedness, clear communication, and attention to detail — they’re at the core of how I build and collaborate.',
      icon: <FaHeart className="text-rose-300" size={28} />,
      border: "hover:border-rose-400/40"
    },
    {
      title: 'Fun Facts',
      content: 'I originally majored in Film and love playing my electric guitar. I enjoy listening to albums and can nerd out over music at any given time.',
      icon: <FaMusic className="text-emerald-300" size={28} />,
      border: "hover:border-emerald-400/40"
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      
      <BackgroundBeams />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        <section className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8 group"
          >
            <div className="absolute inset-0 bg-[color:var(--accent)]/25 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px]">
              <Image
                src="/profile.jpg"
                alt="Raul"
                fill
                className="rounded-full object-cover border border-white/10 shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CyberText text='About' /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]">Me</span>
          </motion.h1>

          <motion.p
            className="text-[color:var(--muted)] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I’m a Computer Science & Engineering graduate who likes building pragmatic products that stay fast as they scale. I enjoy the edge where backend clarity meets front-end polish, and I’m happiest when the work feels sturdy and human.
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-[color:var(--accent)] text-[#1b1f2a] font-semibold rounded-full transition-all shadow-[0_12px_30px_rgba(244,176,122,0.25)] hover:translate-y-[-1px]"
            >
              <FaFileDownload /> Download Resume
            </a>
          </motion.div>
        </section>

        {/* --- TIMELINE SECTION --- */}
        <section className="mb-24">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Journey
          </motion.h2>

          {/* Mobile condensed timeline */}
          <div className="sm:hidden space-y-4">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="relative pl-4 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[color:var(--accent)]" />
                <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  {item.date}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-[color:var(--accent)]">
                  {item.company}
                </p>
                <p className="text-sm text-[color:var(--muted)] mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop timeline */}
          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-4 hidden sm:block">
            <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--accent-2)] to-transparent opacity-50" />

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
                <div className="absolute -left-3 md:-left-3 top-1 w-6 h-6 rounded-full bg-[color:var(--bg)] border border-white/20 flex items-center justify-center z-10 shadow-[0_0_14px_rgba(125,182,255,0.45)]">
                  <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full" />
                </div>
                
                {/* Content */}
                <div className="bg-[color:var(--bg-soft)]/70 border border-white/10 p-5 rounded-xl hover:bg-[color:var(--bg-soft)] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {item.title} 
                      {item.company && <span className="text-[color:var(--accent)] font-normal"> @ {item.company}</span>}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)] bg-white/5 px-2 py-1 rounded-md whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-[color:var(--muted)] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- INFO GRID SECTION --- */}
        <section>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center"
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
                className={`p-6 rounded-2xl bg-[color:var(--bg-soft)]/70 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 ${section.border} group`}
              >
                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{section.title}</h3>
                <p className="text-[color:var(--muted)] leading-relaxed text-sm">
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
