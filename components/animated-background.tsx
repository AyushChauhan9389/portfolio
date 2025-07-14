"use client"

import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [rustChars, setRustChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([])

  useEffect(() => {
    // Create Rust-style falling characters
    const chars = "fn{}()[]<>&'static|match=>let mut impl trait use mod pub struct enum Option Result Vec HashMap"
    const rustSymbols = chars
      .split("")
      .concat(["fn", "let", "mut", "impl", "trait", "struct", "enum", "match", "=>", "|", "&"])
    const newChars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      char: rustSymbols[Math.floor(Math.random() * rustSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setRustChars(newChars)
  }, [])

  return (
    <>
      <div className="animated-background js-only" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Rust code rain effect */}
      <div className="rust-code-bg js-only" aria-hidden="true">
        {rustChars.map((item) => (
          <div
            key={item.id}
            className="rust-char"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.char}
          </div>
        ))}
      </div>
    </>
  )
}
