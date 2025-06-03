'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import remarkGfm from 'remark-gfm';
import projects from '@/data/projects';

interface ProjectModalProps {
  project: typeof projects[number];
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-800 text-white p-6 rounded-lg max-w-md w-full shadow-xl relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Markdown-rendered description */}
        <div className="prose prose-invert max-w-none text-gray-300">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.details}
          </ReactMarkdown>
        </div>

        <div className="mt-6 flex gap-4 text-blue-400 text-sm">
          {project.github && (
            <a href={project.github} target="_blank" className="flex items-center gap-1 hover:underline">
              <FaGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" className="flex items-center gap-1 hover:underline">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
