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
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Seasonal Availability & Shipping Information</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>Our product availability follows the natural growing seasons of Morocco Mediterranean climate. From March through November, we offer the widest selection including tomatoes, peppers, cucumbers, melons, watermelons, and table grapes. During the winter months of November through April, our greenhouse production ensures continued supply of tomatoes, peppers, and cucumbers, supplemented by citrus fruits including oranges and lemons which reach peak season from December through May. Root vegetables such as carrots, onions, and potatoes are available year-round with peak harvests in spring and autumn.</p>
            <p>All orders placed through our shop are packed and dispatched within 24-48 hours of ordering for domestic deliveries and within 72 hours of order confirmation for international shipments. We use temperature-controlled packaging for perishable items with ice packs and insulated liners for warm-weather destinations. Express shipping options are available for urgent orders with delivery within 2-4 business days to most European destinations and 5-7 business days to Middle Eastern, African, and North American markets.</p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800 py-16 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Quality & Freshness Guarantee</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>Every product listed in our online shop meets the same rigorous quality standards as our bulk export shipments. Our fruits and vegetables are harvested at peak maturity, sorted by trained graders who inspect each item for size, color, firmness, and visual appeal. Only the top two grades make it to our online shop, ensuring that every box you receive meets professional quality expectations. We stand behind every order with our freshness guarantee if any item does not meet your expectations, we will replace it or issue a full refund.</p>
            <p>For international buyers, we provide full traceability documentation including the farm of origin, harvest date, and quality inspection report with each order. Our packaging is designed for export-grade protection with ventilated cartons, moisture barriers, and cushioning materials that prevent bruising during transit. We ship in insulated boxes with gel ice packs for temperature-sensitive items and use express courier services that handle perishable goods with priority handling throughout the logistics chain.</p>
            <p>Bulk buyers and wholesale importers should note that the pricing on this shop reflects retail and small wholesale quantities. For container-load pricing and volume discounts, we invite you to visit our B2B products page or contact our export team directly for a customized quotation. We offer graduated pricing tiers starting at 50 kg for single-product orders and can scale up to full container loads with proportional freight savings passed on to our volume customers.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900 py-16 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Customer Support & Order Process</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>Our customer support team is available Monday through Friday from 8 AM to 6 PM Moroccan time (GMT+1) to assist with product selection, order placement, and delivery inquiries. You can reach us through the contact form on our website, by email, or by phone. We aim to respond to all inquiries within 2 hours during business hours and within 12 hours for messages received outside of business hours. For urgent orders and time-sensitive deliveries, we recommend contacting us directly so we can prioritize your request.</p>
            <p>Placing an order through our online shop is straightforward. Browse our product selection, add items to your cart, specify the quantity you need (minimum order is 1 kg per product), and proceed to checkout. You will receive an order confirmation email immediately, followed by a shipping notification with tracking information once your package is dispatched. For international orders, please allow additional time for customs processing in the destination country. We provide full support with customs documentation and can prepare any additional certificates required by your local authorities.</p>
            <p>Payment options include major credit cards (Visa, Mastercard, American Express), PayPal, and bank wire transfers for larger orders. All transactions are processed through secure, encrypted payment gateways. For first-time international buyers, we may require verification of your business credentials before processing large orders to ensure compliance with export regulations. Your financial information is never stored on our servers and all payment data is handled directly by our PCI-compliant payment processors.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
