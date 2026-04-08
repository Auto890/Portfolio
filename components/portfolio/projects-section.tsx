import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    skills: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    skills: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates blog posts, social media content, and marketing copy using advanced language models.",
    skills: ["TypeScript", "OpenAI", "Vercel AI SDK", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "A personal finance dashboard for tracking investments, analyzing portfolio performance, and visualizing financial data.",
    skills: ["React", "Chart.js", "REST API", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Application",
    description:
      "A beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.",
    skills: ["React Native", "Weather API", "Geolocation", "Animations"],
    github: "https://github.com",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, SEO optimization, and a powerful content management system.",
    skills: ["Next.js", "MDX", "Contentful", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
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
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
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
