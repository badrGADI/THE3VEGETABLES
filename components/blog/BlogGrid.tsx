import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Eating Seasonal Produce",
    excerpt:
      "Discover why eating fruits and vegetables in season is better for your health, wallet, and the environment.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Ahmed Hassan",
    date: "2024-01-15",
    category: "Nutrition",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Our Organic Certification Journey",
    excerpt:
      "Learn about the rigorous process we went through to achieve organic certification and what it means for our customers.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Fatima Benali",
    date: "2024-01-10",
    category: "Farming",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Sustainable Water Management in Agriculture",
    excerpt: "How we use advanced irrigation techniques to conserve water while maintaining crop quality.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Omar Alami",
    date: "2024-01-05",
    category: "Sustainability",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Recipe: Fresh Orange and Avocado Salad",
    excerpt: "A refreshing and nutritious salad recipe using our farm-fresh oranges and creamy avocados.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Aicha Benali",
    date: "2024-01-01",
    category: "Recipes",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Export Success: Reaching New Markets",
    excerpt: "Our journey expanding to new international markets and the challenges we overcame.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Omar Alami",
    date: "2023-12-28",
    category: "Business",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Winter Harvest: What's Fresh This Season",
    excerpt: "Explore the delicious winter produce available from our farm and their nutritional benefits.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Ahmed Hassan",
    date: "2023-12-20",
    category: "Seasonal",
    readTime: "4 min read",
  },
]

export default function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
        <div className="text-gray-600">Showing {blogPosts.length} articles</div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span className="text-orange-500 font-medium">{post.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
