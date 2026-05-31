
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogData'
import { allProducts } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://t3v.the-3rocks.com'

  // Static pages
  const routeConfig: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/products', priority: 0.9 },
    { path: '/shop', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/blog', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ]

  const routes = routeConfig.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === '/privacy' || path === '/terms' ? 'monthly' : 'weekly') as 'weekly' | 'monthly',
    priority,
  }))

  // Blog posts
  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // Product pages
  const products = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Blog pagination
  const totalPages = Math.ceil(blogPosts.length / 5)
  const blogPages = totalPages > 1
    ? Array.from({ length: totalPages - 1 }, (_, i) => ({
        url: `${baseUrl}/blog?page=${i + 2}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.3,
      }))
    : []

  return [...routes, ...posts, ...products, ...blogPages]
}
