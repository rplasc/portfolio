import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: "Capstone Project",
    description: "Cross-platform file syncing app",
    tech: ["React Native", "Flask", "Rclone"],
    github: "https://github.com/...",
    demo: "https://demo.link"
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Projects</h1>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}
