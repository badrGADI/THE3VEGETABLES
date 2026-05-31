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
    </div>
  )
}
