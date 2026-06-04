"use client"
import { useEffect } from "react";

interface BlogPostClientProps {
  post: any;
  prevPost?: any;
  nextPost?: any;
}

export default function BlogPostClient({ post, prevPost, nextPost }: BlogPostClientProps) {
  useEffect(() => {
    const handleShare = () => {
      if (navigator.share && post) {
        navigator.share({
          title: post.title,
          url: window.location.href,
        }).catch(() => {});
      }
    };

    const shareBtn = document.getElementById("share-post-btn");
    if (shareBtn) {
      shareBtn.addEventListener("click", handleShare);
      return () => shareBtn.removeEventListener("click", handleShare);
    }
  }, [post]);

  return null;
}
