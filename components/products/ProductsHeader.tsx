"use client";
import { Package, Truck, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProductsHeader() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-800 via-orange-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Package className="w-10 h-10 text-white" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("productsPage.title")}
            <span className="block text-orange-300">
              {t("productsPage.subtitle")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("productsPage.description")}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Package className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                {t("productsPage.containerLoads")}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Truck className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                {t("productsPage.globalShipping")}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Globe className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                {t("productsPage.countries")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
