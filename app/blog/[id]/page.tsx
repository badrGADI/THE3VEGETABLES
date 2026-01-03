
import BlogPostClient from "@/components/blog/BlogPostClient";
import { Suspense } from "react";
import { Metadata } from "next";
import { blogPosts } from "@/lib/blogData";
import { getTranslation } from "@/lib/translations";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {


  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return {
      title: "Blog Post Not Found | The 3 Vegetables",
      description: "The blog post you are looking for does not exist.",
    };
  }


  const title = getTranslation(post.titleKey, "en"); // Default to English for SEO tags
  const description = getTranslation(post.excerptKey, "en");


  // SEO Content Optimization: Truncate title and description
  const cleanTitle = title.split(":")[0]; // Use the main part of the title (before colon) to keep it short
  const optimizedTitle = cleanTitle.length > 60 ? cleanTitle.substring(0, 57) + "..." : cleanTitle;
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;

  return {
    title: `${optimizedTitle} | Farm Blog`,
    description: optimizedDescription,
    alternates: {
      canonical: `https://t3v.the-3rocks.com/blog/${id}`,
    },
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "The 3 Vegetables",
      locale: "en_US",
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: optimizedTitle,
        },
      ],
    },
  };
}


import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));
  
  if (!post) {
    notFound();
  }



  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (

    <Suspense fallback={<div>Loading post...</div>}>
      <BlogPostClient post={post} prevPost={prevPost} nextPost={nextPost} />
    </Suspense>
  );
}


