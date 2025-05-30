'use client';

import GlanceGrid from "@/components/GlanceGrid";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hi, I’m <span className="text-blue-400">Raul Plascencia</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-medium text-gray-300">
        <Typewriter
          words={[
            'Full-Stack Developer',
            'React Native Enthusiast',
            'Flask API Architect',
            'Cloud Integration Specialist',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
          View Projects
        </Link>
        <Link href="/about" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          About Me
        </Link>
      </div>
      <GlanceGrid />
    </section>
  );
}