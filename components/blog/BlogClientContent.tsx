"use client";

import { useTranslation } from "@/hooks/useTranslation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Image from "next/image";

interface BlogPost {
  id: number;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  date: string;
  image?: string;
  categoryKey: string;
  readTime: number;
  author: string;
}

export default function BlogClientContent({ post }: { post: BlogPost }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow p-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={t(post.titleKey)}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">{t(post.titleKey)}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <span>{t(post.categoryKey)}</span>
                <span suppressHydrationWarning>{new Date(post.date).toLocaleDateString()}</span>
                <span>{t("blog.readTime").replace("{time}", post.readTime.toString())}</span>
                <span>{post.author}</span>
              </div>
              <p className="text-lg text-gray-700 mb-8">{t(post.excerptKey)}</p>
              {/* Optionally include more content here */}
            </article>
          </main>
          <aside className="lg:col-span-1">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
