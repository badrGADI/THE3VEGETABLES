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
      <WhyChooseUs />
      <ProductsPreview />
      <ExportExperience />
      <LatestNews />
      <CallToAction />
    </div>
  )
}
