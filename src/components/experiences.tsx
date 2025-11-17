"use client"

import { useState } from "react"
import { ChevronDown, Award, Star, Users, CheckCircle, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Luxury Events Head Hostess & Coordinator",
    company: "Florence Doré Agency",
    period: "November 2022 – Present",
    description:
      "Supervises and manages teams of hosts and hostesses for high-end events in fashion, luxury, art, and corporate sectors. Coordinates on-site operations, VIP reception, and guest flow management, ensuring adherence to protocol. Trains teams on luxury service standards, professional conduct, and brand image requirements, supporting prestigious events such as product launches, fashion shows, trade fairs, and exclusive dinners with international brands.",
    highlights: [
      "Managed teams for luxury events in fashion, art, and corporate sectors",
      "Coordinated VIP reception and guest flow during high-profile events",
      "Trained staff on luxury service standards and brand image",
      "Handled complex event challenges while maintaining impeccable brand reputation"
    ],
    skills: ["Event Coordination", "Team Management", "Luxury Customer Service", "VIP Reception", "Training & Development", "Problem Solving", "Protocol Compliance", "Brand Image Management"],
    type: "current",
    image: "/images/marques.png"
  },
  {
    title: "Event Project Manager Assistant",
    company: "Social Studio",
    period: "April 2025 - August 2025",
    description:
      "Assisted in coordinating high-end international events for 50 to 4,000 guests. Managed supplier relations, researched venues and vendors, collaborated on creative concepts with designers, handled logistics and on-site operations, and supported budget tracking and administrative tasks. Served as liaison between internal departments and local markets, ensuring seamless guest transfers and event execution.",
    highlights: [
      "Coordinated international events with up to 4,000 guests",
      "Managed supplier relations and venue/vendor research",
      "Collaborated on creative concepts with design teams",
      "Handled logistics, on-site operations, and guest transfers",
      "Supported budget tracking and administrative follow-up"
    ],
    skills: ["Event Coordination", "Logistics Management", "Supplier Relations", "Budget Tracking", "Creative Collaboration", "Team Communication", "Project Management", "Guest Experience Management"],
    type: "past",
    image: "/images/marques2.png"
  },
  {
    title: "Sales Advisor",
    company: "Louis Vuitton",
    period: "June 2023 - September 2023",
    description:
      "Assisted customers throughout the sales process from reception to payment, ensuring a smooth and high-quality experience. Managed visitor reception, stock, and the visual organization of sales areas, providing excellent service to international clientele.",
    highlights: [
      "Provided exceptional service to international customers",
      "Managed stock and inventory efficiently",
      "Ensured optimal visual merchandising of sales areas",
      "Facilitated smooth sales transactions from start to finish"
    ],
    skills: ["Customer Service", "Sales Management", "Stock Management", "Visual Merchandising", "Communication", "Client Relations"],
    type: "past"
  },
  {
    title: "Assistant booker - Emily",
    company: "Models agency",
    period: "December 2023 - March 2024",
    description:
      "Worked as an Assistant Booker at Emily Models Agency, handling the registration and management of actors’ and models’ profiles for advertising campaigns. Responded to client requests for casting and ensured all talent profiles were kept up to date within the agency’s database",
    highlights: [
      "Advertising campaign agency in which I register profiles such as actors and models",
      "Responding to profile requests to produce advertisements",
      "Update profiles registered with the agency",
    ],
    skills: ["Talent Management", "Client Communication", "Profile Registration", "Advertising Coordination", "Database Management", "Attention to Detail", "Organization", "Time Management"],
    type: "past"
  },
  {
    title: "Extras Myrole",
    company: "Myrole",
    period: "December 2023 - March 2024",
    description:
      "Provided exceptional customer service and merchandising support. Managed point-of-sale operations and maintained optimal product displays.",
    highlights: [
      "Extras for some Netflix programmes",
      "Appearances in scenes from films and series",
      "Familiarity with filming scenes",
      "Observation internship at the Musée du Petit Palais",
    ],
    skills: ["Adaptability", "Teamwork", "Communication", "Attention to detail", "Time management", "Cultural awareness"],
    type: "past"
  },
]

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-16 md:mb-24">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-3">
                Professional Experience
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Expert in event coordination and VIP hosting, combining organization, high-end client relations, and operational management for international projects.
              </p>
            </div>
          </div>
          <div className="h-1 w-20 bg-linear-to-r from-accent via-accent to-accent/30 rounded-full" />
        </div>

        <div className="space-y-6 mb-24">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-12 bottom-0 w-px bg-linear-to-b from-accent via-accent/40 to-transparent" />

              {/* Timeline dot */}
              <div className="absolute left-0 top-5 w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse" />
                <div
                  className={`relative w-4 h-4 rounded-full border-2 ${
                    exp.type === "current" ? "bg-accent border-accent" : "bg-background border-accent"
                  }`}
                />
              </div>

              {/* Card */}
              <button onClick={() => toggleExpanded(index)} className="w-full text-left ml-20 group">
                <div className="p-8 border border-border rounded-xl hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:bg-muted/30 backdrop-blur-sm">
                  {/* Header with title and badge */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h3>
                        {exp.type === "current" && (
                          <span className="px-3 py-1 text-xs font-bold bg-accent text-accent-foreground rounded-full uppercase tracking-wider">
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Company and period */}
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-lg font-semibold text-accent">{exp.company}</span>
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-border rounded-full" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      size={24}
                      className={`text-accent shrink-0 transition-all duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Main description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  {/* Image (if exists) */}
                  {exp.image && (
                    <div className="mb-4">
                      <img
                        src={exp.image}
                        alt={`${exp.title} at ${exp.company}`}
                        className="w-1/2 max-h-58 rounded-lg object-cover"
                      />
                    </div>
                  )}

                  {/* Expanded content */}
                  {expandedIndex === index && (
                    <div className="mt-8 pt-8 border-t border-border/50 space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                          <TrendingUp size={16} className="text-accent" />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20"
                            >
                              <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                          Skills Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium rounded-full border border-accent/30 transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
