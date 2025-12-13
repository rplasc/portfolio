import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  onClick: () => void;
};

export default function ProjectCard({ title, description, tech, github, demo, onClick } : Props) {
  return (
    <motion.div 
      onClick={onClick}
      className="group relative h-full bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300 cursor-pointer flex flex-col"
    >
      {/* Hover Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 relative z-10 flex flex-col h-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-white/5">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={16} /> Code
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}