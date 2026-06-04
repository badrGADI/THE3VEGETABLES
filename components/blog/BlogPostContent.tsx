import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { getTranslation } from "@/lib/translations";
import { blogPosts } from "@/lib/blogData";

interface BlogPostContentProps {
  post: (typeof blogPosts)[0];
  prevPost: (typeof blogPosts)[0] | null;
  nextPost: (typeof blogPosts)[0] | null;
}

export default function BlogPostContent({ post, prevPost, nextPost }: BlogPostContentProps) {
  const t = (key: string) => getTranslation(key, "en");
  const title = t(post.titleKey);
  const excerpt = t(post.excerptKey);

  const renderContent = () => {
    const contentMap: Record<number, { contentKey: string; keyPointsKey: string }> = {
      1: { contentKey: "blog.rainfall_impact_2024.content", keyPointsKey: "blog.rainfall_impact_2024.keyPoints" },
      2: { contentKey: "blog.sand_to_green_oasis.content", keyPointsKey: "blog.sand_to_green_oasis.keyPoints" },
      3: { contentKey: "blog.no_till_expansion.content", keyPointsKey: "blog.no_till_expansion.keyPoints" },
      4: { contentKey: "blog.green_deal_opportunity.content", keyPointsKey: "blog.green_deal_opportunity.keyPoints" },
      5: { contentKey: "blog.food_quality_standards.content", keyPointsKey: "blog.food_quality_standards.keyPoints" },
      6: { contentKey: "blog.oasis_irrigation_innovation.content", keyPointsKey: "blog.oasis_irrigation_innovation.keyPoints" },
      7: { contentKey: "news.morocco.export.spain.q1_2025.content", keyPointsKey: "news.morocco.export.spain.q1_2025.keyPoints" },
      8: { contentKey: "news.morocco.global_export_growth.strategy.content", keyPointsKey: "news.morocco.global_export_growth.strategy.keyPoints" },
      9: { contentKey: "news.morocco.exports.rebound.2024_25.content", keyPointsKey: "news.morocco.exports.rebound.2024_25.keyPoints" },
      10: { contentKey: "news.morocco.zucchini.switzerland.content", keyPointsKey: "news.morocco.zucchini.switzerland.keyPoints" },
    };

    const mapping = contentMap[post.id];

    if (mapping) {
      const paragraphs = t(mapping.contentKey);
      const keyPoints = t(mapping.keyPointsKey);
      const keyPointsList = keyPoints.split(", ");

      return (
        <>
          <p>{paragraphs}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t("blog.keyPoints")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {keyPointsList.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <p className="text-gray-600">
        This blog post is being updated with the latest information about {title.toLowerCase()}. 
        Please check back soon for the complete article with detailed insights, analysis, and key takeaways 
        about this topic related to Moroccan agriculture and farming practices.
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/blog">
            <span className="inline-flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back to Blog
            </span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                <span className="text-orange-500 font-medium">{t(post.categoryKey)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>{post.readTime} min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-gray-600 font-medium">{post.author}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {excerpt}
              </p>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {renderContent()}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("blog.relatedPosts")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div>
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={t(relatedPost.titleKey)}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                        <span className="text-orange-500 font-medium">{t(relatedPost.categoryKey)}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>{t(relatedPost.titleKey)}</Link>
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{t(relatedPost.excerptKey)}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/blog">
              <span className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                {t("blog.backToAllPosts")}
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 border-t pt-8">
            <div className="text-left">
              {prevPost && (
                <Link href={`/blog/${prevPost.id}`} className="group block">
                  <span className="text-sm text-gray-500 mb-1 block group-hover:text-orange-600 transition-colors">
                    &larr; {t("blog.previous")}
                  </span>
                  <span className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {t(prevPost.titleKey)}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextPost && (
                <Link href={`/blog/${nextPost.id}`} className="group block">
                  <span className="text-sm text-gray-500 mb-1 block group-hover:text-orange-600 transition-colors">
                    {t("blog.next")} &rarr;
                  </span>
                  <span className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {t(nextPost.titleKey)}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
