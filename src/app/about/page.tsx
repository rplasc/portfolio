'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import timeline from '@/data/timeline';

export default function AboutPage() {
  const sections = [
    {
      title: 'Education',
      content: 'B.S. in Computer Science & Engineering — UC Merced (Graduating August 2025)',
    },
    {
      title: 'Core Values',
      content: 'I value open-mindedness, clear communication, and attention to detail — they’re at the core of how I build and collaborate.',
    },
    {
      title: 'Fun Facts',
      content: 'I originally majored in Film and love playing my electric guitar during my free time. I enjoy listening to albums and can nerd out over music at any given time.',
    },
  ];

  return (
    <div>
      <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-32 px-6">
        <section id="about" className="max-w-3xl mx-auto text-center mb-24">
          <Image
            src="/profile.jpg"
            alt="Raul Plascencia"
            width={240}
            height={240}
            className="rounded-full border-2 border-white shadow-lg hover:shadow-blue-500/30 transition mx-auto mb-6"
          />
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I’m a Computer Science & Engineering student at UC Merced, passionate about building clean, scalable full-stack solutions. As the technical lead on my capstone project, I helped design and deliver a cross-platform file syncing app using React Native, Flask, and Rclone.
          </motion.p>
          <motion.p
            className="text-gray-400 text-base leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I thrive at the intersection of usability and performance — whether it's backend API design, mobile UX, or AI integration.
          </motion.p>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Download Resume
          </motion.a>
        </section>

        <section id="timeline" className="max-w-3xl mx-auto mb-24">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            Timeline
          </motion.h2>
          <div className="border-l border-gray-600 pl-6 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-8 top-1">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-sm text-gray-400 mt-1">{item.date}</span>
                <p className="text-gray-300 text-base mt-1 max-w-prose">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="more" className="max-w-3xl mx-auto mb-24">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            More About Me
          </motion.h2>
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                <p className="text-gray-300">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
