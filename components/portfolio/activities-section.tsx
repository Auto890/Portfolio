"use client";

import { useState } from "react";
import { Calendar, MapPin, Award, Users, Heart, BookOpen, X } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const activities = [
  {
    id: 1,
    title:
      "Digital Innovation and Agentic AI in the Next Decade & Knowledge Sharing: Future skill for future work (Metro System)",
    description:
      "A special lecture and technology tour focused on preparing computer science students for the modern IT workforce. The session covered the evolution of digital innovation, the future impact of Agentic AI on the business world, and the essential skills required for future careers. The program also included a visit to the Technology Demonstration Center to experience real-world, cutting-edge IT solutions.",
    location: "Bangkok, Thailand",
    icon: Award,
    color: "bg-yellow-500/20 text-yellow-400",
    image: "/Metro-System.jpg",
  },
  {
    id: 2,
    title: "Software Project Initiation and Cost Estimation (Indigy)",
    description:
      "A special lecture focused on the foundational steps of launching a software project for a startup. The session covered how to turn an idea into a practical plan by defining the project scope, planning a Minimum Viable Product (MVP), and accurately estimating development costs, including human resources and infrastructure.",
    date: "2024 - Present",
    location: "Online & Offline",
    icon: Users,
    color: "bg-blue-500/20 text-blue-400",
    image: "/Software-Project-Initiation-and-Cost-Estimation.jpg",
  },
  {
    id: 3,
    title: "Business Transformation and Business Use Case (Bytedance)",
    description:
      "An experience-sharing session focused on Business Transformation and practical Business Use Cases. The lecture explored how companies leverage digital technologies to adapt their business models, solve real-world industry challenges, and drive innovation within a startup environment.",
    location: "GitHub",
    icon: Heart,
    color: "bg-pink-500/20 text-pink-400",
    image: "/Lark.jpg",
  },
  {
    id: 4,
    title: "ERP for Digital Business Development (Metro System)",
    description:
      "A hands-on workshop and special lecture focusing on Enterprise Resource Planning (ERP) systems. The session explored how to utilize ERP software to integrate core business processes, improve operational efficiency, and drive digital transformation within an organization.",
    location: "Chulalongkorn University",
    icon: BookOpen,
    color: "bg-green-500/20 text-green-400",
    image: "/ERP.jpg",
  },
  {
    id: 5,
    title: "Geospatial Analysis (TRUE DIGITAL GROUP CO., LTD.)",
    category: "Mentoring",
    description:
      "A hands-on workshop and lecture focused on analyzing and visualizing location-based data. The session covered techniques for mapping geographical information to uncover spatial patterns, trends, and actionable insights.",
    date: "June - August 2024",
    location: "Bangkok, Thailand",
    icon: Users,
    color: "bg-purple-500/20 text-purple-400",
    image: "/Kni.jpg",
  },
  {
    id: 6,
    title: "University Network Infrastructure",
    category: "Writing",
    description:
      "Exploring connectivity beyond standard Wi-Fi. This involved analyzing system strengths and weaknesses to develop practical solutions. The experience provided a deep understanding of enterprise-level network architecture and management, building a strong foundation for a future career as an IT professional.",
    date: "2023 - Present",
    location: "Online",
    icon: BookOpen,
    color: "bg-orange-500/20 text-orange-400",
    image: "/Network.jpg",
  },
];

export function ActivitiesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="activities" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Activities & Involvement
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Beyond coding, I actively participate in the tech community through
            various activities and initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.id}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {activity.image && (
                  <div 
                    className="mb-4 overflow-hidden rounded-lg cursor-pointer group/img"
                    onClick={() => setSelectedImage(activity.image)}
                  >
                    <Image
                      src={getAssetPath(activity.image)}
                      alt={activity.title}
                      width={600}
                      height={300}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300 group-hover/img:brightness-75"
                    />
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${activity.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {activity.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
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
