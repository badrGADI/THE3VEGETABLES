"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslation } from "@/hooks/useTranslation"

const categories = [
  { id: "fruits", nameKey: "shop.fruits", count: 24 },
  { id: "vegetables", nameKey: "shop.vegetables", count: 18 },
  { id: "organic", nameKey: "shop.organic", count: 32 },
  { id: "seasonal", nameKey: "shop.seasonal", count: 12 },
]

const priceRanges = [
  { id: "under-5", nameKey: "shop.under5", count: 15 },
  { id: "5-10", nameKey: "shop.5to10", count: 20 },
  { id: "10-20", nameKey: "shop.10to20", count: 8 },
  { id: "over-20", nameKey: "shop.over20", count: 3 },
]

export default function CategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("shop.categories")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category.id])
                  } else {
                    setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
                  }
                }}
              />
              <label htmlFor={category.id} className="flex-1 cursor-pointer">
                <span>{t(category.nameKey)}</span>
                <span className="text-gray-500 ml-2">({category.count})</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("shop.priceRange")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox
                id={range.id}
                checked={selectedPriceRanges.includes(range.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedPriceRanges([...selectedPriceRanges, range.id])
                  } else {
                    setSelectedPriceRanges(selectedPriceRanges.filter((id) => id !== range.id))
                  }
                }}
              />
              <label htmlFor={range.id} className="flex-1 cursor-pointer">
                <span>{t(range.nameKey)}</span>
                <span className="text-gray-500 ml-2">({range.count})</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
