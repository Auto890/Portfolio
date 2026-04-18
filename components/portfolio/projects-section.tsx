import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Movie Rental",
    description:
      "This project is a Movie Rental Web Application developed using PHP and MySQL.It allows users to browse movies, add them to a cart, and rent them online.",
    skills: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Auto890/movie_rental",
  },
  {
    title: "COVID-19 Risk Analysis Dashboard",
    description:
      "This project analyzes COVID-19 risk data in Thailand using Power BI. The objective is to identify patterns of risk distribution across provinces, gender, and risk factors to support data-driven insights.",
    skills: ["Power BI", "Excel"],
    github: "https://github.com/Auto890/covid-risk-analysis-dashboard",
  },
  {
    title: "Football Club Management System",
    description:
      "This project is a basic React application built to practice frontend development skills.It focuses on creating a simple and interactive user interface using React., PHP, and MySQL to manage football club members.",
    skills: ["React", "PHP", "MySQL", "CSS", "Axios"],
    github: "https://github.com/Auto890/Footballteamm",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={40} />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {skill}
                    {skillIndex < project.skills.length - 1 && " ·"}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
