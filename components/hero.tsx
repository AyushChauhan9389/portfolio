"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Settings } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh] relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Settings className="h-8 w-8 text-rust-orange mr-2 animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-rust-orange font-mono text-sm tracking-wider">CARGO RUN --RELEASE</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-mono">
              <span className="text-rust-orange">fn</span> main() {"{"}
              <br />
              <span className="ml-8 rust-gradient-text">Ayush Chauhan</span>
              <br />
              {"}"}
            </h1>

            <div className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl font-mono">
              <span className="js-only">
                <span className="text-rust-orange">let</span> <span className="text-rust-brown">role</span> =
                <span className="border-r-2 border-rust-orange animate-pulse ml-2">{text}</span>
              </span>
              <noscript>
                <span className="text-rust-orange">let</span> <span className="text-rust-brown">role</span> =
                <span className="ml-2">&quot;Rust Systems Developer | Memory Safety | Performance&quot;</span>
              </noscript>
            </div>
          </div>

          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg font-mono">
              <span className="text-rust-orange">/&#47; </span>
              Building blazingly fast, memory-safe systems with zero-cost abstractions
              <br />
              <span className="text-rust-orange">/&#47; </span>
              Specializing in concurrent programming and high-performance applications
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md">
            <Button
              asChild
              size="lg"
              className="flex-1 rounded-full bg-gradient-to-r from-rust-orange/80 to-rust-brown/80 hover:from-rust-orange hover:to-rust-brown transition-all duration-300 shadow-md hover:shadow-lg border border-rust-orange/30 font-mono"
            >
              <Link href="#contact">
                <Settings className="mr-2 h-4 w-4" />
                cargo contact
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex-1 rounded-full border-rust-orange text-rust-orange hover:bg-rust-orange hover:text-background transition-all duration-300 bg-transparent font-mono"
            >
              <Link href="/public/Ayush_Chauhan_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> cargo install --resume
              </Link>
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-rust-orange hover:bg-rust-orange/10 transition-all duration-300"
              asChild
            >
              <Link href="https://github.com/AyushChauhan9389" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-rust-brown hover:bg-rust-brown/10 transition-all duration-300"
              asChild
            >
              <Link href="https://linkedin.com/in/ayush-c93/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-rust-light hover:bg-rust-light/10 transition-all duration-300"
              asChild
            >
              <Link href="mailto:ayush.chauhan.main@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Rust-themed grid overlay */}
      <div className="absolute inset-0 bg-rust-grid bg-grid opacity-20 pointer-events-none"></div>
    </section>
  )
}
