"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const products = [
  {
    id: 1,
    slug: "moroccan-tomatoes",
    name: "Fresh Moroccan Tomatoes",
    image: "/placeholder.svg?height=300&width=400&text=Tomatoes",
    description: "Premium quality tomatoes in bulk quantities",
    capacity: "300+ tons/year",
    varieties: "Cherry, Roma, Round",
  },
  {
    id: 2,
    slug: "moroccan-carrots",
    name: "Organic Moroccan Carrots",
    image: "/placeholder.svg?height=300&width=400&text=Carrots",
    description: "Fresh organic carrots for international markets",
    capacity: "200+ tons/year",
    varieties: "Nantes, Imperator",
  },
  {
    id: 3,
    slug: "moroccan-peppers",
    name: "Moroccan Bell Peppers",
    image: "/placeholder.svg?height=300&width=400&text=Peppers",
    description: "Colorful bell peppers in container loads",
    capacity: "150+ tons/year",
    varieties: "Red, Yellow, Green",
  },
  {
    id: 4,
    slug: "moroccan-onions",
    name: "Moroccan Red Onions",
    image: "/placeholder.svg?height=300&width=400&text=Onions",
    description: "High-quality red onions for bulk export",
    capacity: "400+ tons/year",
    varieties: "Red Globe, Spanish",
  },
];

export default function ProductsPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("productsPreview.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t("productsPreview.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t("productsPreview.bulkExport")}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Package className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("productsPreview.capacity")}
                      {product.capacity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("productsPreview.varieties")}
                    {product.varieties}
                  </div>
                </div>

                <Link href={`/products/${product.slug}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    {t("productsPreview.viewDetails")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-3 text-lg bg-transparent"
            >
              {t("productsPreview.viewAllProducts")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
