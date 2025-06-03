'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '../../components/ProjectModal';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '@/data/projects';

type Project = typeof projects[number];

export default function ProjectsPage() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  const [activeTag, setActiveTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTag === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeTag));

  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-28 px-6 min-h-screen">
      <section className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", ...allTags].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm transition border ${
                activeTag === tag
                  ? "bg-blue-500 text-white"
                  : "text-blue-400 border-blue-400 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400">No projects found for this tag.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="sync">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 hover:shadow-blue-500/10 transition-transform transform hover:-translate-y-1 hover:scale-[1.01] duration-300">
                    <h2 className="text-xl font-semibold text-white mb-1">{project.title}</h2>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <p className="text-sm text-blue-300 mb-4">{project.tech.join(', ')}</p>
                    <div className="flex gap-4 text-blue-400 text-sm">
                      {project.github && (
                        <span className="flex items-center gap-1">
                          <FaGithub /> GitHub
                        </span>
                      )}
                      {project.demo && (
                        <span className="flex items-center gap-1">
                          <FaExternalLinkAlt /> Live Demo
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
