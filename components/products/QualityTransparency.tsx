"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Eye,
  CheckCircle,
  Microscope,
  FileText,
  Users,
  Clock,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function QualityTransparency() {
  const { t } = useTranslation();

  const qualityStandards = [
    {
      icon: Shield,
      title: "GlobalGAP Certified",
      description:
        "International standard for good agricultural practices ensuring food safety and sustainability",
      badgeKey: "quality.certified",
    },
    {
      icon: Award,
      title: "ISO 22000",
      description:
        "Food safety management system certification for the entire supply chain",
      badgeKey: "quality.certified",
    },
    {
      icon: Microscope,
      title: "Organic Certification",
      description:
        "EU and USDA organic standards for pesticide-free, natural farming practices",
      badgeKey: "quality.organic",
    },
    {
      icon: FileText,
      title: "HACCP Compliance",
      description:
        "Hazard Analysis Critical Control Points system for food safety management",
      badgeKey: "quality.compliant",
    },
  ];

  const transparencyFeatures = [
    {
      icon: Eye,
      title: "Farm Traceability",
      description:
        "Complete tracking from seed to shipment with detailed documentation",
    },
    {
      icon: Users,
      title: "Third-Party Audits",
      description:
        "Regular independent inspections by international certification bodies",
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description:
        "24/7 temperature and humidity monitoring during storage and transport",
    },
    {
      icon: CheckCircle,
      title: "Quality Reports",
      description:
        "Detailed quality certificates and lab reports for every shipment",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("quality.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {t("quality.subtitle")}
          </p>
        </div>

        {/* Quality Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t("quality.certifications")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{standard.title}</CardTitle>
                    <Badge className="bg-green-500 text-white mx-auto">
                      {t(standard.badgeKey)}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {standard.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Transparency Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t("quality.transparency")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transparencyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Process */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t("quality.process")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t("quality.farmSelection")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("quality.farmSelectionDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t("quality.inspection")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("quality.inspectionDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t("quality.coldChain")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("quality.coldChainDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t("quality.exportReady")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("quality.exportReadyDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
