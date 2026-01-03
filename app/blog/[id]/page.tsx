
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

  return {
    title: `${title} | Farm Blog`,
    description: description,
    alternates: {
      canonical: `https://t3v.the-3rocks.com/blog/${id}`,
    },
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: title,
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

  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <BlogPostClient params={params} />
    </Suspense>
  );
}


