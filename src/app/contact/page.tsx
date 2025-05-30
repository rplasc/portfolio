export default function ContactPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Contact Me</h1>
      <ul className="list-disc ml-6">
        <li>Email: <a href="mailto:you@example.com" className="text-blue-500">you@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">yourprofile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-500">yourusername</a></li>
      </ul>
    </div>
  );
}
