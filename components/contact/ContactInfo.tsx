"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function ContactInfo() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("contactInfo.contactInformation")}</h2>
        <p className="text-lg text-gray-600 mb-8">
          {t("contactInfo.helpDescription")}
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contactInfo.farmLocation")}</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t("contactInfo.farmAddress")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contactInfo.phoneNumbers")}</h3>
                <p className="text-gray-600">
                  {t("contactInfo.mainPhone")}
                  <br />
                  {t("contactInfo.exportPhone")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contactInfo.whatsapp")}</h3>
                <p className="text-gray-600">
                  {t("contactInfo.whatsappNumber")}
                  <br />
                  {t("contactInfo.whatsappAvailable")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contactInfo.emailAddresses")}</h3>
                <p className="text-gray-600">
                  {t("contactInfo.generalEmail")}
                  <br />
                  {t("contactInfo.salesEmail")}
                  <br />
                  {t("contactInfo.exportEmail")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contactInfo.businessHours")}</h3>
                <p className="text-gray-600">
                  {t("contactInfo.weekdays")}
                  <br />
                  {t("contactInfo.saturday")}
                  <br />
                  {t("contactInfo.sunday")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contactInfo.languages")}</h3>
                <p className="text-gray-600">
                  {t("contactInfo.languagesList")}
                  <br />
                  {t("contactInfo.spanishExport")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
