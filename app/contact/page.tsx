"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-8">
            Have questions about our programs or want to get involved? We'd love to hear from you. Fill out the form or
            contact us directly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-700">info@waste-not.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-700">
                  123 Green Street
                  <br />
                  Eco City, EC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block mb-2 font-medium">
                  Inquiry Type
                </label>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="volunteer">Volunteer Information</SelectItem>
                    <SelectItem value="donation">Food Donation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

