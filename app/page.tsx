import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, BarChart3, Users, Clock } from "lucide-react"
import StatsCounter from "@/components/stats-counter"
import FoodWasteGallery from "@/components/food-waste-gallery"
import TestimonialCard from "@/components/testimonial-card"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 py-24 sm:py-32 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Stop Food Waste</h1>
            <p className="mt-6 text-xl max-w-3xl">
              Join our mission to reduce food waste and create a more sustainable future. Together we can make a
              difference.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter
              icon={<Leaf className="h-8 w-8 text-green-500" />}
              value={13000}
              label="Pounds of Food Saved"
              suffix="+"
            />
            <StatsCounter
              icon={<BarChart3 className="h-8 w-8 text-green-500" />}
              value={250000}
              label="CO2 Emissions Prevented"
              suffix="kg"
            />
            <StatsCounter
              icon={<Users className="h-8 w-8 text-green-500" />}
              value={5000}
              label="People Fed"
              suffix="+"
            />
            <StatsCounter
              icon={<Clock className="h-8 w-8 text-green-500" />}
              value={1}
              label="Years of Impact"
              suffix=""
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're dedicated to reducing food waste through education, technology, and community action. Our
                organization connects surplus food with those who need it most, while helping businesses and individuals
                adopt sustainable practices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Food waste is responsible for approximately 8% of global greenhouse gas emissions. By tackling this
                issue, we're fighting climate change and addressing food insecurity simultaneously.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Our Story</Button>
            </div>
            <div className="lg:w-1/2">
              <FoodWasteGallery />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Identify Surplus</h3>
              <p className="text-gray-700">Businesses and farms register their surplus food through our platform.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Connect & Coordinate</h3>
              <p className="text-gray-700">Our technology matches surplus food with nearby recipient organizations.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Distribute & Track</h3>
              <p className="text-gray-700">Volunteers help transport food, and our system tracks impact metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with this organization has reduced our food waste by 75% and connected us with our community."
              author="Sarah Johnson"
              role="Restaurant Owner"
            />
            <TestimonialCard
              quote="The platform is incredibly easy to use. We've donated over 5,000 pounds of produce that would have gone to waste."
              author="Michael Chen"
              role="Farm Manager"
            />
            <TestimonialCard
              quote="As a food bank, we've been able to provide fresher, more nutritious options to our clients thanks to this program."
              author="Lisa Rodriguez"
              role="Food Bank Director"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Whether you're a business with surplus food, an organization serving those in need, or an individual wanting
            to volunteer, we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Donate Food
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Volunteer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}

