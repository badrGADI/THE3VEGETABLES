"use client";

import BlogPostClient from "@/components/blog/BlogPostClient";
import { Suspense } from "react";
interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <BlogPostClient params={params} />
    </Suspense>
  );
}
