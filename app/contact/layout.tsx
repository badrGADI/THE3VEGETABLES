import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Order Fresh Produce or Become a Distributor",
  description:
    "Get in touch with our team for product inquiries, export options, or partnership opportunities. Contact us via WhatsApp, email, or contact form.",
  keywords: "contact fresh farm morocco, order organic produce, become distributor, export inquiries, whatsapp contact",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 