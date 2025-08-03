import type { Metadata } from "next"
import ProductDetail from "@/components/product/ProductDetail"

interface ProductPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a database or API
const getProduct = (slug: string) => {
  const products = {
    "fresh-oranges": {
      id: 1,
      name: "Fresh Oranges",
      category: "Fruits",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      price: 2.5,
      bulkPrice: 2200,
      unit: "kg",
      inStock: true,
      organic: true,
      shortDescription: "Sweet, juicy oranges packed with vitamin C and natural goodness",
      variety: "Valencia & Navel",
      origin: "FreshFarm, Agadir, Morocco",
      availableQuantity: "500 kg",
      yearlyProduction: "150 tons/year",
      seasonalAvailability: "November - May (Peak season)",
      packaging: "10kg cartons, 15kg wooden crates, or custom packaging",
      storage: "Store at 3-8°C, 85-90% humidity",
      certifications: ["Organic Certified", "GlobalGAP", "ISO 22000"],
      qualitySteps: [
        "Hand-picked at optimal ripeness",
        "Sorted by size and quality",
        "Cold storage within 2 hours",
        "Quality inspection before packaging",
      ],
      testimonials: [
        {
          company: "Fresh Market Co.",
          location: "London, UK",
          text: "Exceptional quality oranges that our customers love. Consistent supply and great service.",
        },
      ],
    },
    "organic-tomatoes": {
      id: 2,
      name: "Organic Tomatoes",
      category: "Vegetables",
      images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
      ],
      price: 3.2,
      bulkPrice: 2800,
      unit: "kg",
      inStock: true,
      organic: true,
      shortDescription: "Vine-ripened organic tomatoes, perfect for cooking and fresh consumption",
      variety: "Roma & Cherry varieties",
      origin: "FreshFarm, Agadir, Morocco",
      availableQuantity: "800 kg",
      yearlyProduction: "200 tons/year",
      seasonalAvailability: "March - November",
      packaging: "5kg plastic crates, 10kg cartons",
      storage: "Store at 12-15°C, avoid direct sunlight",
      certifications: ["Organic Certified", "HACCP", "BRC"],
      qualitySteps: [
        "Harvested at perfect ripeness",
        "Gentle handling to prevent bruising",
        "Temperature controlled storage",
        "Regular quality assessments",
      ],
      testimonials: [
        {
          company: "Mediterranean Foods",
          location: "Barcelona, Spain",
          text: "The best organic tomatoes we've sourced. Great flavor and excellent shelf life.",
        },
      ],
    },
  }

  return products[slug as keyof typeof products] || null
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Fresh Organic Produce from Morocco`,
    description: product.shortDescription,
    keywords: `${product.name.toLowerCase()}, organic ${product.category.toLowerCase()}, moroccan produce, fresh ${product.category.toLowerCase()}`,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return <ProductDetail product={product} />
}
