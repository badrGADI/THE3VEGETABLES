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
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Export Capabilities</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Our farming operations span 500 hectares across Morocco most productive agricultural regions. In the Souss Valley, our climate-controlled greenhouses produce tomatoes, bell peppers, and cucumbers from November to April, filling the winter supply gap in European markets. The fertile plains of Doukkala and Gharb supply our root vegetables including carrots, onions, and potatoes, while the Atlantic coastal region around Agadir produces our citrus fruits.
            </p>
            <p>
              Each product category follows dedicated quality protocols tailored to the commodity type and destination market requirements. Our tomatoes are graded by size and Brix value for European retailers, our citrus undergoes color sorting and juice content testing, and our root vegetables are washed, sized, and packed according to buyer specifications. We offer both conventional and certified organic production lines.
            </p>
            <p>
              Logistically, we consolidate shipments at our packhouse facilities and deliver to port within 24 hours of harvest. Cold chain integrity is maintained through pre-cooling chambers, refrigerated trucks, and reefer containers set to product-specific temperature ranges. We provide weekly supply programs and spot availability throughout each product season.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800 py-16 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Sourcing & Quality Standards</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>All products listed in our bulk export catalog are sourced either from our own 500-hectare farms or from trusted partner growers who meet our strict quality and sustainability criteria. Our internal sourcing team works directly with growers throughout Morocco major growing regions, including the Souss Valley, Doukkala, Gharb, and the Agadir coastal belt. We conduct regular audits of each partner farm to verify compliance with GlobalGAP, organic, and other certification standards before their produce enters our supply chain.</p>
            <p>Each product page provides detailed technical specifications including available varieties, packaging options, optimal storage conditions, and current stock availability. For export pricing, minimum order quantities, and delivery terms, please contact our sales team who will provide a tailored quotation based on your destination, volume requirements, and preferred delivery timeline. We work with FOB, CNF, CIF, and DAP terms and can arrange door-to-door logistics for most international destinations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
