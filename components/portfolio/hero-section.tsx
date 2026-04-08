"use client"

import { Github, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <p className="text-primary text-lg font-medium">Hello, I&apos;m</p>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Weerapat Unkaeo
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Data Analyst
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            I am passionate about the data field and motivated to develop my skills through practical experience.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://github.com/Auto890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="auto15282555@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={32} />
      </div>
    </section>
  )
}
