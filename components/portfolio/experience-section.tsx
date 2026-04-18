import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

const experiences = [
  {
    title: "CP ALL Public Company Limited (7-Eleven)",
    period: "2-month internship",
    description:
      "Gained experience in a large organization, strengthening customer service, teamwork, and task ownership while working with professional standards.",
  },
  {
    title: "ช่วยธุรกิจส่วนตัว รีสอร์ท ที่ เพชรบูรณ์ (ภูหมอกแก้ว ภูทับเบิก)",
    period: "Freelance",
    description:
      "ช่วยธุรกิจส่วนตัว ทำโฆษณาและออกแบบป้ายราคาต่างๆ สำหรับกิจการรีสอร์ท",
    images: ["/P11.png", "/P12.png", "/P13.png"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Involvements
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
              
              {exp.images && exp.images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.images.map((img, idx) => (
                    <div key={idx} className="relative aspect-video sm:aspect-square overflow-hidden rounded-xl border border-border">
                      <Image
                        src={getAssetPath(img)}
                        alt={`Experience image ${idx + 1}`}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

