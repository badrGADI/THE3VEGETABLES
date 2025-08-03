"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Globe, Award } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 to-green-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-500 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-orange-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-orange-800 dark:text-orange-300 font-medium">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {t("hero.title")}
                <span className="text-orange-500 block">
                  {t("hero.titleHighlight")}
                </span>
                {t("hero.titleEnd")}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {t("hero.feature1Label")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("hero.feature1Description")}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {t("hero.feature2Label")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("hero.feature2Description")}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {t("hero.feature3Label")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("hero.feature3Description")}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {t("hero.feature4Label")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("hero.feature4Description")}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  {t("hero.viewProducts")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-3 text-lg bg-transparent"
                >
                  {t("hero.requestQuote")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Fresh+Moroccan+Vegetables"
                alt="Fresh Moroccan vegetables ready for bulk export"
                width={500}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-orange-100 dark:border-orange-800">
              <div className="text-2xl font-bold text-orange-500">
                {t("hero.stats1Value")}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("hero.stats1Label")}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-orange-100 dark:border-orange-800">
              <div className="text-2xl font-bold text-orange-500">
                {t("hero.stats2Value")}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("hero.stats2Label")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
