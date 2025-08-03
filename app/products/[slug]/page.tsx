import type { Metadata } from "next"
import ProductDetail from "@/components/product/BulkProductDetail"

interface ProductPageProps {
  params: {
    slug: string
  }
}

const getProduct = (slug: string) => {
  const products = {
    "moroccan-tomatoes": {
      id: 1,
      name: "Fresh Moroccan Tomatoes",
      subtitle: "Bulk Export",
      image: "/placeholder.svg?height=600&width=800&text=Premium+Moroccan+Tomatoes",
      description:
        "Premium quality tomatoes grown in Morocco's fertile Souss Valley, perfect for international distribution and wholesale markets.",
      annualProduction: "Over 300 tons/year",
      currentAvailability: "50 tons ready for export – Casablanca warehouse",
      harvestSeason: "March - November (Peak: May - September)",
      varieties: ["Cherry Tomatoes", "Roma Tomatoes", "Round Tomatoes", "Beef Tomatoes"],
      origin: "Grown on our certified farms in Souss Valley, Morocco",
      packaging: [
        "10kg plastic crates",
        "15kg wooden boxes",
        "20ft containers (22-24 tons)",
        "40ft containers (26-28 tons)",
      ],
      storage: "Temperature: 12-15°C, Humidity: 85-90%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000", "Organic Certified", "HACCP"],
      qualityProcess: [
        "Hand-picked at optimal ripeness",
        "Sorted by size and quality grade",
        "Cold storage within 2 hours of harvest",
        "Pre-cooling before packaging",
        "Quality inspection at every stage",
      ],
      exportExperience: "15+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics coordination from farm to destination",
      testimonials: [
        {
          company: "European Fresh Ltd",
          location: "Rotterdam, Netherlands",
          text: "Excellent quality tomatoes with consistent supply. Their logistics support made our import process seamless.",
        },
      ],
    },
    "moroccan-carrots": {
      id: 2,
      name: "Organic Moroccan Carrots",
      subtitle: "Bulk Export",
      image: "/placeholder.svg?height=600&width=800&text=Organic+Moroccan+Carrots",
      description:
        "Premium organic carrots grown using sustainable farming practices in Morocco's ideal climate conditions.",
      annualProduction: "Over 200 tons/year",
      currentAvailability: "35 tons ready for export – Agadir warehouse",
      harvestSeason: "October - June (Peak: December - April)",
      varieties: ["Nantes Carrots", "Imperator Carrots", "Chantenay Carrots"],
      origin: "Grown on our organic certified farms in Agadir region, Morocco",
      packaging: ["10kg mesh bags", "20kg cartons", "20ft containers (20-22 tons)", "40ft containers (24-26 tons)"],
      storage: "Temperature: 0-2°C, Humidity: 95-98%, Shelf life: 4-6 months",
      certifications: ["Organic Certified", "GlobalGAP", "ISO 22000", "BRC"],
      qualityProcess: [
        "Harvested at perfect maturity",
        "Washed and sorted by size",
        "Quality grading and inspection",
        "Cold storage immediately after harvest",
        "Regular quality monitoring",
      ],
      exportExperience: "15+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Complete supply chain management",
      testimonials: [
        {
          company: "Organic Distributors Inc",
          location: "Hamburg, Germany",
          text: "Outstanding organic carrots with excellent shelf life. Perfect for our European distribution network.",
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
    title: `${product.name} | Bulk Export from Morocco | MoroccoFresh`,
    description: product.description,
    keywords: `bulk export ${product.name.toLowerCase()}, wholesale moroccan vegetables supplier, ${product.name.toLowerCase()} direct from moroccan farm, export vegetables morocco to europe`,
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
