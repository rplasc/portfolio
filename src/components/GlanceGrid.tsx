'use client';

import { FaLaptopCode, FaFolderOpen, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const glanceItems = [
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Tech Stack',
    description: 'React, Flask, AWS, PostgreSQL',
    color: 'text-amber-300',
    shadow: 'group-hover:shadow-amber-500/40',
  },
  {
    icon: <FaFolderOpen size={24} />,
    title: 'Projects',
    description: 'Sync app, image editor, AI Discord bot',
    color: 'text-emerald-300',
    shadow: 'group-hover:shadow-emerald-500/40',
  },
  {
    icon: <FaRocket size={24} />,
    title: 'Goals',
    description: 'Create forward-thinking user experiences',
    color: 'text-rose-300',
    shadow: 'group-hover:shadow-rose-500/40',
  },
];

export default function GlanceGrid() {
  return (
    <section className="py-10 sm:py-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-4">
        {glanceItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-2xl bg-[color:var(--bg-soft)]/70 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--bg-soft)] hover:border-white/20"
          >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent pointer-events-none`} />

            <div className="flex flex-col items-center text-center">
              {/* Icon Container with Glow */}
              <div className={`mb-4 p-4 rounded-full bg-white/5 border border-white/10 ${item.color} transition-all duration-300 group-hover:scale-110 shadow-lg ${item.shadow}`}>
                {item.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              
              <p className="text-sm text-[color:var(--muted)] leading-relaxed group-hover:text-white/80 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
