import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post | Farm Blog",
  description:
    "Read our latest blog post about farming, nutrition, and sustainable agriculture.",
  alternates: {
    languages: {
      en: "/blog/",
      fr: "/blog/",
    },
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
