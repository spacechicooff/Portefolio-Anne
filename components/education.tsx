"use client"

import { useState } from "react"
import Image from "next/image"

interface EducationItem {
  id: string
  degree: string
  school: string
  period: string
  specialization: string
  details: string[]
}

export default function Education() {
  const [expandedEducation, setExpandedEducation] = useState<string | null>(null)

  const education: EducationItem[] = [
    {
      id: "efap",
      degree: "EFAP",
      school: "Paris, France",
      period: "September 2025 - Present",
      specialization: "Luxury Marketing & Strategic Communication",
      details: [
        "Courses in strategic communication, luxury marketing, and event project management",
        "Training in brand storytelling, press relations, and content creation",
        "Development of creative concepts and participation in real client projects",
        "Management & Project Skills",
      ],
    },
    {
      id: "eiml",
      degree: "Bachelor Luxury Marketing and Management",
      school: "EIML - International School of Luxury Marketing, Paris, France",
      period: "June 2022 - Present",
      specialization: "Communication, Management & Marketing",
      details: [
        "Courses in communication, management and marketing",
        "Courses in fashion history, art history, design history and film history",
        "Courses in press relations and writing techniques",
        "English and Mandarin",
        "Seminars in gemology, textile, perfume and semiology",
      ],
    },
    {
      id: "shihchien",
      degree: "International Exchange Program",
      school: "Shih Chien University",
      period: "September 2025 - January 2026",
      specialization: "4th Year Preparatory Program for MBA - Full English Track",
      details: [
        "Completed courses taught entirely in English focusing on international business, design, and digital innovation",
        "Practiced and improved Mandarin language skills in an immersive environment",
        "Studied cross-cultural management and global marketing strategies",
        "Engaged in creative projects involving digital communication and content creation",
        "Strengthened intercultural communication and adaptability through collaboration with diverse international peers",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Education</h2>
          <div className="h-1 w-14 bg-linear-to-r from-accent to-secondary rounded-full mx-auto" />
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-sm transition-all duration-200"
            >
              <button
                onClick={() =>
                  setExpandedEducation(expandedEducation === edu.id ? null : edu.id)
                }
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors duration-200"
              >
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-accent font-medium">{edu.school}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{edu.period}</p>
                </div>
                <div className="text-xl font-semibold text-muted-foreground ml-3">
                  {expandedEducation === edu.id ? "-" : "+"}
                </div>
              </button>

              {expandedEducation === edu.id && (
                <div className="px-5 pb-5 border-t border-border bg-muted/10">
                  <p className="text-sm font-medium text-foreground mt-3 mb-2">
                    {edu.specialization}
                  </p>
                  <ul className="space-y-1.5">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer - Paris & Taipei */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
              Paris
            </h3>
            <div className="h-0.5 w-16 bg-linear-to-r from-accent to-secondary rounded-full" />
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
              Taipei
            </h3>
          </div>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            A dual journey of creativity and culture
          </p>

          {/* Images */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-xl shadow-sm border border-border h-64 md:h-80">
              <Image
                src="/images/paris.jpg"
                alt="Paris"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-sm border border-border h-64 md:h-80">
              <Image
                src="/images/taipei.jpg"
                alt="Taipei"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
