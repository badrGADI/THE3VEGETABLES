import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Family Farm in Morocco | Sustainable & Organic Agriculture",
  description:
    "Learn about our story, values, and commitment to sustainable farming. Our farm in Morocco grows top-quality fruits and vegetables for local and international market.",
  keywords:
    "moroccan family farm, sustainable agriculture, organic farming morocco, farm story, agricultural practices",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
