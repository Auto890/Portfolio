import { Github, Heart } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
]

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="text-primary" size={16} fill="currentColor" />
            <span>by Weerapat unkaeo</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
