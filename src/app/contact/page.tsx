'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaEnvelope className="text-blue-400 text-xl" />,
    label: 'Email',
    value: 'rplasc.2025@gmail.com',
    href: 'mailto:rplasc.2025@gmail.com',
  },
  {
    icon: <FaLinkedin className="text-blue-400 text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raul-plascencia',
    href: 'https://linkedin.com/in/raul-plascencia',
  },
  {
    icon: <FaGithub className="text-blue-400 text-xl" />,
    label: 'GitHub',
    value: 'github.com/rplasc',
    href: 'https://github.com/rplasc',
  },
];

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-28 px-6 min-h-screen">
      <section className="max-w-xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Feel free to reach out for collaboration, questions, or just to connect.
        </motion.p>

        <div className="space-y-4 text-left">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              className="flex items-center gap-3 bg-white/10 p-4 rounded-lg border border-white/10"
            >
              {item.icon}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                {item.value}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
