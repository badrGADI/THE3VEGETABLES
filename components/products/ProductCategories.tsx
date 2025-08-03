"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Leaf } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const vegetables = [
  {
    id: 1,
    slug: "moroccan-tomatoes",
    name: "Fresh Moroccan Tomatoes",
    image: "/placeholder.svg?height=300&width=400&text=Tomatoes",
    description: "Premium quality tomatoes in bulk quantities",
    capacity: "300+ tons/year",
    varieties: "Cherry, Roma, Round",
    season: "March - November",
    organic: true,
  },
  {
    id: 2,
    slug: "moroccan-carrots",
    name: "Organic Moroccan Carrots",
    image: "/placeholder.svg?height=300&width=400&text=Carrots",
    description: "Fresh organic carrots for international markets",
    capacity: "200+ tons/year",
    varieties: "Nantes, Imperator",
    season: "October - June",
    organic: true,
  },
  {
    id: 3,
    slug: "moroccan-peppers",
    name: "Moroccan Bell Peppers",
    image: "/placeholder.svg?height=300&width=400&text=Peppers",
    description: "Colorful bell peppers in container loads",
    capacity: "150+ tons/year",
    varieties: "Red, Yellow, Green",
    season: "April - October",
    organic: false,
  },
  {
    id: 4,
    slug: "moroccan-onions",
    name: "Moroccan Red Onions",
    image: "/placeholder.svg?height=300&width=400&text=Onions",
    description: "High-quality red onions for bulk export",
    capacity: "400+ tons/year",
    varieties: "Red Globe, Spanish",
    season: "May - September",
    organic: false,
  },
  {
    id: 5,
    slug: "moroccan-potatoes",
    name: "Moroccan Potatoes",
    image: "/placeholder.svg?height=300&width=400&text=Potatoes",
    description: "Premium potatoes for international distribution",
    capacity: "500+ tons/year",
    varieties: "Spunta, Nicola, Désirée",
    season: "January - May",
    organic: false,
  },
  {
    id: 6,
    slug: "moroccan-cucumbers",
    name: "Fresh Moroccan Cucumbers",
    image: "/placeholder.svg?height=300&width=400&text=Cucumbers",
    description: "Crisp cucumbers perfect for export markets",
    capacity: "180+ tons/year",
    varieties: "Long English, Mini",
    season: "October - May",
    organic: true,
  },
];

const fruits = [
  {
    id: 7,
    slug: "moroccan-oranges",
    name: "Moroccan Oranges",
    image: "/placeholder.svg?height=300&width=400&text=Oranges",
    description: "Sweet, juicy oranges packed with vitamin C",
    capacity: "600+ tons/year",
    varieties: "Valencia, Navel",
    season: "November - May",
    organic: true,
  },
  {
    id: 8,
    slug: "moroccan-lemons",
    name: "Fresh Moroccan Lemons",
    image: "/placeholder.svg?height=300&width=400&text=Lemons",
    description: "Premium quality lemons for global markets",
    capacity: "250+ tons/year",
    varieties: "Eureka, Meyer",
    season: "October - June",
    organic: true,
  },
  {
    id: 9,
    slug: "moroccan-avocados",
    name: "Moroccan Avocados",
    image: "/placeholder.svg?height=300&width=400&text=Avocados",
    description: "Creamy, nutrient-rich avocados ready for export",
    capacity: "120+ tons/year",
    varieties: "Hass, Fuerte",
    season: "November - April",
    organic: false,
  },
  {
    id: 10,
    slug: "moroccan-melons",
    name: "Moroccan Melons",
    image: "/placeholder.svg?height=300&width=400&text=Melons",
    description: "Sweet melons perfect for international markets",
    capacity: "300+ tons/year",
    varieties: "Cantaloupe, Honeydew",
    season: "May - September",
    organic: false,
  },
  {
    id: 11,
    slug: "moroccan-watermelons",
    name: "Moroccan Watermelons",
    image: "/placeholder.svg?height=300&width=400&text=Watermelons",
    description: "Refreshing watermelons in bulk quantities",
    capacity: "400+ tons/year",
    varieties: "Crimson Sweet, Sugar Baby",
    season: "June - September",
    organic: false,
  },
  {
    id: 12,
    slug: "moroccan-grapes",
    name: "Moroccan Table Grapes",
    image: "/placeholder.svg?height=300&width=400&text=Grapes",
    description: "Premium table grapes for export markets",
    capacity: "200+ tons/year",
    varieties: "Red Globe, Thompson",
    season: "July - October",
    organic: true,
  },
];

function ProductCard({
  product,
  category,
}: {
  product: any;
  category: string;
}) {
  const { t } = useTranslation();

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <Badge className="bg-orange-500 text-white">
              {t(`categories.${category.toLowerCase()}`)}
            </Badge>
            {product.organic && (
              <Badge className="bg-green-500 text-white">
                {t("categories.organic")}
              </Badge>
            )}
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
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {t("categories.capacity")}:
              </span>
              <span className="font-semibold text-orange-600">
                {product.capacity}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {t("categories.varieties")}:
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {product.varieties}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {t("categories.season")}:
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {product.season}
              </span>
            </div>
          </div>

          <Link href={`/products/${product.slug}`}>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              {t("productsPreview.viewDetails")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProductCategories() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Vegetables Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-4">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-green-800 dark:text-green-300 font-medium">
                {t("categories.vegetables")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t("categories.vegetablesTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              {t("categories.vegetablesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vegetables.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category="vegetable"
              />
            ))}
          </div>
        </div>

        {/* Fruits Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-4">
              <Package className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 dark:text-orange-300 font-medium">
                {t("categories.fruits")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t("categories.fruitsTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              {t("categories.fruitsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fruits.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category="fruit"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
