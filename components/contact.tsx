"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Mail, Linkedin, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0 && formRef.current) {
      emailjs
        .sendForm(
          "service_6fu7sue",     //Service ID EmailJS
          "template_707f2ni",    // Remplace par ton Template ID EmailJS
          formRef.current,
          "82T2_m_2TQgQKQm3h"       // Remplace par ta Public Key EmailJS
        )
        .then(() => {
          setSubmitted(true)
          setTimeout(() => setSubmitted(false), 5000)
          setFormData({ name: "", email: "", message: "" })
          setErrors({})
        })
        .catch(() => {
          alert("Échec de l'envoi, réessaye.")
        })
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light text-foreground mb-2">Get In Touch</h2>
          <div className="h-0.5 w-12 bg-accent mb-8" />
          <p className="text-muted-foreground">Let's connect and explore opportunities together.</p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl shadow-md p-8 md:p-10 mb-12 border border-border">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-foreground uppercase tracking-wide mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                  errors.name ? "border-destructive" : "border-border"
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-foreground uppercase tracking-wide mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                  errors.email ? "border-destructive" : "border-border"
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-foreground uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors min-h-28 resize-none ${
                  errors.message ? "border-destructive" : "border-border"
                }`}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-accent/5 border border-accent flex items-center gap-3 mt-4 rounded-lg">
                <CheckCircle className="text-accent shrink-0" size={18} />
                <p className="text-accent text-sm font-medium">Thank you! I'll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-12">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-6">Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={18} className="text-accent" />
                <span className="font-medium text-foreground">Email</span>
              </div>
              <a href="mailto:annethiriet03@gmail.com" className="text-accent hover:underline text-sm">
                annethiriet03@gmail.com
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Linkedin size={18} className="text-accent" />
                <span className="font-medium text-foreground">LinkedIn</span>
              </div>
              <a
                href="https://www.linkedin.com/in/anne-thiriet-617b95258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-sm"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
