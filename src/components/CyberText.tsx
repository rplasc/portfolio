'use client';

export default function CyberText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`accent-text ${className ?? ''}`}>
      {text}
    </span>
  );
}
