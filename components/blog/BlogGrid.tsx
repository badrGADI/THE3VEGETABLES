import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Tag } from "lucide-react";
import { format } from "date-fns";
import { blogPosts } from "@/lib/blogData";
import BlogPagination from "./BlogPagination";

type BlogPost = (typeof blogPosts)[0];

interface BlogGridProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

export default function BlogGrid({
  posts,
  currentPage,
  totalPages,
  totalPosts,
}: BlogGridProps) {
  const startIndex = (currentPage - 1) * 5;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
        <div className="text-gray-600">
          Showing {startIndex + 1}–{startIndex + posts.length} of {totalPosts}{" "}
          articles
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
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
                      <span className="text-orange-500 font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span
                        suppressHydrationWarning
                      >{`${format(new Date(post.date), "MMMM d, yyyy")}`}</span>
                    </div>
                    <span>{post.readTime} min read</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
