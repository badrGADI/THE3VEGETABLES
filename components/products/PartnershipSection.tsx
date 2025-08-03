"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Handshake,
  Users,
  Globe,
  Award,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PartnershipSection() {
  const { t } = useTranslation();

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description:
        "We build lasting relationships with our international partners based on trust and reliability",
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description:
        "Personal account managers and export specialists assigned to each major partnership",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Access to our extensive network of distributors and importers across 50+ countries",
    },
    {
      icon: Award,
      title: "Exclusive Benefits",
      description:
        "Priority access to new products, special pricing, and customized packaging solutions",
    },
  ];

  const partnerTypes = [
    {
      title: "International Importers",
      description:
        "Direct partnerships with established importers seeking reliable Moroccan produce suppliers",
      benefits: [
        "Competitive bulk pricing",
        "Flexible payment terms",
        "Custom packaging",
        "Priority shipping",
      ],
    },
    {
      title: "Wholesale Distributors",
      description:
        "Partnerships with distributors looking to expand their fresh produce portfolio",
      benefits: [
        "Consistent supply",
        "Marketing support",
        "Product training",
        "Seasonal planning",
      ],
    },
    {
      title: "Retail Chains",
      description:
        "Direct supply agreements with major retail chains and supermarket groups",
      benefits: [
        "Private labeling",
        "Quality guarantees",
        "Logistics coordination",
        "Promotional support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("partnership.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {t("partnership.subtitle")}
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t("partnership.whyPartner")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partner Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t("partnership.opportunities")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {type.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                      Benefits:
                    </h5>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t("partnership.successStories")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      European Fresh Distribution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      "5-year partnership supplying 200+ containers annually to
                      European markets. Exceptional quality and reliability."
                    </p>
                    <div className="text-sm text-orange-600 font-medium">
                      Rotterdam, Netherlands
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Middle East Retail Chain
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      "Trusted supplier for 3 years, serving 150+ stores across
                      the region. Outstanding logistics support."
                    </p>
                    <div className="text-sm text-green-600 font-medium">
                      Dubai, UAE
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t("partnership.readyPartner")}
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {t("partnership.joinNetwork")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("partnership.becomePartner")}
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t("partnership.scheduleMeeting")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
