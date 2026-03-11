'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import projects from '@/data/projects';
import CyberText from '@/components/CyberText';
import Link from 'next/link';

type Project = typeof projects[number];

export default function ProjectsPage() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  const [activeTag, setActiveTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTag === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeTag));
  const featured = filtered.find((project) => project.featured) ?? filtered[0];
  const rest = featured ? filtered.filter((project) => project !== featured) : [];

  return (
    <main className="relative min-h-screen w-full pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-x-hidden">
      
      {/* 1. Dynamic Background */}
      <BackgroundBeams />

      <section className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CyberText text='Selected' /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]">Projects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-[color:var(--muted)] max-w-2xl mx-auto text-sm sm:text-base"
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
            className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-[color:var(--accent)] text-[#1b1f2a] shadow-[0_12px_30px_rgba(244,176,122,0.25)] scale-105"
                  : "bg-white/5 text-[color:var(--muted)] hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Magazine Layout */}
        {featured && (
          <motion.div
            layout
            className="grid gap-6 lg:grid-cols-12"
          >
            <motion.article
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="h-full rounded-3xl border border-white/10 bg-[color:var(--bg-soft)]/80 p-6 sm:p-8 md:p-10 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)] mb-6">
                  Featured Project
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-[color:var(--muted)] leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium text-[color:var(--accent)] bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={() => setSelectedProject(featured)}
                    className="px-6 py-3 rounded-full bg-[color:var(--accent)] text-[#1b1f2a] font-semibold transition-transform hover:translate-y-[-1px]"
                  >
                    View Details
                  </button>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full border border-white/10 text-[color:var(--muted)] hover:text-white hover:border-white/20 transition-colors"
                  >
                    Collaborate
                  </Link>
                </div>
              </div>
            </motion.article>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {rest.map((project) => (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard
                      {...project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-[color:var(--muted)]"
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
