"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: "Backend Developer (Intern)",
      company: "AROGO AI",
      period: "Feb 2025 – Present",
      location: "Remote / IIT Kharagpur",
      achievements: [
        "Developed a responsive and dynamic front-end, seamlessly integrating it with the back-end through well-structured API calls to enhance performance and user experience.",
        "Designed and deployed 70+ production-grade APIs with Node.js, Express, TypeScript and PostgreSQL (Drizzle ORM), ensuring scalability, security and efficient data management."
      ],
    },
    {
      title: "Backend Developer (Intern)",
      company: "UNISPHERE – BML MUNJAL UNIVERSITY",
      period: "Aug 2024 – Jan 2025",
      location: "Manesar, Haryana",
      achievements: [
        "Designed and implemented 30+ backend APIs on Firebase, providing seamless authentication, database management and real-time functionality.",
        "Built 50+ production-ready APIs with Node.js, Express, TypeScript and PostgreSQL, following solid system-design principles to maximise performance, scalability and maintainability."
      ],
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !timelineRef.current) return

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate timeline items
      const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")

      timelineItems?.forEach((item, index) => {
        const card = item.querySelector(".experience-card")
        const achievements = item.querySelectorAll(".achievement-item")

        // Animate card entrance
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotationY: index % 2 === 0 ? -15 : 15,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animate achievements with stagger
        gsap.fromTo(
          achievements,
          {
            opacity: 0,
            x: -30,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Animate timeline dot
        const timelineDot = item.querySelector(".timeline-dot")
        if (timelineDot) {
          gsap.fromTo(
            timelineDot,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Animate timeline line
        const timelineLine = item.querySelector(".timeline-line")
        if (timelineLine) {
          gsap.fromTo(
            timelineLine,
            {
              scaleY: 0,
              transformOrigin: "top",
            },
            {
              scaleY: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })

      // Animate skills section
      const skillsSection = sectionRef.current?.querySelector("#skills")
      if (skillsSection) {
        gsap.fromTo(
          skillsSection,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsSection,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center" ref={titleRef}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
              <span className="text-rust-orange">match</span> experience {"{"}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              <span className="text-rust-orange">/&#47; </span>Professional journey in systems programming and Rust
              development
            </p>
          </div>

          <div className="space-y-8 mt-12" ref={timelineRef}>
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item relative">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-0 top-1 h-4 w-4 rounded-full bg-gradient-to-r from-rust-orange to-rust-brown shadow-lg shadow-rust-orange/50"></div>

                {/* Timeline line */}
                <div className="timeline-line absolute left-[7px] top-5 w-0.5 h-full bg-gradient-to-b from-rust-orange via-rust-brown to-rust-dark opacity-60"></div>

                <div className="pl-8">
                  <Card className="experience-card border-l-4 border-l-rust-orange transition-all duration-300 hover:shadow-lg hover:shadow-rust-orange/20 hover:border-l-rust-brown bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground font-mono">{experience.title}</h3>
                          <p className="text-rust-orange font-mono">{experience.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                          <Badge
                            variant="outline"
                            className="mb-1 md:mb-0 border-rust-brown/50 text-rust-brown bg-rust-brown/10 font-mono"
                          >
                            {experience.period}
                          </Badge>
                          <span className="text-sm text-muted-foreground font-mono">{experience.location}</span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="achievement-item flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-rust-orange flex-shrink-0 shadow-sm shadow-rust-orange"></span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
