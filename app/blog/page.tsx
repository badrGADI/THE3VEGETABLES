import { Suspense } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/lib/blogData";
import { Metadata } from "next";


export async function generateMetadata(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const currentPage = !isNaN(page) && page > 0 ? page : 1;

  return {
    title: `Farm Blog${currentPage > 1 ? ` - Page ${currentPage}` : ""} | Harvest Updates, Nutrition Tips & Agriculture Insights`,
    description: currentPage > 1
      ? `Stay updated with the latest news from our farm, seasonal harvest reports, nutrition tips, and insights into sustainable agriculture practices. (Page ${currentPage})`
      : "Stay updated with the latest news from our farm, seasonal harvest reports, nutrition tips, and insights into sustainable agriculture practices.",
    alternates: {
      canonical: currentPage > 1 
        ? `https://t3v.the-3rocks.com/blog?page=${currentPage}` 
        : "https://t3v.the-3rocks.com/blog",
    },
  };
}

const POSTS_PER_PAGE = 5;

export default async function BlogPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
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
      <section className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Stay informed with the latest news from our Moroccan family farm. We share seasonal harvest reports, sustainable agriculture insights, export market updates, nutrition tips, and stories from our farming community. Whether you are a buyer, distributor, or agriculture enthusiast, our blog offers valuable perspectives on Moroccan farming and global produce trade.
          </p>
        </div>
      </section>
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
