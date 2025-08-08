"use client"

import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import QuoteForm from "@/components/contact/QuoteForm"
import { MessageCircle, Handshake, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function ContactPage() {
  const { t } = useTranslation()

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

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t("contact.title").split(" ")[0]} {t("contact.title").split(" ")[1]}
              <span className="block text-gray-300">{t("contact.title").split(" ")[2]}</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">{t("contact.quickResponse")}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Handshake className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">{t("contact.partnershipReady")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {t("contact.requestB2BQuote")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("contact.bulkOrdersDescription")}
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t("contact.visitOurFarm")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("contact.farmLocation")}
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">{t("contact.mapPlaceholder")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
