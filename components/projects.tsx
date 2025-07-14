import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cpu, FileCode, ShoppingCart, Plane } from "lucide-react"
import Link from "next/link"

// Add these at the top of the file for easy reuse across the site
export const GITHUB_PROFILE_URL = "https://github.com/AyushChauhan9389"
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/ayush-c93/"

export default function Projects() {
  const projects = [
    {
      title: "CODEPAPER (COMING SOON)",
      description:
        "SaaS platform for saving, iterating, and generating code snippets with AI-driven workflows. Front-end in Next.js with extensive animations; AI features powered by the Vercel AI SDK. High-performance Go back-end delivers scalable APIs and real-time generation services.",
      tags: ["Next.js", "Vercel AI SDK", "Go"],
      codeLink: null,
      liveLink: null,
      icon: <FileCode className="h-8 w-8 text-rust-orange" />, // adjust icon as needed
      iconBg: "bg-rust-orange/10",
      borderColor: "border-rust-orange/30",
      hoverColor: "hover:border-rust-orange/50 hover:shadow-rust-orange/20",
    },
    {
      title: "FULL-STACK RUST NOTES APP",
      description:
        "Developed a full-stack notes application with a Rust backend (Actix-web) and a Next.js frontend. Added real-time updates, categorization, pagination, and robust error handling. Optimised database interactions via SQLx with PostgreSQL, achieving millisecond-level query latency.",
      tags: ["Rust", "Actix-web", "SQLx", "PostgreSQL", "Next.js", "Tailwind CSS"],
      codeLink: "https://github.com/AyushChauhan9389/rust-postgres-crud-sqlx",
      liveLink: null,
      icon: <Cpu className="h-8 w-8 text-rust-brown" />, // adjust icon as needed
      iconBg: "bg-rust-brown/10",
      borderColor: "border-rust-brown/30",
      hoverColor: "hover:border-rust-brown/50 hover:shadow-rust-brown/20",
    },
    {
      title: "ANIMEXSCHOOL E-COMMERCE",
      description:
        "Built an anime-themed e-commerce store with Next.js and a modern UI using Tailwind CSS. Integrated Clerk for user authentication and Stripe for secure online payments. Implemented product listing, cart management, and a seamless checkout flow.",
      tags: ["Next.js", "Tailwind CSS", "Clerk", "Stripe"],
      codeLink: "https://github.com/AyushChauhan9389/AnimeXschool",
      liveLink: null,
      icon: <ShoppingCart className="h-8 w-8 text-rust-light" />, // adjust icon as needed
      iconBg: "bg-rust-light/10",
      borderColor: "border-rust-light/30",
      hoverColor: "hover:border-rust-light/50 hover:shadow-rust-light/20",
    },
    {
      title: "TRAVEL BLOG PLATFORM",
      description:
        "Built a travel blog platform featuring secure authentication and rich content-management tools. Leveraged PostgreSQL for structured content storage and fast retrieval. Enables users to create, edit, and manage blog posts efficiently.",
      tags: ["Next.js", "PostgreSQL"],
      codeLink: "https://github.com/AyushChauhan9389/travelblogv2",
      liveLink: null,
      icon: <Plane className="h-8 w-8 text-rust-muted" />, // adjust icon as needed
      iconBg: "bg-rust-muted/10",
      borderColor: "border-rust-muted/30",
      hoverColor: "hover:border-rust-muted/50 hover:shadow-rust-muted/20",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
              <span className="text-rust-orange">mod</span> projects {"{"}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              <span className="text-rust-orange">/&#47; </span>Showcasing memory-safe, high-performance Rust applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card
                  className={`overflow-hidden h-full flex flex-col bg-card/80 backdrop-blur-sm border ${project.borderColor} ${project.hoverColor} transition-all duration-300 hover:shadow-lg`}
                >
                  <CardContent className="project-content flex-1 flex flex-col p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${project.iconBg} p-3 rounded-full border ${project.borderColor}`}>
                        {project.icon}
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs border-rust-orange/50 text-rust-orange bg-rust-orange/10 font-mono"
                      >
                        Rust
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-foreground font-mono">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                    <div className="project-tags mb-4">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-secondary/50 px-2 py-1 rounded-full border border-border/30 mr-1 mb-1 inline-block font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-links flex gap-2">
                      {project.codeLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className={`flex-1 ${project.borderColor} hover:bg-current/10 bg-transparent transition-all duration-300 font-mono`}
                        >
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-4 w-4" /> Source
                          </Link>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className={`flex-1 ${project.borderColor} hover:bg-current/10 bg-transparent transition-all duration-300 font-mono`}
                        >
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Demo
                          </Link>
                        </Button>
                      )}
                      {!project.codeLink && !project.liveLink && (
                        <div className="flex-1 text-center text-xs text-muted-foreground py-2 font-mono">
                          <span className="text-rust-orange">/&#47; </span>Coming Soon
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
