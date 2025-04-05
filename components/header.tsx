"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">StopFoodWaste</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <Link href="/programs" className="text-gray-600 hover:text-green-600">
              Programs
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-green-600">
              Resources
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-green-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Log In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-green-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/programs"
                className="text-gray-600 hover:text-green-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-green-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-green-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-green-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                Log In
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

