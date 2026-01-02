"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Package,
  Calendar,
  MapPin,
  Thermometer,
  Award,
  Shield,
  Truck,
  Globe,
  CheckCircle,
  Star,
  Users,
  Container,
  Clock,
} from "lucide-react";

interface BulkProduct {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  annualProduction: string;
  currentAvailability: string;
  harvestSeason: string;
  varieties: string[];
  origin: string;
  packaging: string[];
  storage: string;
  certifications: string[];
  qualityProcess: string[];
  exportExperience: string;
  deliveryPorts: string;
  logisticsSupport: string;
  testimonials: Array<{
    company: string;
    location: string;
    text: string;
  }>;
}

interface BulkProductDetailProps {
  product: BulkProduct;
}

export default function BulkProductDetail({ product }: BulkProductDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>{" "}
            /
            <Link href="/products" className="hover:text-orange-500 ml-1">
              Products
            </Link>{" "}
            /
            <span className="text-gray-900 dark:text-gray-100 ml-1">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-white/20 text-white mb-4">
                  {product.subtitle}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-orange-100 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-3 text-lg">
                    Contact for Pricing
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Inquire Now
                </Button>
              </div>
            </div>

            <div className="relative w-full max-w-[400px] aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl mx-auto flex items-center justify-center overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Availability & Capacity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Availability & Capacity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-6 h-6 text-orange-500" />
                  <span>Annual Production</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {product.annualProduction}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Total yearly capacity from our farms
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Container className="w-6 h-6 text-green-500" />
                  <span>Current Stock</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {product.currentAvailability}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Ready for immediate export
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <span>Harvest Season</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-blue-600 mb-2">
                  {product.harvestSeason}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimal quality period
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Varieties & Origin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Available Varieties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.varieties.map((variety, index) => (
                      <Badge key={index} variant="secondary">
                        {variety}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Origin:</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {product.origin}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Packaging & Storage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center space-x-2">
                    <Package className="w-4 h-4" />
                    <span>Packaging Options:</span>
                  </h4>
                  <ul className="space-y-1">
                    {product.packaging.map((option, index) => (
                      <li
                        key={index}
                        className="text-gray-600 dark:text-gray-400 flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center space-x-2">
                    <Thermometer className="w-4 h-4" />
                    <span>Storage Conditions:</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {product.storage}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quality & Certification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Quality & Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-orange-500" />
                  <span>International Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span className="text-gray-900 dark:text-gray-100 text-sm">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                  <span>Quality Control Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.qualityProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-900 dark:text-gray-100 text-sm">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Samples Available
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Free samples available for qualified bulk buyers. Contact us
                    for sample requests.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Trust & Export Guarantee */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Trust & Export Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Export Experience
                </h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {product.exportExperience}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Serving international markets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Global Delivery
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {product.deliveryPorts}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Temperature-controlled shipping
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Logistics Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {product.logisticsSupport}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Client Testimonials
            </h3>
            <div className="space-y-6">
              {product.testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-orange-100 dark:border-orange-800"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-orange-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 italic">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            {testimonial.company}
                          </div>
                          <div className="text-sm text-orange-500">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Import {product.name}?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact our export team for detailed quotations, shipping
            arrangements, and bulk pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Bulk Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
