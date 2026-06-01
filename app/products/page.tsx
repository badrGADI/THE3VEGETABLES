import Link from "next/link"
import type { Metadata } from "next"
import ProductsHeader from "@/components/products/ProductsHeader"
import ProductCategories from "@/components/products/ProductCategories"
import QualityTransparency from "@/components/products/QualityTransparency"
import PartnershipSection from "@/components/products/PartnershipSection"
import { allProducts } from "@/lib/products"

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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Why Import from Morocco?</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>Morocco has emerged as one of the world most reliable sources for fresh produce exports, offering several strategic advantages for international buyers. The country proximity to European markets means transit times of just 2-4 days by sea to major European ports, significantly shorter than competing origins in South America or Sub-Saharan Africa. For Middle Eastern and African markets, Moroccan ports provide direct shipping routes with transit times of 5-10 days. The Moroccan climate, with over 300 days of sunshine annually, allows for extended growing seasons and consistent production quality.</p>
            <p>The Moroccan agricultural sector benefits from strong government support through the Green Morocco Plan, which has modernized irrigation infrastructure, funded research into drought-resistant varieties, and established quality control systems aligned with international standards. Moroccan exporters operate under a regulatory framework that enforces compliance with GlobalGAP, BRC, IFS, and organic certification requirements, giving buyers confidence in product safety and traceability. The country free trade agreements with the European Union, United States, Turkey, and several African nations provide tariff preferences that improve price competitiveness.</p>
            <p>Our company, The 3 Vegetables, has been part of this export ecosystem for over 15 years. We have built relationships with growers across Morocco primary agricultural regions, developed efficient logistics partnerships with major shipping lines and freight forwarders, and established a track record of reliable delivery to over 25 countries. Our team of agricultural engineers, quality control specialists, and export documentation experts works together to ensure every shipment meets the specific requirements of each destination market, whether that is Europen retailer protocols, Middle Eastern wholesale market preferences, or African food import regulations.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900 py-16 border-t">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Browse Our Complete Product Catalog</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg">
            {allProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="text-orange-600 hover:text-orange-700 underline underline-offset-2">
                {p.name.replace("Fresh Moroccan ", "").replace("Moroccan ", "").replace("Organic Moroccan ", "").replace("Fresh ", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
