'use client';

import GlanceGrid from "@/components/GlanceGrid";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import CyberText from "@/components/CyberText";
import projects from "@/data/projects";
export default function HomePage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundBeams />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-24 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-[0.35em] text-[color:var(--muted)] mb-6"
          >
            Software Engineer
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
            Raul Plascencia
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-base sm:text-lg md:text-2xl font-medium text-[color:var(--muted)] max-w-2xl">
            I build clean, durable systems and front-ends with a calm, product-first mindset.
            <span className="block mt-3 text-base md:text-lg text-[color:var(--ink)]">
              Currently shipping at <CyberText text="Gaine Technology" />.
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="group relative px-8 py-3 bg-[color:var(--accent)] text-[#1b1f2a] font-semibold rounded-full transition-all shadow-[0_12px_30px_rgba(244,176,122,0.25)] hover:translate-y-[-1px]"
            >
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            
            <Link 
              href="/about" 
              className="px-8 py-3 border border-white/10 hover:border-white/20 text-[color:var(--muted)] hover:text-white font-medium rounded-full transition-all hover:bg-white/5 backdrop-blur-sm"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 w-full">
            <GlanceGrid />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 w-full">
            <div className="max-w-5xl mx-auto px-2">
              <div className="rounded-3xl border border-white/10 bg-[color:var(--bg-soft)]/80 p-6 sm:p-8 md:p-10 text-left">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)] mb-4">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {featuredProject?.title}
                </h3>
                <p className="text-[color:var(--muted)] leading-relaxed mb-6">
                  {featuredProject?.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject?.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium text-[color:var(--accent)] bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="px-6 py-3 rounded-full bg-[color:var(--accent)] text-[#1b1f2a] font-semibold transition-transform hover:translate-y-[-1px]"
                  >
                    Read the case study
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full border border-white/10 text-[color:var(--muted)] hover:text-white hover:border-white/20 transition-colors"
                  >
                    Work together
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}
