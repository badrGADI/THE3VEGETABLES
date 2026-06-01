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
  {
    id: 7,
    slug: "moroccan-cucumbers",
    name: "Fresh Cucumbers",
    category: "Vegetables",
    image: "/placeholder.svg",
    price: 2.0,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Crisp and refreshing greenhouse-grown cucumbers with a mild flavor and firm texture. Perfect for salads, pickling, or fresh snacking.",
  },
  {
    id: 8,
    slug: "moroccan-grapes",
    name: "Table Grapes",
    category: "Fruits",
    image: "/placeholder.svg",
    price: 3.9,
    unit: "kg",
    inStock: true,
    organic: false,
    description: "Sweet and juicy table grapes in green and red varieties. Grown in the sun-drenched vineyards of Morocco, known for their excellent sugar content and firm texture.",
  },
  {
    id: 9,
    slug: "moroccan-melons",
    name: "Sweet Melons",
    category: "Fruits",
    image: "/placeholder.svg",
    price: 3.0,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Aromatic and sweet melons with vibrant orange flesh. Harvested at peak ripeness for maximum sweetness, perfect for fresh consumption and fruit platters.",
  },
  {
    id: 10,
    slug: "moroccan-onions",
    name: "Red Onions",
    category: "Vegetables",
    image: "/placeholder.svg",
    price: 1.8,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Mild and flavorful red onions with a beautiful deep purple color. Grown in the rich soils of Doukkala, ideal for salads, cooking, and export.",
  },
  {
    id: 11,
    slug: "moroccan-potatoes",
    name: "Potatoes",
    category: "Vegetables",
    image: "/placeholder.svg",
    price: 1.5,
    unit: "kg",
    inStock: true,
    organic: false,
    description: "High-quality potatoes with smooth skin and creamy flesh. Versatile for boiling, roasting, mashing, or frying. Consistent size and excellent storage qualities.",
  },
  {
    id: 12,
    slug: "moroccan-watermelons",
    name: "Watermelons",
    category: "Fruits",
    image: "/placeholder.svg",
    price: 2.5,
    unit: "kg",
    inStock: true,
    organic: true,
    description: "Large, sweet watermelons with deep red flesh and high sugar content. Grown in the Souss Valley with drip irrigation for consistent quality and size.",
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
