'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard'; // Make sure this matches your folder structure
import ProjectModal from '@/components/ProjectModal';
import { BackgroundBeams } from '@/components/BackgroundBeams'; // Reuse the component we made earlier
import projects from '@/data/projects';
import CyberText from '@/components/CyberText';

type Project = typeof projects[number];

export default function ProjectsPage() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  const [activeTag, setActiveTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTag === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeTag));

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-white pt-32 pb-20 px-4 overflow-x-hidden">
      
      {/* 1. Dynamic Background */}
      <BackgroundBeams />

      <section className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CyberText text='My' /> <CyberText text='Projects' className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A selection of my recent work, ranging from full-stack applications to AI integrations.
          </motion.p>
        </div>

        {/* Tag Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["All", ...allTags].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard 
                  {...project} 
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-gray-500"
          >
            No projects found with this tag.
          </motion.div>
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