import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Globe, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-orange-700 dark:text-orange-500" />
                <span className="text-orange-900 dark:text-orange-200 font-medium">
                  Premium Moroccan Produce
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Bulk Export of
                <span className="text-orange-500 block">Fresh Moroccan</span>
                Vegetables & Fruits
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Direct from our family farms to international markets. Supplying
                wholesalers, distributors, and importers worldwide with premium
                quality produce in container loads.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Container Loads
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    20-40ft containers
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Global Shipping
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Any port worldwide
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Quality Certified
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    GlobalGAP & ISO
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    15+ Years
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Export experience
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-700 text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/nobgmain.png"
                alt="Fresh Moroccan vegetables ready for bulk export"
                width={750}
                height={750}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-orange-100 dark:border-orange-800">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                500+
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Tons/Month
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-orange-100 dark:border-orange-800">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                18+
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
