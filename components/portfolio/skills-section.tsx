const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React"},
      { name: "HTML/CSS",},
      { name: "bootstrap",},
      { name: "React",},
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", },
      { name: "Python",},
      { name: "Java",},
      { name: "PHP",}
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git",},
      { name: "MySQL",},
      { name: "Power BI",},
      { name: "Excel",},
      { name: "Unity",}
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.category}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="rounded-full bg-border/40 px-4 py-2">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
