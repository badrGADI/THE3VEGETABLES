"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Fresh Oranges",
    category: "Fruits",
    image: "/placeholder.svg?height=300&width=300",
    description: "Sweet, juicy oranges packed with vitamin C",
    price: "From $2.50/kg",
  },
  {
    id: 2,
    name: "Organic Tomatoes",
    category: "Vegetables",
    image: "/tomato.png",
    description: "Vine-ripened organic tomatoes, perfect for cooking",
    price: "From $3.20/kg",
  },
  {
    id: 3,
    name: "Fresh Avocados",
    category: "Fruits",
    image: "/placeholder.svg?height=300&width=300",
    description: "Creamy, nutrient-rich avocados ready to eat",
    price: "From $4.80/kg",
  },
  {
    id: 4,
    name: "Bell Peppers",
    category: "Vegetables",
    image: "/placeholder.svg?height=300&width=300",
    description: "Colorful, crunchy bell peppers in red, yellow, and green",
    price: "From $3.60/kg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our premium selection of fresh fruits and vegetables, grown
            with care and delivered with quality guaranteed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-700">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-orange-700 hover:bg-orange-800"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <Button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 text-lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
