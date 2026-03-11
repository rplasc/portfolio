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
      className="group relative h-full bg-[color:var(--bg-soft)]/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[color:var(--accent)]/40 transition-colors duration-300 cursor-pointer flex flex-col"
    >
      {/* Hover Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/8 via-[color:var(--accent-2)]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-5 sm:p-6 relative z-10 flex flex-col h-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[color:var(--accent)] transition-colors">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-[color:var(--muted)] mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-medium text-[color:var(--accent)] bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/20 rounded-full">
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
              className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-white transition-colors"
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
              className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
