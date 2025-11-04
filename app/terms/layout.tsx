import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | The 3 Vegetables",
  description:
    "Read our terms and conditions. By using our website, you agree to comply with our terms. Contact us at info@the3rocks.com for any questions.",
  keywords: "terms and conditions, terms of service, website terms, legal terms, user agreement",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

