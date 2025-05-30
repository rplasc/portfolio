type Props = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: Props) {
  return (
    <div className="border p-4 my-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      <p className="text-sm text-gray-600">Tech: {tech.join(', ')}</p>
      <div className="mt-2 flex gap-4">
        {github && <a href={github} className="text-blue-500" target="_blank">GitHub</a>}
        {demo && <a href={demo} className="text-blue-500" target="_blank">Live Demo</a>}
      </div>
    </div>
  );
}
