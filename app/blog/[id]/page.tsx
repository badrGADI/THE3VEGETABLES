"use client"

import BlogPostClient from "@/components/blog/BlogPostClient"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostClient params={params} />
}
