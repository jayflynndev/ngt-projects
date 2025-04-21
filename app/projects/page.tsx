import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      image: "/about-1.jpg",
      title: "Corporate Office Refurbishment",
      summary:
        "A full redesign of a multi-floor office space in Central London.",
      link: "/projects/project-1",
    },
    {
      image: "/about-2.jpg",
      title: "Retail Unit Fitout",
      summary:
        "Transformed a bare unit into a branded, high-end retail environment.",
      link: "/projects/project-2",
    },
    {
      image: "/about-3.jpg",
      title: "Education Sector Redesign",
      summary:
        "Upgraded classroom and communal areas with modern, practical design.",
      link: "/projects/project-3",
    },
  ];

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-green)] mb-4">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-secondary)]">
            A selection of recent commercial fitouts and refurbishments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
