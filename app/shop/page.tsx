import type { Metadata } from "next"
import ShopHeader from "@/components/shop/ShopHeader"
import ProductGrid from "@/components/shop/ProductGrid"
import CategoryFilter from "@/components/shop/CategoryFilter"

export const metadata: Metadata = {
  title: "Buy Farm-Fresh Fruits & Vegetables Online | Organic & Seasonal Produce",
  description:
    "Explore our full range of organic fruits and vegetables. Straight from our farm to your table. Fast delivery, top quality, and worldwide shipping available.",
  keywords:
    "buy organic fruits vegetables online, fresh produce delivery, moroccan farm products, seasonal fruits vegetables",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHeader />
      <section className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Browse our complete selection of premium Moroccan fruits and vegetables, sourced directly from our family farms in the fertile Souss Valley and Agadir region. Every product is hand-picked at peak ripeness, cold-chain preserved, and shipped fresh to your door. Whether you need a single box or a container load, we deliver consistent quality with every order.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CategoryFilter />
          </aside>
          <main className="lg:col-span-3">
            <ProductGrid />
          </main>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-800 py-16 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Farm Direct Guarantee</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Every product on our online shop is sourced directly from our own farms or from trusted partner growers in our cooperative network. We do not use third-party wholesalers or middlemen, which means you get the freshest possible produce at the most competitive prices. Our integrated supply chain gives us full control over every stage — from seed selection and cultivation to harvesting, packing, and shipping.
            </p>
            <p>
              For wholesale buyers and bulk importers, we recommend visiting our B2B products page where you will find detailed product specifications, container load pricing, and export documentation requirements. Our shop offers an easy way to sample individual products, place smaller trial orders, or purchase seasonal produce in retail-friendly quantities before committing to larger volume contracts.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
