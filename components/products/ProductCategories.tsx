"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Leaf } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

import { vegetables, fruits } from "@/lib/products";

function ProductCard({
  product,
  category,
}: {
  product: any;
  category: string;
}) {
  const { t } = useTranslation();

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden p-0">
  {/* Image section */}
  <div className="relative w-full h-48">
    <Image
      src={product.image || "/placeholder.svg"}
      alt={product.name}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
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

  {/* Content section */}
  <CardContent className="p-6">
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
        <span className="font-semibold text-orange-600">{product.capacity}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          {t("categories.varieties")}:
        </span>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {Array.isArray(product.varieties) ? product.varieties.join(", ") : product.varieties}
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
  </CardContent>
</Card>

  );
}

export default function ProductCategories() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
