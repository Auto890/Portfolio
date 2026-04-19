"use client";

import { useState } from "react";
import Image from "next/image"
import { Award, ExternalLink, X } from "lucide-react"
import { getAssetPath } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

const certificates = [
  {
 title: "Design and manage analytics solutions using Power BI",
    issuer: "Microsoft",
    year: "2025",
    description:
      "Completed a course focused on designing and managing analytics solutions using Power BI for data visualization and business intelligence.",
    image: "/P1.png",
  },
  {
    title: "Basic Data Management with Excel",
    issuer: "Mahidol University International College",
    year: "2025",
    description:
      "Successfully completed a course covering fundamental data management skills using Excel, including data handling and analysis.",
    image: "/P2.png",
  },
  {
  title: "Startup Thailand League 2025 (University Level)",
  issuer: "Faculty of Business Administration, Huachiew Chalermprakiet University",
  year: "2025",
  description:
    "Participated in the Startup Thailand League 2025 (9th edition) at the university level.",
  image: "/P3.jpg",
  },
]

export function CertificateSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg leading-relaxed">
            รวมผลงานและเกียรติบัตรที่เคยได้รับ เพื่อแสดงถึงความตั้งใจและทักษะที่พัฒนาขึ้น
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card/80 shadow-sm shadow-muted/10 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              {certificate.image && (
                <div 
                  className="relative overflow-hidden bg-muted/10 cursor-pointer group/img"
                  onClick={() => setSelectedImage(certificate.image)}
                >
                  <Image
                    src={getAssetPath(certificate.image)}
                    alt={certificate.title}
                    width={640}
                    height={360}
                    className="w-full h-48 object-cover group-hover/img:brightness-75 transition-all duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Award size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {certificate.issuer} • {certificate.year}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-7 mb-6">
                  {certificate.description}
                </p>
              </div>
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
                  alt="Full size certificate"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}
