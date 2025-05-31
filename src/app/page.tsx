'use client';

import GlanceGrid from "@/components/GlanceGrid";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 sm:pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I’m <span className="vhs-glitch text-blue-400">Raul Plascencia</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-300">
          <Typewriter
            words={[
              'Full-Stack Developer',
              'Flask API Architect',
              'Web Application Specialist',
              'Beer Enthusiast',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <div className="mt-8 flex flex-wrap sm:flex-row gap-4 justify-center">
          <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 text-sm sm:text-base rounded-full transition">
            View Projects
          </Link>
          <Link href="/about" className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
            About Me
          </Link>
        </div>
        <GlanceGrid />
      </section>
    </main>
  );
}