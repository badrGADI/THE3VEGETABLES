"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingCart,
  Heart,
  Share2,
  Package,
  Truck,
  Shield,
  Award,
  MapPin,
  Calendar,
  Thermometer,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  price: number;
  bulkPrice: number;
  unit: string;
  inStock: boolean;
  organic: boolean;
  shortDescription: string;
  variety: string;
  origin: string;
  availableQuantity: string;
  yearlyProduction: string;
  seasonalAvailability: string;
  packaging: string;
  storage: string;
  certifications: string[];
  qualitySteps: string[];
  testimonials: Array<{
    company: string;
    location: string;
    text: string;
  }>;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600 dark:text-gray-400">
            <span>Shop</span> / <span>{product.category}</span> /{" "}
            <span className="text-gray-900 dark:text-gray-100">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white dark:bg-gray-800">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-orange-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.organic && (
                  <Badge className="bg-green-500">Organic</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {product.shortDescription}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Retail Price
                  </div>
                  <div className="text-3xl font-bold text-orange-500">
                    ${product.price.toFixed(2)}/{product.unit}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Bulk Price (1+ ton)
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    ${product.bulkPrice}/ton
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Number.parseInt(e.target.value))
                    }
                    className="w-20 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {product.unit}
                  </span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-orange-700 hover:bg-orange-800 text-white">
                  Add to Quote Request
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Request Bulk Quote
              </Button>
            </div>
          </div>
        </div>

        {/* About This Product */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About {product.name}
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Our {product.name.toLowerCase()} are sourced directly from the fertile growing regions of {product.origin}, where optimal climate conditions and rich soil produce exceptional quality produce. Grown using sustainable agricultural practices, each {product.category.toLowerCase()} is carefully cultivated to meet the highest standards of flavor, nutrition, and freshness.
            </p>
            <p>
              We offer premium {product.variety.toLowerCase()} varieties that are hand-selected at peak ripeness. Our experienced farming team monitors the entire growing cycle, from seedling to harvest, ensuring consistent quality throughout the season. The {product.seasonalAvailability} growing period allows us to supply fresh {product.name.toLowerCase()} during the natural harvest window.
            </p>
            <p>
              Our {product.storage} storage conditions ensure that every shipment arrives in optimal condition. Each batch undergoes rigorous quality control checks before packing. With our streamlined supply chain, we deliver directly from our farms to your destination, guaranteeing farm-to-table freshness. We invite you to experience the superior taste and quality of Moroccan {product.name.toLowerCase()} today.
            </p>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="availability" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
            <TabsTrigger value="trust">Trust</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Availability Section */}
          <TabsContent value="availability">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Package className="w-5 h-5 text-orange-500" />
                    <span>Current Stock</span>
                  </h3>
                
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {product.availableQuantity}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Available for immediate shipping
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>Annual Production</span>
                  </h3>
                
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {product.yearlyProduction}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Total yearly harvest capacity
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>Season</span>
                  </h3>
                
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {product.seasonalAvailability}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Best quality period
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Details Section */}
          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3>Product Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      Variety
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {product.variety}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Origin</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {product.origin}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3>Packaging & Storage</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                      <Package className="w-4 h-4" />
                      <span>Packaging Options</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {product.packaging}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                      <Thermometer className="w-4 h-4" />
                      <span>Storage Conditions</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {product.storage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Quality Section */}
          <TabsContent value="quality">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    <span>Certifications</span>
                  </h3>
                
                <div>
                  <div className="grid grid-cols-1 gap-3">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-900 dark:text-gray-100">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span>Quality Control</span>
                  </h3>
                
                <div>
                  <div className="space-y-3">
                    {product.qualitySteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-orange-600 text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-gray-900 dark:text-gray-100">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg border p-6">
              
                <h3>Sample Availability</h3>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We offer free samples for bulk orders (minimum 1 ton). Samples
                  include quality certificates and detailed product
                  specifications.
                </p>
                <Button variant="outline">Request Sample</Button>
              </div>
            </div>
          </TabsContent>

          {/* Trust Section */}
          <TabsContent value="trust">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Truck className="w-5 h-5 text-orange-500" />
                    <span>Export Experience</span>
                  </h3>
                
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Years in Export</span>
                      <span className="font-bold">15+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Countries Served</span>
                      <span className="font-bold">50+ Countries</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Monthly Shipments</span>
                      <span className="font-bold">200+ Containers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                
                  <h3 className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span>Guarantees</span>
                  </h3>
                
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Quality guarantee or full refund</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>On-time delivery commitment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Temperature-controlled shipping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>24/7 customer support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reviews Section */}
          <TabsContent value="reviews">
            <div className="space-y-6">
              {product.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                  <div className="p-6">
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
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
