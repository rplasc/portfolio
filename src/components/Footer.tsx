export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-black text-gray-400 py-6 text-center mt-16">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} Raul Plascencia. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
