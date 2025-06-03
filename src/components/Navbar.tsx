'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiHome, HiUser, HiCollection, HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ESC key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Scroll lock when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);  

  const navLinks = [
    { label: 'Home', href: '/', icon: <HiHome /> },
    { label: 'About', href: '/about', icon: <HiUser /> },
    { label: 'Projects', href: '/projects', icon: <HiCollection /> },
    { label: 'Contact', href: '/contact', icon: <HiMail /> },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed backdrop-blur-md top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-auto">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition">
              R
            </div>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl ml-auto translate-x-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md text-white flex items-center justify-center"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
                exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center justify-center space-y-8 text-2xl"
            >
              {navLinks.map(({ label, href, icon }, index) => (
                <motion.div
                  key={href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 10 }
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    {icon} {label}
                  </Link>
                </motion.div>
              ))}
              {/* Social Icons */}
              <motion.div
                className="mt-12 flex space-x-6 text-2xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              >
                <motion.a
                  href="https://github.com/rplasc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-blue-400 transition"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/raul-plascencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-400 transition"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
