"use client";
import { Globe, Truck, Award, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ExportExperience() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Globe,
      number: "18+",
      labelKey: "exportExperience.countriesServed",
      descKey: "exportExperience.countriesDesc",
    },
    {
      icon: Truck,
      number: "78+",
      labelKey: "exportExperience.containersMonth",
      descKey: "exportExperience.containersDesc",
    },
    {
      icon: Award,
      number: "15+",
      labelKey: "exportExperience.yearsExperience",
      descKey: "exportExperience.yearsDesc",
    },
    {
      icon: Users,
      number: "120+",
      labelKey: "exportExperience.happyClients",
      descKey: "exportExperience.clientsDesc",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("exportExperience.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("exportExperience.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/95 dark:bg-gray-800/95 p-8 rounded-2xl border border-orange-200 dark:border-orange-800 text-center shadow-sm">
                <IconComponent className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-orange-600 mb-2">
                  {t(stat.labelKey)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t(stat.descKey)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
