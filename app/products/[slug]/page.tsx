import type { Metadata } from "next"
import ProductDetail from "@/components/product/BulkProductDetail"
import { getProduct, allProducts } from "@/lib/products"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const product = getProduct(awaitedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Bulk Export from Morocco | MoroccoFresh`,
    description: product.description,
    keywords: `bulk export ${product.name.toLowerCase()}, wholesale moroccan vegetables supplier, ${product.name.toLowerCase()} direct from moroccan farm, export vegetables morocco to europe`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const awaitedParams = await params;
  const product = getProduct(awaitedParams.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
