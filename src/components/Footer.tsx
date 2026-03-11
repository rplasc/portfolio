export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[color:var(--bg)]/95 backdrop-blur-md text-[color:var(--muted)] h-[var(--footer-height)] flex items-center justify-center">
      <p className="text-xs tracking-wide">
        © {new Date().getFullYear()} Raul Plascencia.
      </p>
    </footer>
  );
}
