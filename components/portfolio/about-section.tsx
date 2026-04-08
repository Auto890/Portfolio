import { Code, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code with best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and optimized web applications",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am passionate about the field of data analytics and eager to
              develop my skills through hands-on experience. I have a
              foundational knowledge of programming and enjoy working with data
              to uncover insights, create dashboards, and support business
              decision-making.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a fast learner with strong teamwork skills, a positive
              attitude, and a commitment to continuous improvement. I am
              particularly interested in developing my abilities in SQL, Python,
              and Power BI, and I am motivated to apply my knowledge in
              real-world situations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am currently seeking an internship opportunity where I can gain
              practical experience and contribute to a team in the field of data
              analytics.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
