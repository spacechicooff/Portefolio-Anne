"use client"

import Image from "next/image"

interface HeroProps {
  onNavigate?: (section: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate("experiences")
    }
  }

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance text-foreground">
                Anne Thiriet
              </h1>
              <p className="text-lg md:text-xl text-accent font-semibold tracking-wide">
                MARKETING & PROJECT MANAGEMENT
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Master 1 student at EM Strasbourg. Passionate about digital strategy, strategic project execution, and
              building meaningful professional connections that drive real business impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleViewWork}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
              >
                View My Work
              </button>
              <a
                href="https://www.linkedin.com/in/anne-thiriet-617b95258/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Professional photo */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/design-mode/1761078337078.jpeg"
              alt="Anne Thiriet - Professional portrait"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
