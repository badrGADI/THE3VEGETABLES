import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Family Farm Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For three generations, our family has been cultivating the fertile lands of Morocco, growing premium
                organic fruits and vegetables with traditional methods combined with modern sustainable practices.
              </p>
              <p className="text-gray-600">
                What started as a small family farm has grown into a trusted supplier for customers worldwide, but we've
                never forgotten our roots and commitment to quality, sustainability, and community.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Sustainable Farming</h3>
                  <p className="text-gray-600">
                    We use eco-friendly practices that protect our soil and environment for future generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Family Values</h3>
                  <p className="text-gray-600">
                    Every product is grown with the same care and attention we'd give to our own family's table.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Global Reach</h3>
                  <p className="text-gray-600">
                    From our farm in Morocco to tables around the world, we ensure freshness every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3">Learn More About Us</Button>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Our farm team"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Organic vegetables"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/placeholder.svg"
                  alt="Fresh fruit harvest"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Farm landscape"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
