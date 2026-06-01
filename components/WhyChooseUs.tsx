import { Leaf, Award, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh Quality",
    description:
      "Direct from our certified organic farms in Morocco's fertile regions",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Award,
    title: "International Standards",
    description:
      "GlobalGAP, ISO 22000, and organic certifications for global markets",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Globe,
    title: "Worldwide Export",
    description:
      "Reliable shipping to any port with temperature-controlled logistics",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "Trusted Partner",
    description: "15+ years serving international importers and distributors",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Why Choose The 3 Vegetables?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Your trusted partner for bulk agricultural exports from Morocco to
            international markets.
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
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
