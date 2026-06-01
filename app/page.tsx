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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Export Operations & Global Reach</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Our export operations are headquartered in Agadir, Morocco, with packhouse facilities strategically located near the ports of Agadir, Casablanca, and Tangier Med. These facilities collectively process over 15,000 tons of fresh produce annually, with dedicated sorting lines for vegetables, citrus, and soft fruits. Each packhouse operates under strict hygiene protocols and is certified for export to the European Union, Middle East, Africa, and North American markets.
            </p>
            <p>
              We maintain year-round supply through a combination of open-field cultivation and climate-controlled greenhouse production. This dual approach allows us to extend the natural growing seasons significantly. For example, our greenhouse tomatoes are available from November through April when European production is minimal, while our open-field crops supply the peak summer months. This production calendar, combined with our 500-hectare footprint, enables us to offer competitive pricing across all seasons.
            </p>
            <p>
              Our cold chain infrastructure includes pre-cooling chambers that bring field temperature down to optimal storage levels within two hours of harvest, 5,000 pallet positions of cold storage across three facilities, and a fleet of 20 refrigerated trucks for port delivery. Each reefer container is pre-tested and set to product-specific temperature parameters before loading. We provide real-time temperature monitoring throughout the journey and share data logs with buyers upon request.
            </p>
            <p>
              Documentation and compliance are managed by our dedicated export team, who prepare all required paperwork including Certificates of Origin, Phytosanitary Certificates issued by ONSSA (the Moroccan food safety authority), health certificates, fumigation certificates when required, and any destination-specific documentation. We have exported successfully to over 25 countries and maintain updated knowledge of evolving import regulations in each market.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
