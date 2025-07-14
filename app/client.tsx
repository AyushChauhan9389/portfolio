"use client"

import type React from "react"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import BlobHeader from "@/components/blob-header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import NoScriptStyles from "@/components/noscript-styles"

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <head>
                <NoScriptStyles />
                <link rel="manifest" href="/manifest.json" />
                <style jsx global>{`
          :root {
            --font-mono: "JetBrains Mono", "Fira Code", "Source Code Pro", ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
          }
          
          body {
            font-family: var(--font-mono);
          }
        `}</style>
            </head>
            <body className={cn("min-h-screen bg-background font-mono antialiased", jetbrainsMono.variable)}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
                    <div className="relative flex min-h-screen flex-col overflow-hidden">
                        <noscript>
                            <div className="bg-rust-orange/20 p-4 text-center text-sm border border-rust-orange">
                                <span className="text-rust-orange font-mono">[PANIC!]</span> For optimal experience, please enable
                                JavaScript. Some features may be limited without it.
                            </div>
                        </noscript>
                        <AnimatedBackground />
                        <BlobHeader />
                        <main className="flex-1 relative z-10">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
