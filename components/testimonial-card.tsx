import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <Quote className="h-8 w-8 text-green-500 mb-4" />
      <p className="text-gray-700 mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  )
}

