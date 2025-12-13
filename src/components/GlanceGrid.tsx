'use client';

import { FaLaptopCode, FaFolderOpen, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const glanceItems = [
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Tech Stack',
    description: 'React, Flask, AWS, PostgreSQL',
    color: 'text-blue-400',
    shadow: 'group-hover:shadow-blue-500/50',
  },
  {
    icon: <FaFolderOpen size={24} />,
    title: 'Projects',
    description: 'Sync app, image editor, AI Discord bot',
    color: 'text-purple-400',
    shadow: 'group-hover:shadow-purple-500/50',
  },
  {
    icon: <FaRocket size={24} />,
    title: 'Goals',
    description: 'Create forward-thinking user experiences',
    color: 'text-pink-400',
    shadow: 'group-hover:shadow-pink-500/50',
  },
];

export default function GlanceGrid() {
  return (
    <section className="py-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {glanceItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-2xl bg-gray-900/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800/60 hover:border-white/20"
          >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent pointer-events-none`} />

            <div className="flex flex-col items-center text-center">
              {/* Icon Container with Glow */}
              <div className={`mb-4 p-4 rounded-full bg-white/5 border border-white/5 ${item.color} transition-all duration-300 group-hover:scale-110 shadow-lg ${item.shadow}`}>
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}