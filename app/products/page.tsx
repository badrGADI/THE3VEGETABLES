import type { Metadata } from "next"
import ProductsHeader from "@/components/products/ProductsHeader"
import ProductCategories from "@/components/products/ProductCategories"
import QualityTransparency from "@/components/products/QualityTransparency"
import PartnershipSection from "@/components/products/PartnershipSection"

export const metadata: Metadata = {
  title: "Bulk Export Products | Moroccan Vegetables & Fruits | MoroccoFresh",
  description:
    "Explore our complete range of bulk export products from Morocco. Premium vegetables and fruits available in container loads for international distribution.",
  keywords:
    "bulk export moroccan vegetables, wholesale moroccan fruits, fresh produce direct from moroccan farm, export vegetables morocco, moroccan agricultural products bulk",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProductsHeader />
      <section className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We supply premium Moroccan vegetables and fruits in bulk quantities for international wholesalers, distributors, and importers. Our product range includes tomatoes, peppers, carrots, onions, potatoes, cucumbers, oranges, lemons, avocados, melons, watermelons, and table grapes — all available in 20ft and 40ft container loads with full logistics support from farm to destination port.
          </p>
        </div>
      </section>
      <ProductCategories />
      <QualityTransparency />
      <PartnershipSection />
    </div>
  )
}
