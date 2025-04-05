import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            StopFoodWaste is a nonprofit organization dedicated to reducing food waste through innovative solutions,
            education, and community engagement. Founded in 2018, we've been working tirelessly to create a more
            sustainable food system.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to reduce food waste at all stages of the food supply chain, from farm to fork, while
            ensuring that surplus food reaches those who need it most.
          </p>

          <h2>Our Vision</h2>
          <p>
            We envision a world where no edible food goes to waste, where resources are used efficiently, and where
            everyone has access to nutritious food.
          </p>

          <h2>Our Team</h2>
          <p>
            Our dedicated team consists of food waste experts, technology specialists, logistics coordinators, and
            passionate volunteers who work together to make our vision a reality.
          </p>

          <h2>Our Approach</h2>
          <p>We take a multi-faceted approach to addressing food waste:</p>

          <ul>
            <li>
              <strong>Technology Solutions:</strong> Our platform connects food businesses with surplus to organizations
              that can distribute it to those in need.
            </li>
            <li>
              <strong>Education and Awareness:</strong> We provide resources and training to help businesses and
              individuals reduce food waste.
            </li>
            <li>
              <strong>Policy Advocacy:</strong> We work with policymakers to develop and implement policies that reduce
              food waste and promote food recovery.
            </li>
            <li>
              <strong>Community Engagement:</strong> We engage communities through events, workshops, and volunteer
              opportunities.
            </li>
          </ul>

          <h2>Our Impact</h2>
          <p>Since our founding, we have:</p>

          <ul>
            <li>Rescued over 1.3 million pounds of food</li>
            <li>Prevented 2.5 million kg of CO2 emissions</li>
            <li>Provided food for more than 50,000 people</li>
            <li>Partnered with 200+ food businesses and 50+ recipient organizations</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="bg-green-600 hover:bg-green-700">Join Our Team</Button>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Support Our Work
          </Button>
        </div>
      </div>
    </div>
  )
}

