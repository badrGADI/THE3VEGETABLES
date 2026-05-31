"use client"

import { FileText, Scale, Shield, AlertCircle, Gavel, Globe, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 overflow-hidden">
  

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Scale className="w-10 h-10 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t("terms.title")}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("terms.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      1. {t("terms.introduction.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("terms.introduction.content")}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      These Terms and Conditions govern your use of the The 3 Vegetables website located at t3v.the-3rocks.com and any related services provided by our company. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our website or services. These terms apply to all visitors, users, customers, and partners who access our platform for browsing product information, requesting quotes, placing orders, or communicating with our team. We reserve the right to update these terms at any time, and continued use of the site after changes constitutes acceptance of the new terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      2. {t("terms.intellectualProperty.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("terms.intellectualProperty.content")}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      All content published on this website, including but not limited to text, images, graphics, logos, product descriptions, pricing information, blog articles, videos, and data compilations, is the property of The 3 Vegetables or its content suppliers and is protected by Moroccan and international copyright laws. The trademarks, service marks, and trade names displayed on this site are registered and unregistered marks of our company. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content from this website without our prior written consent. You may download or print content for personal, non-commercial reference purposes only, provided you retain all copyright and proprietary notices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use of the Website */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      3. {t("terms.useOfWebsite.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {t("terms.useOfWebsite.content")}
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the site. Prohibited activities include transmitting spam, viruses, or harmful code, attempting to gain unauthorized access to our systems, collecting user data without consent, interfering with the functionality of the website, and engaging in any form of fraud or misrepresentation. We reserve the right to suspend or terminate access to any user who violates these terms. We also employ security measures to protect our platform, and any attempt to bypass or compromise these measures may result in legal action. Product images and descriptions are provided for informational purposes and may vary from actual products due to seasonal variations and screen calibration differences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      4. {t("terms.privacy.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("terms.privacy.content")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      5. {t("terms.limitationOfLiability.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("terms.limitationOfLiability.content")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to the Terms */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      6. {t("terms.changesToTerms.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("terms.changesToTerms.content")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      7. {t("terms.governingLaw.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("terms.governingLaw.content")}
                    </p>
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
                      {t("terms.contactUs.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("terms.contactUs.description")}{" "}
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

