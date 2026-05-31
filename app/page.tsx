import Hero from "@/components/Hero"
import ProductsPreview from "@/components/ProductsPreview"
import WhyChooseUs from "@/components/WhyChooseUs"
import ExportExperience from "@/components/ExportExperience"
import LatestNews from "@/components/LatestNews"
import CallToAction from "@/components/CallToAction"

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Your Trusted Moroccan Agricultural Export Partner</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Based in the fertile agricultural heartland of Agadir, Morocco, The 3 Vegetables is a family-owned export company with over 70 years of farming heritage and 15 years of international trade experience. We specialize in supplying premium fresh fruits and vegetables to wholesale markets, distributors, and importers across Europe, the Middle East, Africa, and the Americas.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our 500-hectare farm operations span the Souss Valley and Doukkala regions, where Mediterranean climate, rich soils, and advanced irrigation systems produce some of the finest produce in North Africa. From seed to shipment, every product meets rigorous GlobalGAP, ISO 22000, and organic certification standards. We handle the entire export chain — harvest, sorting, cold storage, packaging, documentation, and logistics — ensuring your container arrives fresh, on time, and fully compliant with destination country requirements.
          </p>
        </div>
      </section>
      <WhyChooseUs />
      <ProductsPreview />
      <ExportExperience />
      <LatestNews />
      <CallToAction />
    </div>
  )
}
