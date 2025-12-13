'use client';
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"
      />
    </div>
  );
};