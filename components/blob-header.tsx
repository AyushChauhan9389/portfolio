"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { ModeToggle } from "./mode-toggle"
import { Navigation, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Me", href: "#contact" },
]

export default function BlobHeader() {
  const [isHovered, setIsHovered] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const determineActiveSection = useCallback(() => {
    const sections = navItems.map((item) => item.href.substring(1))
    const allSections = [...sections, "open-source", "skills"]

    for (let i = allSections.length - 1; i >= 0; i--) {
      const section = document.getElementById(allSections[i])
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          const sectionId = allSections[i]
          if (sectionId === "open-source") return "projects"
          if (sectionId === "skills") return "experience"
          if (!sections.includes(sectionId)) return "home"
          return sectionId
        }
      }
    }
    return "home"
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(determineActiveSection())
    }

    window.addEventListener("scroll", handleScroll)
    setActiveSection(determineActiveSection())

    return () => window.removeEventListener("scroll", handleScroll)
  }, [determineActiveSection])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: "smooth",
      })
      setActiveSection(targetId)
      setIsHovered(false)
    }
  }

  return (
    <>
      {/* Floating Rust Gear */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Rust Gear Background */}
        <motion.div
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-rust-orange/20 to-rust-brown/20 backdrop-blur-md border border-rust-orange/30 cursor-pointer"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 180 : 0,
            boxShadow: isHovered
              ? "0 0 30px rgba(255, 69, 0, 0.4), 0 0 60px rgba(206, 66, 43, 0.2)"
              : "0 0 15px rgba(255, 69, 0, 0.2), 0 0 30px rgba(206, 66, 43, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Rust Gear Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ rotate: isHovered ? -180 : 0 }} transition={{ duration: 0.3 }}>
              {isHovered ? (
                <Navigation className="h-6 w-6 text-rust-orange" />
              ) : (
                <Settings className="h-6 w-6 text-rust-orange animate-spin" style={{ animationDuration: "3s" }} />
              )}
            </motion.div>
          </div>

          {/* Floating particles around gear */}
          <motion.div
            className="absolute -inset-2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-rust-orange rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${20 + i * 5}px 0`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Navigation Menu */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 right-0 min-w-[280px]"
            >
              <div className="bg-background/90 backdrop-blur-xl rounded-2xl border border-rust-orange/30 shadow-2xl shadow-rust-orange/20 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-rust-orange animate-spin" style={{ animationDuration: "2s" }} />
                    <span className="text-lg font-bold rust-gradient-text font-mono">cargo run --nav</span>
                  </div>
                  <ModeToggle />
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1)

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className={cn(
                            "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-mono text-sm group",
                            isActive
                              ? "bg-rust-orange/10 text-rust-orange border border-rust-orange/30 shadow-md"
                              : "text-muted-foreground hover:text-rust-orange hover:bg-rust-orange/5 border border-transparent hover:border-rust-orange/20",
                          )}
                        >
                          <motion.div
                            className={cn(
                              "w-2 h-2 rounded-full transition-all duration-300",
                              isActive
                                ? "bg-rust-orange shadow-sm shadow-rust-orange"
                                : "bg-muted-foreground/30 group-hover:bg-rust-orange/50",
                            )}
                            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto w-1 h-1 bg-rust-orange rounded-full"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-rust-orange/20">
                  <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground font-mono">
                    <span className="text-rust-orange">unsafe </span>
                    <span>SYSTEM_ACTIVE</span>
                    <span className="text-rust-orange">{"}"}</span>
                    <motion.div
                      className="w-1 h-1 bg-rust-orange rounded-full"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
