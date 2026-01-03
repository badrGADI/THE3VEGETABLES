import { Suspense } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/lib/blogData";

const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const currentPage = !isNaN(page) && page > 0 ? page : 1;
  
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <Suspense fallback={<div>Loading blog posts...</div>}>
              <BlogGrid 
                posts={currentPosts}
                currentPage={currentPage}
                totalPages={totalPages}
                totalPosts={totalPosts}
              />
            </Suspense>
          </main>
          <aside className="lg:col-span-1">
            <Suspense fallback={<div>Loading sidebar ...</div>}>
              <BlogSidebar />
            </Suspense>
          </aside>
        </div>
      </div>
    </div>
  );
}
