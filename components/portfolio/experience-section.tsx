"use client";

import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const experiences = [
  {
    title: "CP ALL Public Company Limited (7-Eleven)",
    period: "2-month internship",
    description:
      "Gained experience in a large organization, strengthening customer service, teamwork, and task ownership while working with professional standards.",
  },
  {
    title: "Assisted Family Business – Resort in Phu Thap Boek, Phetchabun (Phu Mok Kaew Resort)",
    period: "Freelance",
    description:
      "Assisted family business by creating advertisements and designing price signs for the resort.",
    images: ["/P11.png", "/P12.png"],
  },
];

export function ExperienceSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                    <div 
                      key={idx} 
                      className="relative aspect-video sm:aspect-square overflow-hidden rounded-xl border border-border cursor-zoom-in"
                      onClick={() => setSelectedImage(img)}
                    >
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

        {/* Image Modal */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-0" showCloseButton={false}>
              <div className="relative w-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={32} />
                </button>
                <Image
                  src={getAssetPath(selectedImage)}
                  alt="Full size image"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
