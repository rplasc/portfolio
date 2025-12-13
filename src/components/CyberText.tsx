'use client';

import { useState, useEffect, useRef } from 'react';

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export default function CyberText({ text, className }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let pos = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (index < pos) return text[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);
      pos += 1 / 3;

      if (pos > text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <span 
      className={className} 
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
}