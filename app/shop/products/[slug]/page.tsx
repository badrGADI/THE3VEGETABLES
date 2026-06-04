import type { Metadata } from "next"
import ProductDetail from "@/components/product/ProductDetail"
import { allProducts, vegetables, fruits } from "@/lib/products"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

const slugAliases: Record<string, string> = {
  "fresh-oranges": "moroccan-oranges",
  "organic-tomatoes": "moroccan-tomatoes",
  "bell-peppers": "moroccan-peppers",
  "fresh-avocados": "moroccan-avocados",
  "fresh-lemons": "moroccan-lemons",
  "organic-carrots": "moroccan-carrots",
}

function resolveProduct(slug: string) {
  let product = allProducts.find((p) => p.slug === slug)
  if (product) return product

  const alias = slugAliases[slug]
  if (alias) {
    return allProducts.find((p) => p.slug === alias) || null
  }

  return null
}

function adaptProduct(product: any) {
  const isVegetable = vegetables.some((v) => v.id === product.id)
  return {
    id: product.id,
    name: product.name,
    category: isVegetable ? "Vegetables" : "Fruits",
    images: [product.image, product.image, product.image],
    price: isVegetable ? 2.5 : 3.5,
    bulkPrice: isVegetable ? 1800 : 2200,
    unit: "kg",
    inStock: true,
    organic: product.organic,
    shortDescription: product.description,
    variety: (product.varieties || []).join(", "),
    origin: product.origin,
    availableQuantity: product.currentAvailability,
    yearlyProduction: product.annualProduction,
    seasonalAvailability: product.harvestSeason,
    packaging: (product.packaging || []).join(", "),
    storage: product.storage,
    certifications: product.certifications || [],
    qualitySteps: product.qualityProcess || [],
    testimonials: product.testimonials || [],
  }
}

export async function generateStaticParams() {
  const allSlugs = allProducts.map((p) => ({ slug: p.slug }))
  const aliasSlugs = Object.keys(slugAliases).map((slug) => ({ slug }))
  return [...allSlugs, ...aliasSlugs]
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = resolveProduct(slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description:
        "The requested product could not be found. Browse our complete range of premium Moroccan fruits and vegetables available for export.",
    }
  }

  const shopDescription = `Buy premium ${(product.varieties || [product.name]).join(", ").toLowerCase()} directly from Morocco. Freshly harvested, carefully packed, and shipped to your doorstep. Farm-fresh quality guaranteed.`;

  return {
    title: `${product.name} | Fresh Organic Produce from Morocco`,
    description: shopDescription,
    keywords: `${product.name.toLowerCase()}, ${(product.varieties || []).join(", ").toLowerCase()}, moroccan produce, fresh ${product.name.toLowerCase()}`,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = resolveProduct(slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return <ProductDetail product={adaptProduct(product)} />
}
