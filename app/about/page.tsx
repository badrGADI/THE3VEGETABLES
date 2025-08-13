"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Award, Globe, Heart, Truck, TreePine, Sparkles } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-emerald-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-28 h-28 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <TreePine className="w-10 h-10 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t("about.title").split(" ")[0]} {t("about.title").split(" ")[1]} {t("about.title").split(" ")[2]}
              <span className="block text-emerald-300">{t("about.title").split(" ")[3]}</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-white/30 w-16"></div>
              <Sparkles className="w-6 h-6 text-orange-400" />
              <div className="h-px bg-white/30 w-16"></div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              {t("about.subtitle")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{t("about.yearsExperience")}</div>
                <div className="text-gray-300">{t("about.yearsLabel")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{t("about.hectares")}</div>
                <div className="text-gray-300">{t("about.hectaresLabel")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{t("about.countriesServed")}</div>
                <div className="text-gray-300">{t("about.countriesLabel")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {t("about.fromHumbleBeginnings")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.storyParagraph1")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about.storyParagraph2")}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about.storyParagraph3")}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/story.png?height=500&width=600"
                alt={t("about.threeGenerationsAlt")}
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t("about.coreValues")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("about.coreValuesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("about.sustainability")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.sustainabilityDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("about.familyTradition")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.familyTraditionDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("about.qualityExcellence")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.qualityExcellenceDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("about.communityCare")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.communityCareDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("about.globalResponsibility")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.globalResponsibilityDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{t("about.reliableService")}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.reliableServiceDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainable Practices Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/business.png?height=500&width=600"
                alt={t("about.sustainablePracticesAlt")}
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {t("about.sustainablePractices")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.sustainablePracticesDesc")}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("about.waterConservation")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("about.waterConservationDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("about.organicCertification")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("about.organicCertificationDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("about.solarEnergy")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("about.solarEnergyDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{t("about.soilHealth")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("about.soilHealthDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t("about.meetOurTeam")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("about.teamDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/badr.png?height=200&width=200"
                  alt={t("about.ahmedAlt")}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("about.ahmedHassan")}</h3>
                <p className="text-orange-500 font-medium mb-4">{t("about.ahmedRole")}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.ahmedDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={t("about.fatimaAlt")}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("about.fatimaBenali")}</h3>
                <p className="text-orange-500 font-medium mb-4">{t("about.fatimaRole")}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.fatimaDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-700">
              <CardContent className="p-8">
                <Image
                  src="/Ahmed.png?height=200&width=200"
                  alt={t("about.omarAlt")}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t("about.omarAlami")}</h3>
                <p className="text-orange-500 font-medium mb-4">{t("about.omarRole")}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("about.omarDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
