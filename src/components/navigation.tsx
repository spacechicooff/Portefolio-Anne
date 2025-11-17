"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experiences", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
          >
            Anne
          </button>

          <div className="hidden sm:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden pb-6 space-y-2 border-t border-border pt-6 animate-in fade-in duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all rounded-lg ${
                  activeSection === item.id
                    ? "text-accent bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
