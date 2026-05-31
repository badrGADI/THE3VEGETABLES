import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const products = [
  {
    id: 1,
    slug: "moroccan-oranges",
    name: "Fresh Oranges",
    category: "Fruits",
    image: "/orange.png",
    price: 2.5,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Sweet and juicy Valencia oranges, hand-picked at peak ripeness from our orchards in the Souss Valley. Rich in vitamin C and naturally sweet, perfect for fresh consumption or juicing.",
  },
  {
    id: 2,
    slug: "moroccan-tomatoes",
    name: "Organic Tomatoes",
    category: "Vegetables",
    image: "/tomato.png",
    price: 3.2,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Vine-ripened organic tomatoes grown in Morocco's fertile coastal plains. Roma and cherry varieties available, known for their deep red color, firm texture, and rich tomato flavor.",
  },
  {
    id: 3,
    slug: "moroccan-avocados",
    name: "Fresh Avocados",
    category: "Fruits",
    image: "/placeholder.svg",
    price: 4.8,
    unit: "kg",
    inStock: true,
    organic: false,
    description: "Creamy Hass avocados with a rich, buttery texture and nutty flavor. Harvested at optimal maturity and ripened to perfection, ideal for guacamole, salads, and toast.",
  },
  {
    id: 4,
    slug: "moroccan-peppers",
    name: "Bell Peppers",
    category: "Vegetables",
    image: "/pepper.png",
    price: 3.6,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Colorful bell peppers in red, yellow, and green varieties. Grown in Moroccan greenhouses, these peppers are crisp, sweet, and packed with vitamins A and C.",
  },
  {
    id: 5,
    slug: "moroccan-lemons",
    name: "Fresh Lemons",
    category: "Fruits",
    image: "/placeholder.svg",
    price: 2.8,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Zesty Eureka and Meyer lemons from the sun-drenched citrus groves of Agadir. Known for their bright flavor, high juice content, and aromatic peel.",
  },
  {
    id: 6,
    slug: "moroccan-carrots",
    name: "Organic Carrots",
    category: "Vegetables",
    image: "/carrot.png",
    price: 2.2,
    unit: "kg",
    inStock: false,
    organic: true,
    description: "Certified organic Nantes and Imperator carrots grown in sandy loam soils. Sweet, tender, and rich in beta-carotene, harvested at peak sweetness.",
  },
]

export default function ProductGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">All Products</h2>
        <div className="text-gray-600 dark:text-gray-400">Showing {products.length} products</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  {product.organic && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Organic</span>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-700">
                    ${product.price.toFixed(2)}/{product.unit}
                  </span>
                  <Link href={`/products/${product.slug}`}>
                    <Button
                      size="sm"
                      className="bg-orange-700 hover:bg-orange-800"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
