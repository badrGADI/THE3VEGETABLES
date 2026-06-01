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
  

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our team specializes in B2B agricultural export. We handle bulk orders from 500 kg to full container loads, provide customized packaging and labeling, manage all export documentation and phytosanitary certificates, and coordinate door-to-door shipping to any destination worldwide. Whether you need weekly supply contracts or spot purchases, we offer competitive pricing backed by consistent quality and reliable delivery schedules.
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
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you are an international importer looking for bulk produce, a distributor seeking reliable supply partners, or a retailer interested in our wholesale program, our team is ready to assist you. We respond to all inquiries within 24 hours during business days and can provide custom quotes tailored to your volume, delivery frequency, and destination requirements. Our multilingual team communicates in English, French, Arabic, and Spanish to serve clients across Europe, the Middle East, Africa, and the Americas.
            </p>
          </div>
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
                {t("contact.requestB2BQuote")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("contact.bulkOrdersDescription")}
              </p>
            </div>
            <QuoteForm />
          </div>
          <div className="mt-16 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              MoroccoFresh is one of Morocco leading agricultural exporters with a presence in over 25 countries across Europe, the Middle East, Africa, and North America. Our cold storage facilities in Agadir and Casablanca maintain strict temperature controls throughout the supply chain, ensuring that your shipments arrive in optimal condition. All our products are traceable from farm to port with batch-level tracking and digital documentation.
            </p>
            <p>
              We are certified under GlobalG.A.P., BRC, Organic (EU/USDA equivalent), and Fair Trade standards. Each shipment includes a Certificate of Origin, Phytosanitary Certificate, and Laboratory Analysis Report upon request. Our quality assurance team conducts visual inspection, size grading, sugar content testing, and shelf-life validation before every shipment. Non-conforming lots are rejected before they enter the export packhouse.
            </p>
            <p>
              For terms of trade, we support FOB (Casablanca, Agadir, Tangier Med), CNF, CIF, and DAP delivery terms with flexible payment options including TT, LC at sight, and DP terms for established buyers. Minimum order quantities start at 500 kg for mixed pallets and 20 ft containers for single-product shipments. Seasonal contracts with fixed pricing and volume commitments receive priority allocation during peak demand periods.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
