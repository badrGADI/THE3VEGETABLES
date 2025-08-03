"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
  { id: "fruits", name: "Fruits", count: 24 },
  { id: "vegetables", name: "Vegetables", count: 18 },
  { id: "organic", name: "Organic", count: 32 },
  { id: "seasonal", name: "Seasonal", count: 12 },
]

const priceRanges = [
  { id: "under-5", name: "Under $5/kg", count: 15 },
  { id: "5-10", name: "$5 - $10/kg", count: 20 },
  { id: "10-20", name: "$10 - $20/kg", count: 8 },
  { id: "over-20", name: "Over $20/kg", count: 3 },
]

export default function CategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
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
                <span>{category.name}</span>
                <span className="text-gray-500 ml-2">({category.count})</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
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
                <span>{range.name}</span>
                <span className="text-gray-500 ml-2">({range.count})</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
