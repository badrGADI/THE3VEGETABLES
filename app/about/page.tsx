import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Award, Globe, Heart, Truck, TreePine, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Family Farm in Morocco | Sustainable & Organic Agriculture",
  description:
    "Learn about our story, values, and commitment to sustainable farming. Our farm in Morocco grows top-quality fruits and vegetables for local and international markets.",
  keywords:
    "moroccan family farm, sustainable agriculture, organic farming morocco, farm story, agricultural practices",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-emerald-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-28 h-28 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <TreePine className="w-10 h-10 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Family Farm
              <span className="block text-emerald-300">Story</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-white/30 w-16"></div>
              <Sparkles className="w-6 h-6 text-orange-400" />
              <div className="h-px bg-white/30 w-16"></div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Three generations of passion, tradition, and innovation in sustainable agriculture
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">70+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500</div>
                <div className="text-gray-300">Hectares of Land</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                From Humble Beginnings to Global Reach
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our journey began in 1952 when my grandfather, Hassan, started cultivating a small plot of land in the
                fertile valleys of Morocco. With nothing but determination and a deep love for the earth, he grew the
                finest fruits and vegetables the region had ever seen.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, three generations later, we continue his legacy while embracing modern sustainable practices. Our
                500-hectare farm now supplies premium organic produce to customers across 50 countries, but we've never
                forgotten our roots or compromised on quality.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Every fruit and vegetable that leaves our farm carries with it the same care, attention, and love that
                Hassan put into his first harvest over 70 years ago.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/story.png"
                alt="Three generations of our farming family"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from seed to harvest to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We use eco-friendly farming practices that protect our soil, water, and biodiversity for future
                  generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Family Tradition</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every decision we make honors our family's legacy while embracing innovation and modern best
                  practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quality Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We never compromise on quality. Every product meets the highest international standards before it
                  reaches our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Community Care</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We support our local community by providing fair employment and investing in local infrastructure and
                  education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Global Responsibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in responsible global trade that benefits both our customers and our local farming
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Reliable Service</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We guarantee timely delivery and consistent quality, building long-term partnerships with our
                  customers worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainable Practices Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/business.png"
                alt="Sustainable farming practices on our farm"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Sustainable Farming Practices
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We're committed to farming methods that protect our environment while producing the highest quality
                fruits and vegetables.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Water Conservation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Advanced drip irrigation systems reduce water usage by 40% while ensuring optimal plant hydration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Organic Certification</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      100% certified organic practices with no synthetic pesticides or fertilizers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Solar Energy</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Solar panels power 80% of our farm operations, reducing our carbon footprint significantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Soil Health</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Crop rotation and natural composting maintain soil fertility and prevent erosion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate people behind our farm's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Ahmed GADI - Farm Owner"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Ahmed GADI</h3>
                <p className="text-orange-500 font-medium mb-4">Farm Owner & CEO</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Third-generation farmer leading our sustainable agriculture initiatives and global expansion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Ayoub ELOUAZZANI - Agricultural Engineer"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Ayoub ELOUAZZANI</h3>
                <p className="text-orange-500 font-medium mb-4">Agricultural Engineer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert in sustainable farming practices and organic certification processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Badr GADI - Export Manager"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Badr GADI</h3>
                <p className="text-orange-500 font-medium mb-4">Export Manager</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Manages international logistics and ensures quality delivery to customers worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
