'use client';

import GlanceGrid from "@/components/GlanceGrid";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import CyberText from "@/components/CyberText";
export default function HomePage() {
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
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      <BackgroundBeams />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 sm:pt-24 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <CyberText text="Hi, I'm" /> <span className="vhs-glitch text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Raul Plascencia</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-medium text-gray-400 h-12">
            <span className="mr-2">Building</span>
            <span className="text-blue-200">
              <Typewriter
                words={[
                  'Full-Stack Solutions',
                  'Scalable Flask APIs',
                  'Robust Cloud Architectures',
                  'Seamless User Experiences',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap sm:flex-row gap-6 justify-center">
            <Link 
              href="/projects" 
              className="group relative px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            
            <Link 
              href="/about" 
              className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white font-medium rounded-full transition-all hover:bg-white/5 backdrop-blur-sm"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 w-full">
            <GlanceGrid />
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}