import type { Metadata } from "next"
import ProductDetail from "@/components/product/BulkProductDetail"

interface ProductPageProps {
  params: {
    slug: string
  }
}

const getProduct = (slug: string) => {
  const products = {
    "moroccan-tomatoes": {
      id: 1,
      name: "Fresh Moroccan Tomatoes",
      subtitle: "Bulk Export",
      image: "/tomato.png",
      description: "Premium quality tomatoes in bulk quantities",
      annualProduction: "300+ tons/year",
      currentAvailability: "50 tons ready for export – Casablanca warehouse",
      harvestSeason: "March - November (Peak: May - September)",
      varieties: ["Cherry", "Roma", "Round"],
      origin: "Souss Valley, Morocco",
      packaging: ["10kg plastic crates", "15kg wooden boxes", "20ft containers (22-24 tons)", "40ft containers (26-28 tons)"],
      storage: "Temperature: 12-15°C, Humidity: 85-90%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000", "Organic Certified", "HACCP"],
      qualityProcess: ["Hand-picked at optimal ripeness", "Sorted by size and quality grade", "Cold storage within 2 hours of harvest", "Pre-cooling before packaging", "Quality inspection at every stage"],
      exportExperience: "15+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics coordination from farm to destination",
      testimonials: [
        {
          company: "European Fresh Ltd",
          location: "Rotterdam, Netherlands",
          text: "Excellent quality tomatoes with consistent supply. Their logistics support made our import process seamless.",
        },
      ],
    },
    "moroccan-carrots": {
      id: 2,
      name: "Organic Moroccan Carrots",
      subtitle: "Bulk Export",
      image: "/carrot.png",
      description: "Fresh organic carrots for international markets",
      annualProduction: "200+ tons/year",
      currentAvailability: "35 tons ready for export – Agadir warehouse",
      harvestSeason: "October - June (Peak: December - April)",
      varieties: ["Nantes", "Imperator"],
      origin: "Agadir region, Morocco",
      packaging: ["10kg mesh bags", "20kg cartons", "20ft containers (20-22 tons)", "40ft containers (24-26 tons)"],
      storage: "Temperature: 0-2°C, Humidity: 95-98%, Shelf life: 4-6 months",
      certifications: ["Organic Certified", "GlobalGAP", "ISO 22000", "BRC"],
      qualityProcess: ["Harvested at perfect maturity", "Washed and sorted by size", "Quality grading and inspection", "Cold storage immediately after harvest", "Regular quality monitoring"],
      exportExperience: "15+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Complete supply chain management",
      testimonials: [
        {
          company: "Organic Distributors Inc",
          location: "Hamburg, Germany",
          text: "Outstanding organic carrots with excellent shelf life. Perfect for our European distribution network.",
        },
      ],
    },
    "moroccan-peppers": {
      id: 3,
      name: "Moroccan Bell Peppers",
      subtitle: "Bulk Export",
      image: "/pepper.png",
      description: "Colorful bell peppers in container loads",
      annualProduction: "150+ tons/year",
      currentAvailability: "20 tons ready for export – Agadir warehouse",
      harvestSeason: "April - October",
      varieties: ["Red", "Yellow", "Green"],
      origin: "Morocco",
      packaging: ["10kg cartons", "20ft containers (20-22 tons)", "40ft containers (24-26 tons)"],
      storage: "Temperature: 7-10°C, Humidity: 90-95%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "10+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Veggie Importers Ltd",
          location: "London, UK",
          text: "Reliable supplier of bell peppers. Always fresh and well-packed.",
        },
      ],
    },
    "moroccan-onions": {
      id: 4,
      name: "Moroccan Red Onions",
      subtitle: "Bulk Export",
      image: "/onion.png",
      description: "High-quality red onions for bulk export",
      annualProduction: "400+ tons/year",
      currentAvailability: "60 tons ready for export – Casablanca warehouse",
      harvestSeason: "May - September",
      varieties: ["Red Globe", "Spanish"],
      origin: "Morocco",
      packaging: ["20kg mesh bags", "40ft containers (24-26 tons)"],
      storage: "Temperature: 0-2°C, Humidity: 65-70%, Shelf life: 4-6 months",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Harvested and cured for storage", "Sorted and graded", "Quality inspection"],
      exportExperience: "12+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Onion Traders GmbH",
          location: "Berlin, Germany",
          text: "Consistent quality and timely delivery. Highly recommended.",
        },
      ],
    },
    "moroccan-potatoes": {
      id: 5,
      name: "Moroccan Potatoes",
      subtitle: "Bulk Export",
      image: "/potato.png",
      description: "Premium potatoes for international distribution",
      annualProduction: "500+ tons/year",
      currentAvailability: "80 tons ready for export – Agadir warehouse",
      harvestSeason: "January - May",
      varieties: ["Spunta", "Nicola", "Désirée"],
      origin: "Morocco",
      packaging: ["25kg mesh bags", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 3-5 months",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Harvested at maturity", "Washed and sorted", "Quality inspection"],
      exportExperience: "14+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Potato World",
          location: "Paris, France",
          text: "Excellent potatoes, always fresh and well-packed.",
        },
      ],
    },
    "moroccan-cucumbers": {
      id: 6,
      name: "Fresh Moroccan Cucumbers",
      subtitle: "Bulk Export",
      image: "/cucumber.png",
      description: "Crisp cucumbers perfect for export markets",
      annualProduction: "180+ tons/year",
      currentAvailability: "30 tons ready for export – Casablanca warehouse",
      harvestSeason: "October - May",
      varieties: ["Long English", "Mini"],
      origin: "Morocco",
      packaging: ["10kg cartons", "20ft containers (20-22 tons)", "40ft containers (24-26 tons)"],
      storage: "Temperature: 7-10°C, Humidity: 90-95%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "9+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Cucumber Importers",
          location: "Madrid, Spain",
          text: "Great cucumbers, always crisp and fresh.",
        },
      ],
    },
    "moroccan-oranges": {
      id: 7,
      name: "Moroccan Oranges",
      subtitle: "Bulk Export",
      image: "/orange.png",
      description: "Sweet, juicy oranges packed with vitamin C",
      annualProduction: "600+ tons/year",
      currentAvailability: "100 tons ready for export – Agadir warehouse",
      harvestSeason: "November - May",
      varieties: ["Valencia", "Navel"],
      origin: "Morocco",
      packaging: ["15kg cartons", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 2-3 months",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "16+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Citrus Importers",
          location: "Rome, Italy",
          text: "Delicious oranges, always juicy and sweet.",
        },
      ],
    },
    "moroccan-lemons": {
      id: 8,
      name: "Fresh Moroccan Lemons",
      subtitle: "Bulk Export",
      image: "/lemon.png",
      description: "Premium quality lemons for global markets",
      annualProduction: "250+ tons/year",
      currentAvailability: "40 tons ready for export – Casablanca warehouse",
      harvestSeason: "October - June",
      varieties: ["Eureka", "Meyer"],
      origin: "Morocco",
      packaging: ["10kg cartons", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 2-3 months",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "11+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Lemon Traders",
          location: "Lisbon, Portugal",
          text: "Top quality lemons, always fresh and tangy.",
        },
      ],
    },
    "moroccan-avocados": {
      id: 9,
      name: "Moroccan Avocados",
      subtitle: "Bulk Export",
      image: "/avocado.png",
      description: "Creamy, nutrient-rich avocados ready for export",
      annualProduction: "120+ tons/year",
      currentAvailability: "15 tons ready for export – Agadir warehouse",
      harvestSeason: "November - April",
      varieties: ["Hass", "Fuerte"],
      origin: "Morocco",
      packaging: ["4kg cartons", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "8+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Avocado Importers",
          location: "Brussels, Belgium",
          text: "Excellent avocados, always creamy and fresh.",
        },
      ],
    },
    "moroccan-melons": {
      id: 10,
      name: "Moroccan Melons",
      subtitle: "Bulk Export",
      image: "/melon.png",
      description: "Sweet melons perfect for international markets",
      annualProduction: "300+ tons/year",
      currentAvailability: "25 tons ready for export – Casablanca warehouse",
      harvestSeason: "May - September",
      varieties: ["Cantaloupe", "Honeydew"],
      origin: "Morocco",
      packaging: ["10kg cartons", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "10+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Melon Importers",
          location: "Warsaw, Poland",
          text: "Sweet and juicy melons, always a hit with our customers.",
        },
      ],
    },
    "moroccan-watermelons": {
      id: 11,
      name: "Moroccan Watermelons",
      subtitle: "Bulk Export",
      image: "/watermelon.png",
      description: "Refreshing watermelons in bulk quantities",
      annualProduction: "400+ tons/year",
      currentAvailability: "60 tons ready for export – Agadir warehouse",
      harvestSeason: "June - September",
      varieties: ["Crimson Sweet", "Sugar Baby"],
      origin: "Morocco",
      packaging: ["20kg cartons", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "7+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Watermelon Importers",
          location: "Vienna, Austria",
          text: "Always fresh and sweet watermelons. Great supplier!",
        },
      ],
    },
    "moroccan-grapes": {
      id: 12,
      name: "Moroccan Table Grapes",
      subtitle: "Bulk Export",
      image: "/grapes.png",
      description: "Premium table grapes for export markets",
      annualProduction: "200+ tons/year",
      currentAvailability: "20 tons ready for export – Casablanca warehouse",
      harvestSeason: "July - October",
      varieties: ["Red Globe", "Thompson"],
      origin: "Morocco",
      packaging: ["5kg cartons", "40ft containers (24-26 tons)"],
      storage: "Temperature: 4-7°C, Humidity: 90-95%, Shelf life: 2-3 weeks",
      certifications: ["GlobalGAP Certified", "ISO 22000"],
      qualityProcess: ["Hand-picked and sorted", "Cold storage after harvest", "Quality inspection at every stage"],
      exportExperience: "6+ years",
      deliveryPorts: "Any port worldwide",
      logisticsSupport: "Full logistics support",
      testimonials: [
        {
          company: "Grape Importers",
          location: "Zurich, Switzerland",
          text: "Top quality grapes, always fresh and delicious.",
        },
      ],
    },
  };
  return products[slug as keyof typeof products] || null;
}


export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const product = getProduct(awaitedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Bulk Export from Morocco | MoroccoFresh`,
    description: product.description,
    keywords: `bulk export ${product.name.toLowerCase()}, wholesale moroccan vegetables supplier, ${product.name.toLowerCase()} direct from moroccan farm, export vegetables morocco to europe`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const awaitedParams = await params;
  const product = getProduct(awaitedParams.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
