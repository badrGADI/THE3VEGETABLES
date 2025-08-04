import type { Metadata } from "next"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import QuoteForm from "@/components/contact/QuoteForm"
import { MessageCircle, Handshake, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Order Fresh Produce or Become a Distributor",
  description:
    "Get in touch with our team for product inquiries, export options, or partnership opportunities. Contact us via WhatsApp, email, or contact form.",
  keywords: "contact fresh farm morocco, order organic produce, become distributor, export inquiries, whatsapp contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get In
              <span className="block text-gray-300">Touch</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to start your fresh produce journey? Contact us for orders, partnerships, or any questions
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Handshake className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">Partnership Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Request a B2B Quote
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Looking for bulk orders or regular supply? Get a customized quote for your business needs
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}
