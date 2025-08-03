import { Award, Leaf, Users, Globe } from "lucide-react"

export default function QualityBanner() {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Certified organic farming practices",
      iconColor: "text-orange-500",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local communities",
      iconColor: "text-purple-500",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Rigorous quality standards",
      iconColor: "text-orange-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving worldwide markets",
      iconColor: "text-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-orange-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Why Choose Our Farm?</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We deliver internationally and guarantee quality with every shipment
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className={`w-12 h-12 ${feature.iconColor} mx-auto`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
