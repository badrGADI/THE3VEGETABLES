"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Users,
  Award,
  Globe,
  Heart,
  Truck,
  TreePine,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-emerald-800 to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <TreePine className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              From Farm To
              <span className="block text-emerald-300">The World</span>
            </h1>

            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-white/30 w-16"></div>
              <Sparkles className="w-6 h-6 text-orange-400" />
              <div className="h-px bg-white/30 w-16"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              A family-owned Moroccan farm dedicated to delivering the freshest
              produce to markets across Europe, the Middle East, and beyond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500ha</div>
                <div className="text-gray-300">Hectares Cultivated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
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
                From Humble Beginnings
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our story began in the 1990s when our founder started with a
                small plot of land in the Souss Valley. With hard work,
                dedication, and a deep respect for the land, what began as a
                modest family farm has grown into one of Morocco's leading
                agricultural exporters.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Over three generations, we have refined our techniques, expanded
                our operations, and built lasting relationships with buyers
                across four continents. Our roots remain firmly in the rich
                Moroccan soil that gave us our start.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today we combine traditional farming wisdom with modern
                agricultural technology to produce crops that meet the highest
                international standards — without ever losing sight of the
                values that built this business.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do — from seed to
              shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Sustainability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We farm with the future in mind, using practices that protect
                  soil, water, and biodiversity for generations to come.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Family Tradition
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Three generations of knowledge and passion flow through every
                  decision we make on the farm and in the market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Quality Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every crate that leaves our farm meets strict international
                  quality standards — because our reputation depends on it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Community Care
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We invest in the local communities where we operate, providing
                  fair wages, safe conditions, and development opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Global Responsibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As an international exporter, we take seriously our role in
                  the global food system and the environmental impact of our
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Reliable Service
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our buyers count on us for on-time delivery and consistent
                  quality — a promise we have kept for over two decades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operations Overview */}
      <section className="py-16 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Our Farm Operations
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Our farming operations span 500 hectares across Morocco's most
              productive agricultural regions. In the Souss Valley, our
              greenhouses produce tomatoes, peppers, and cucumbers during the
              winter months when European production is at its lowest. The
              Doukkala region supplies our root vegetables and onions, while the
              citrus orchards around Agadir yield oranges and lemons from
              November through May.
            </p>
            <p>
              We employ 200 permanent farm workers and up to 500 seasonal
              workers during peak harvest periods. Our packhouse facilities in
              Agadir and Casablanca are equipped with modern sorting, grading,
              and cold storage systems capable of processing 20 tons of produce
              per hour. Every shipment undergoes quality inspection by certified
              agronomists before receiving final export clearance.
            </p>
            <p>
              Our logistics network covers all major Moroccan ports including
              Agadir, Casablanca, and Tangier Med, giving us direct access to
              shipping routes to Europe, the Middle East, Africa, and the
              Americas. We manage the entire cold chain with
              temperature-controlled storage and refrigerated containers to
              maintain product freshness from farm gate to destination port.
            </p>
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
                alt="Our sustainable farming practices"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Sustainable Practices
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Environmental stewardship is not a marketing claim for us — it
                is a core operating principle embedded in every aspect of how we
                grow, harvest, and ship our produce.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Water Conservation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Drip irrigation systems reduce water usage by up to 60%
                      compared to traditional flood irrigation methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Organic Certification
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      A growing portion of our farmland is certified organic,
                      meeting EU and USDA organic standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Solar Energy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Solar panels across our packhouse rooftops generate
                      renewable energy that covers 40% of our facility needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Soil Health
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Crop rotation and composting programmes maintain soil
                      fertility naturally, reducing dependence on synthetic
                      fertilisers.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The people behind the farm — passionate, experienced, and
              committed to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/badr.png"
                  alt="Badr Gadi"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Badr Gadi
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                  Founder & CEO
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  With over 25 years in Moroccan agriculture, Badr leads the
                  company's vision and international partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/Ayoub.png"
                  alt="Ayoub Elouazzani"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Ayoub Elouazzani
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                  Head of Export Operations
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Ayoub manages logistics, compliance, and buyer relationships
                  across European and Middle Eastern markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/Ahmed.png"
                  alt="Ahmed Gadi"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Ahmed Gadi
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                  Farm Operations Director
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Ahmed oversees day-to-day farming operations, crop planning,
                  and the implementation of sustainable practices on the ground.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
