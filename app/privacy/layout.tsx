import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | The 3 Vegetables",
  description:
    "Learn about our privacy policy and how we collect, use, and protect your personal information. Contact us at info@the3rocks.com for any privacy-related questions.",
  keywords: "privacy policy, data protection, information collection, personal data, privacy rights",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

