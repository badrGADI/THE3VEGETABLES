import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Tag } from "lucide-react"

const categories = [
  { name: "Nutrition", count: 8 },
  { name: "Farming", count: 12 },
  { name: "Sustainability", count: 6 },
  { name: "Recipes", count: 15 },
  { name: "Business", count: 4 },
  { name: "Seasonal", count: 10 },
]

const recentPosts = [
  {
    id: 1,
    title: "The Benefits of Eating Seasonal Produce",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Our Organic Certification Journey",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "Sustainable Water Management in Agriculture",
    date: "2024-01-05",
  },
]

const tags = [
  "Organic",
  "Seasonal",
  "Nutrition",
  "Recipes",
  "Export",
  "Sustainability",
  "Morocco",
  "Fresh Produce",
  "Farming Tips",
  "Health Benefits",
]

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search articles..." className="flex-1" />
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <span className="text-gray-700 hover:text-orange-500 cursor-pointer">{category.name}</span>
                <span className="text-gray-500 text-sm">({category.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                <h4 className="text-sm font-medium text-gray-900 hover:text-orange-500 cursor-pointer mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Tag className="w-5 h-5" />
            <span>Tags</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-orange-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-900">Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-800 text-sm mb-4">Get the latest updates from our farm delivered to your inbox.</p>
          <div className="space-y-3">
            <Input placeholder="Your email address" className="border-orange-200 focus:border-orange-500" />
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
