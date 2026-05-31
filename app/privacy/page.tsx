"use client"

import { Shield, Database, Lock, Mail, FileText, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

export default function PrivacyPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 overflow-hidden">
  

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Shield className="w-10 h-10 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t("privacy.title")}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("privacy.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Information Collection */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {t("privacy.informationCollection.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("privacy.informationCollection.description")}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      When you visit our website or use our services, we may collect information that you voluntarily provide to us through our contact forms, quote request forms, newsletter subscriptions, and catalog download requests. This includes personal identifiers such as your full name, email address, phone number, company name, job title, country of residence, and the specific products or services you are interested in. We also collect technical information automatically when you browse our site, including your IP address, browser type, operating system, referring URLs, device type, and pages visited. This technical data helps us understand how visitors interact with our website and allows us to improve your browsing experience.
                    </p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>
                          {t("privacy.informationCollection.contactForm")}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>
                          {t("privacy.informationCollection.catalog")}
                        </span>
                      </li>
                    </ul>
                    <p className="text-base text-gray-600 dark:text-gray-300 mt-4">
                      We do not collect sensitive personal data such as racial or ethnic origin, political opinions, religious beliefs, or health information. All data collection is performed transparently and in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) for our European partners and clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use of Information */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {t("privacy.useOfInformation.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("privacy.useOfInformation.description")}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      The information we collect is used exclusively for business purposes related to our agricultural export operations. We process your data to respond to inquiries about our products and services, prepare and send customized quotes for bulk produce orders, manage and fulfill orders including logistics coordination and shipping documentation, send relevant updates about seasonal availability, new products, and market trends, improve our website functionality and user experience through analytics, comply with legal obligations and regulatory requirements related to international agricultural trade, and protect our business against fraudulent or unauthorized activities. We retain your personal data only for as long as necessary to fulfill these purposes, typically for the duration of our business relationship plus a reasonable period thereafter to comply with legal retention requirements.
                    </p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.useOfInformation.maintain")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.useOfInformation.analyze")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.useOfInformation.communicate")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.useOfInformation.support")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Storage */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {t("privacy.dataStorage.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("privacy.dataStorage.description")}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      Your personal data is stored securely on Firebase servers located in the European Union and the United States, both of which maintain adequate data protection standards as determined by the European Commission. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction, including encryption in transit using TLS protocols, access controls and authentication mechanisms, regular security audits and vulnerability assessments, and limited access to personal data on a need-to-know basis. Data retention periods vary by type: contact form inquiries are retained for 24 months, quote requests and order-related data for the duration of our business relationship plus 60 months, and analytics data in anonymized form indefinitely.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {t("privacy.yourRights.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("privacy.yourRights.description")}
                    </p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.yourRights.access")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.yourRights.object")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">•</span>
                        <span>{t("privacy.yourRights.withdraw")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {t("privacy.contactUs.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("privacy.contactUs.description")}{" "}
                      <a
                        href="mailto:info@the3rocks.com"
                        className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline font-medium"
                      >
                        info@the3rocks.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

