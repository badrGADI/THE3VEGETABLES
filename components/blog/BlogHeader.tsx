"use client"

import { BookOpen, Leaf, TrendingUp } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function BlogHeader() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-800 via-slate-800 to-gray-900 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("blog.title").split(" & ")[0]}
            <span className="block text-emerald-300">& {t("blog.title").split(" & ")[1]}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("blog.subtitle")}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Leaf className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">{t("blog.farmingTips")}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">{t("blog.latestUpdates")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
