"use client"

import { ShoppingBag, Sparkles, Truck } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function ShopHeader() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <ShoppingBag className="w-10 h-10 text-white" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("shop.freshProduce")}
            <span className="block text-gray-300">{t("shop.shop")}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("shop.browseSelection")}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">{t("shop.premiumQuality")}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Truck className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">{t("shop.fastDelivery")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
