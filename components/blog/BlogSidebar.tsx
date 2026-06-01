import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Tag } from "lucide-react";
import { format } from "date-fns";

const categories = [
  { name: "Nutrition", count: 8 },
  { name: "Farming", count: 12 },
  { name: "Sustainability", count: 6 },
  { name: "Recipes", count: 15 },
  { name: "Business", count: 4 },
  { name: "Seasonal", count: 10 },
];

const recentPosts = [
  { id: 10, title: "Moroccan Zucchini Finds Swiss Market", date: "2025-06-27" },
  { id: 7, title: "Morocco Exports to Spain in Q1 2025", date: "2025-06-07" },
  { id: 9, title: "Exports Rebound in 2024/25", date: "2025-06-02" },
  { id: 8, title: "Global Export Growth Strategy", date: "2025-04-01" },
  { id: 1, title: "Rainfall Impact on the 2024 Harvest", date: "2024-05-12" },
  { id: 2, title: "Turning Sand into a Green Oasis", date: "2024-08-09" },
  { id: 3, title: "No-Till Farming Expansion in Morocco", date: "2024-11-03" },
];

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
];

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
          <Search className="w-5 h-5" />
          <span>Search Articles</span>
        </h3>
        <div className="flex space-x-2">
          <Input placeholder="Search blog posts..." className="flex-1" />
          <Button className="bg-orange-700 hover:bg-orange-800">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between"
            >
              <span className="text-gray-700 hover:text-orange-700 cursor-pointer">
                {category.name}
              </span>
              <span className="text-gray-500 text-sm">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-b-0"
            >
              <h4 className="text-sm font-medium text-gray-900 hover:text-orange-700 cursor-pointer mb-1">
                {post.title}
              </h4>
              <p
                className="text-xs text-gray-500"
                suppressHydrationWarning
              >{`${format(new Date(post.date), "MMMM d, yyyy")}`}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center space-x-2">
          <Tag className="w-5 h-5" />
          <span>Tags</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-800 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
          Newsletter
        </h3>
        <p className="text-orange-800 dark:text-orange-300 text-sm mb-4">
          Subscribe to receive the latest farm updates, export news, and product
          releases.
        </p>
        <div className="space-y-3">
          <Input
            placeholder="Your email address"
            className="border-orange-200 focus:border-orange-500"
          />
          <Button className="w-full bg-orange-700 hover:bg-orange-800">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
