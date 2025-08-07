"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-700 dark:bg-gray-700">
      <div className="container mx-auto px-4 text-center dark:bg-gray-900 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("callToAction.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("callToAction.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("callToAction.requestBulkQuote")}
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t("callToAction.scheduleCall")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("callToAction.quickResponseTitle")}
                </h3>
                <p className="text-gray-400">
                  {t("callToAction.quickResponseDescription")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("callToAction.directContactTitle")}
                </h3>
                <p className="text-gray-400">
                  {t("callToAction.directContactDescription")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t("callToAction.customSolutionsTitle")}
                </h3>
                <p className="text-gray-400">
                  {t("callToAction.customSolutionsDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
