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

export default function QualityTransparency() {
  const qualityStandards = [
    {
      icon: Shield,
      title: "GlobalGAP Certified",
      description:
        "International standard for good agricultural practices ensuring food safety and sustainability",
      badge: "Certified",
    },
    {
      icon: Award,
      title: "ISO 22000",
      description:
        "Food safety management system certification for the entire supply chain",
      badge: "Certified",
    },
    {
      icon: Microscope,
      title: "Organic Certification",
      description:
        "EU and USDA organic standards for pesticide-free, natural farming practices",
      badge: "Organic",
    },
    {
      icon: FileText,
      title: "HACCP Compliance",
      description:
        "Hazard Analysis Critical Control Points system for food safety management",
      badge: "Compliant",
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
            Quality & Transparency
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            We follow strict standards and clear reporting for every shipment
            and farm.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {standard.title}
                  </h3>
                  <Badge className="bg-green-500 text-white mx-auto mb-3">
                    {standard.badge}
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {standard.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Transparency Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transparencyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4"
                >
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
              );
            })}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Our Quality Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-500 block mb-2">
                1
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Farm Selection
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We source from premium farms with traceable cultivation
                practices.
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-500 block mb-2">
                2
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Inspection
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every batch is inspected for freshness, safety, and export
                compliance.
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-500 block mb-2">
                3
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Cold Chain
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Temperature-controlled handling ensures quality from farm to
                port.
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-500 block mb-2">
                4
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Export Ready
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Shipments are prepared with documentation and certifications
                included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
