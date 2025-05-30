'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiHome, HiUser, HiCollection, HiMail } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
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

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md text-white flex items-center justify-center"
          >
            
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center justify-center space-y-8 text-2xl"
            >
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <HiHome /> Home
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <HiUser /> About
              </Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <HiCollection /> Projects
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <HiMail /> Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
