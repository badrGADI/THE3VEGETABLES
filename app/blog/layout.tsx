import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Farm Blog | Harvest Updates, Nutrition Tips & Agriculture Insights",
  description:
    "Read the latest updates from our Moroccan farm. Discover seasonal news, farming tips, recipes, and the benefits of eating fresh, local produce.",
  keywords: "farm blog, harvest updates, nutrition tips, agriculture insights, moroccan farming, seasonal produce",
  alternates: {
    languages: {
      'en': '/blog',
      'fr': '/blog',
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 