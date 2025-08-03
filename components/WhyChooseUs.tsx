"use client";
import { Leaf, Award, Globe, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Leaf,
      titleKey: "whyChoose.farmFresh",
      descKey: "whyChoose.farmFreshDesc",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Award,
      titleKey: "whyChoose.international",
      descKey: "whyChoose.internationalDesc",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: Globe,
      titleKey: "whyChoose.worldwide",
      descKey: "whyChoose.worldwideDesc",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      titleKey: "whyChoose.trusted",
      descKey: "whyChoose.trustedDesc",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("whyChoose.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <IconComponent
                    className={`w-12 h-12 ${feature.iconColor} mx-auto`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
