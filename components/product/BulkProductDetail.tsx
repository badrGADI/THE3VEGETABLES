import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Package,
  Calendar,
  Award,
  Shield,
  Truck,
  Globe,
  CheckCircle,
  Star,
  Users,
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
        {/* Product Summary */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our {product.name.toLowerCase()} are sourced from {product.origin}
              , where optimal growing conditions and generations of farming
              expertise ensure exceptional quality. We offer{" "}
              {product.varieties.join(", ")} varieties, harvested during the{" "}
              {product.harvestSeason.toLowerCase()} season to capture peak
              flavor and nutritional value. With an annual production capacity
              of {product.annualProduction.toLowerCase()} and{" "}
              {product.currentAvailability.toLowerCase()}, we maintain
              consistent supply for our international partners. Each shipment is
              packed in {product.packaging.join(", ")} and stored under
              controlled conditions ({product.storage}) to preserve freshness
              from farm to destination. All products carry{" "}
              {product.certifications.join(", ")}, reflecting our commitment to
              the highest food safety and quality standards.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our quality control process for this product involves{" "}
              {product.qualityProcess.join(", ")}. These rigorous procedures
              ensure that every shipment meets the specific requirements of our
              international buyers, whether supplying retail chains in Europe,
              wholesale markets in the Middle East, or food processing
              facilities in Africa. Each batch is traceable through our
              farm-to-port digital tracking system, providing full transparency
              from field to final delivery.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We export {product.name.toLowerCase()} from our facilities in
              Agadir and Casablanca, shipping through the ports of Agadir,
              Casablanca, and Tangier Med to reach markets across Europe, the
              Middle East, Africa, and the Americas. Our{" "}
              {product.exportExperience} of export experience means we
              understand the documentation, phytosanitary requirements, and cold
              chain logistics needed for each destination. With{" "}
              {product.deliveryPorts.toLowerCase()} delivery capability and{" "}
              {product.logisticsSupport.toLowerCase()}, we make international
              procurement straightforward and reliable for our partners.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {product.name} are in strong demand across international markets
              due to their consistent quality, competitive pricing, and reliable
              supply from Morocco. Our customers include wholesale distributors
              supplying major retail chains, food processing companies requiring
              consistent raw material specifications, and importers serving
              ethnic and specialty markets. We offer flexible contract terms
              including spot purchases, monthly supply agreements, and seasonal
              forward contracts with fixed pricing. All exports are fully
              insured and backed by our quality guarantee, with replacement or
              credit issued for any shipment that does not meet the agreed
              specifications upon arrival at the destination port.
            </p>
          </div>
        </section>

        {/* Availability & Capacity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Availability & Capacity
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  {product.annualProduction}
                </div>
                <div className="text-sm text-gray-500">Annual Production</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {product.currentAvailability}
                </div>
                <div className="text-sm text-gray-500">
                  Current Stock Ready for Export
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600 mb-1">
                  {product.harvestSeason}
                </div>
                <div className="text-sm text-gray-500">Harvest Season</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Varieties & Origin
              </h3>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Available Varieties:
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.varieties.map((variety, index) => (
                    <Badge key={index} variant="secondary">
                      {variety}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">
                  Origin:
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {product.origin}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Packaging & Storage
              </h3>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Packaging Options:
                </div>
                <ul className="space-y-1">
                  {product.packaging.map((option, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300 flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">
                  Storage Conditions:
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {product.storage}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Certification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Quality & Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                International Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Quality Control Process
              </h3>
              <div className="space-y-3">
                {product.qualityProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-600 text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800 flex items-center space-x-3">
            <Award className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Samples Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Free samples available for qualified bulk buyers. Contact us for
                sample requests.
              </p>
            </div>
          </div>
        </section>

        {/* Trust & Export Guarantee */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Trust & Export Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
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
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Global Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {product.deliveryPorts}
              </p>
              <p className="text-sm text-gray-500">
                Temperature-controlled shipping
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <Truck className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Logistics Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {product.logisticsSupport}
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Client Testimonials
            </h3>
            <div className="space-y-6">
              {product.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-orange-100 dark:border-orange-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-500" />
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
                        &ldquo;{testimonial.text}&rdquo;
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
                </div>
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
