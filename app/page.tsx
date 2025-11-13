"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experiences from "@/components/experiences"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === "hero" && <Hero />}
        {activeSection === "about" && <About />}
        {activeSection === "experiences" && <Experiences />}
        {activeSection === "education" && <Education />}
        {activeSection === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
