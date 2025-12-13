'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import remarkGfm from 'remark-gfm';
import projects from '@/data/projects';

interface ProjectModalProps {
  project: typeof projects[number];
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
      
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        className="relative bg-gray-900 border border-white/10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl custom-scrollbar"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
          <h2 className="text-xl font-bold text-white truncate pr-4">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 border border-blue-500/20 rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Markdown Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.details}
            </ReactMarkdown>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex gap-4 pt-6 border-t border-white/10">
            {project.github && (
              <a href={project.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors">
                <FaGithub /> View Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors shadow-lg shadow-blue-500/20">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}