'use client';

import { FaLaptopCode, FaFolderOpen, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const glanceItems = [
  {
    icon: <FaLaptopCode size={28} />,
    title: 'Tech Stack',
    description: 'React Native, Flask, AWS, PostgreSQL',
  },
  {
    icon: <FaFolderOpen size={28} />,
    title: 'Projects',
    description: 'Sync app, image editor, AI Discord bot',
  },
  {
    icon: <FaRocket size={28} />,
    title: 'Goals',
    description: 'Join a forward-thinking engineering team',
  },
];

export default function GlanceGrid() {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {glanceItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-[1.02] transition-all text-white flex flex-col items-center text-center"
          >
            <div className="mb-4 text-blue-300">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
