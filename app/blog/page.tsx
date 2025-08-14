"use client";

import { Suspense } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <Suspense fallback={<div>Loading blog posts...</div>}>
              <BlogGrid />
            </Suspense>
          </main>
          <aside className="lg:col-span-1">
            <Suspense fallback={<div>Loading sidebar...</div>}>
              <BlogSidebar />
            </Suspense>
          </aside>
        </div>
      </div>
    </div>
  );
}
