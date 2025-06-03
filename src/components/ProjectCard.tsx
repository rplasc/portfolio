import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
type Props = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo } : Props) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 hover:shadow-blue-500/10 transition-transform transform hover:-translate-y-1 hover:scale-[1.01] duration-300">
      <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-blue-300 mb-4">{tech.join(', ')}</p>
      <div className="flex gap-4 text-blue-400 text-sm">
        {github && (
          <a href={github} target="_blank" className="flex items-center gap-1 hover:underline">
            <FaGithub /> GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" className="flex items-center gap-1 hover:underline">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

