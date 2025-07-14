import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ayush Chauhan | Full-Stack Developer",
  description:
    "Portfolio of Ayush Chauhan, a Full-Stack Developer specializing in modern web applications and scalable solutions.",
  keywords: [
    "Ayush Chauhan",
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "UI/UX Design",
  ],
  authors: [{ name: "Ayush Chauhan" }],
  creator: "Ayush Chauhan",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushchauhan.com",
    title: "Ayush Chauhan | Full-Stack Developer",
    description:
      "Portfolio of Ayush Chauhan, a Full-Stack Developer specializing in modern web applications and scalable solutions.",
    siteName: "Ayush Chauhan Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Ayush Chauhan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Chauhan | Full-Stack Developer",
    description:
      "Portfolio of Ayush Chauhan, a Full-Stack Developer specializing in modern web applications and scalable solutions.",
    creator: "@ayushchauhan",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}
