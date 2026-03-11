'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Useful for active states
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiHome, HiUser, HiCollection, HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', href: '/', icon: <HiHome /> },
    { label: 'Projects', href: '/projects', icon: <HiCollection /> }, // Reordered for priority
    { label: 'About', href: '/about', icon: <HiUser /> },
    { label: 'Contact', href: '/contact', icon: <HiMail /> },
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
        <nav className="w-full max-w-4xl rounded-full border border-white/10 bg-[color:var(--bg-soft)]/70 backdrop-blur-xl shadow-lg px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all hover:border-white/20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[color:var(--accent)] text-[#1b1f2a] font-bold text-xs group-hover:scale-110 transition-transform">
              R
            </div>
            <span className="font-semibold text-sm tracking-wide hidden sm:block">Raul Plascencia</span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors hover:text-[color:var(--accent)] ${isActive ? 'text-white' : 'text-[color:var(--muted)]'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Socials (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-[color:var(--muted)] border-l border-white/10 pl-6 ml-2">
             <a href="https://github.com/rplasc" target="_blank" className="hover:text-white transition-colors" rel="noreferrer"><FaGithub size={18} /></a>
             <a href="https://linkedin.com/in/raul-plascencia" target="_blank" className="hover:text-[color:var(--accent)] transition-colors" rel="noreferrer"><FaLinkedin size={18} /></a>
          </div>

          {/* Mobile Hamburger (Visible on Mobile) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[color:var(--muted)] hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <HiMenu size={24} />
          </button>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[color:var(--bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-[color:var(--muted)] hover:text-white"
            >
              <HiX size={32} />
            </button>

            <motion.div 
              className="flex flex-col gap-8 text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-light hover:text-[color:var(--accent)] transition-colors flex items-center gap-3 justify-center"
                  >
                    {link.icon} {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="flex justify-center gap-8 mt-8 text-3xl text-[color:var(--muted)]"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
              >
                 <a href="https://github.com/rplasc" target="_blank" rel="noreferrer"><FaGithub /></a>
                 <a href="https://linkedin.com/in/raul-plascencia" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
