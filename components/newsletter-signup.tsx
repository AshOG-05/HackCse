"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setIsSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
      <p className="text-gray-700 mb-6">
        Join our newsletter to get the latest updates on food waste reduction strategies, success stories, and upcoming
        events.
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          Thank you for subscribing! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  )
}

