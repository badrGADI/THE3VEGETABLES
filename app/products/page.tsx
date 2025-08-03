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
      <ProductCategories />
      <QualityTransparency />
      <PartnershipSection />
    </div>
  )
}
