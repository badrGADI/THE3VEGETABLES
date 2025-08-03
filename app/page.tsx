import Hero from "@/components/Hero"
import ProductsPreview from "@/components/ProductsPreview"
import WhyChooseUs from "@/components/WhyChooseUs"
import ExportExperience from "@/components/ExportExperience"
import CallToAction from "@/components/CallToAction"

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ProductsPreview />
      <ExportExperience />
      <CallToAction />
    </div>
  )
}
