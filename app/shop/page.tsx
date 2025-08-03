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
