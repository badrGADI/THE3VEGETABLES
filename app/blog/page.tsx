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
      <section className="bg-gray-50 dark:bg-gray-900 py-16 border-t">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">About Our Farm Blog</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Our farm blog is written by the team behind The 3 Vegetables, a third-generation family farming business based in the Souss Valley region of Morocco. We publish regular updates covering our seasonal harvest cycles, agricultural innovations we are implementing on our 500-hectare farm, sustainable farming practices including drip irrigation and integrated pest management, and insights into the international produce export market from a Moroccan perspective.
            </p>
            <p>
              Readers include wholesale produce buyers looking for supply intelligence, food industry professionals tracking seasonal availability, agriculture students and researchers, and consumers interested in understanding where their food comes from. Each article is researched and written by our team members who work directly in our fields, packhouses, and export offices, providing authentic first-hand perspectives on modern Moroccan agriculture.
            </p>
            <p>
              Topics we regularly cover include monthly harvest outlook reports that forecast availability and pricing for key export crops, detailed profiles of specific products from seed variety selection through to harvest and export, sustainability initiatives such as our solar-powered irrigation systems and organic conversion programs, nutritional information about our produce with recipe ideas, and profiles of the international markets we serve. We also publish buyer guides covering quality grading standards, packaging options, and import documentation requirements for different destination countries.
            </p>
            </div>
          </div>
      </section>
      <section className="bg-white dark:bg-gray-800 py-16 border-t">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Subscribe to Our Blog Updates</h2>
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>Stay connected with our farming community by subscribing to our blog newsletter. Subscribers receive weekly email notifications whenever new articles are published, along with a monthly digest featuring the most popular posts, seasonal harvest highlights, and exclusive insights into our farming operations that are not published anywhere else. Our newsletter is written by our farm manager and export team and provides valuable intelligence for produce buyers, industry professionals, and agriculture enthusiasts.</p>
            <p>We respect your inbox and promise never to share your email address with third parties. You can unsubscribe at any time with a single click, and we will never send you promotional content unrelated to our farm, our products, or the agricultural industry. Our subscriber community includes importers, distributors, retailers, food bloggers, nutritionists, and fellow farmers from over 30 countries who value authentic, first-hand information about Moroccan agriculture and the global fresh produce trade.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
