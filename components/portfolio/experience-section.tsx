import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "CP ALL Public Company Limited (7-Eleven)",
    period: "2-month internship",
    description:
      "Gained experience in a large organization, strengthening customer service, teamwork, and task ownership while working with professional standards.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Internship Experience
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-sm shadow-muted/10 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {exp.title}
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {exp.period}
                </span>
              </div>
              <p className="mt-4 text-muted-foreground leading-7">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
