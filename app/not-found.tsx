"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the homepage
    router.push("/")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center font-mono">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-rust-orange">panic!</span>(&quot;Page not found&quot;)
        </h1>
        <p className="mb-8 text-muted-foreground">
          <span className="text-rust-orange">/&#47; </span>Redirecting to main()...
        </p>
      </div>
    </div>
  )
}
