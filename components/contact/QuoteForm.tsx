"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslation } from "@/hooks/useTranslation"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    products: [] as string[],
    quantity: "",
    frequency: "",
    requirements: "",
    agreedToTerms: false,
  })

  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Quote form submitted:", formData)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleProductChange = (product: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      products: checked ? [...prev.products, product] : prev.products.filter((p) => p !== product),
    }))
  }

  const productOptions = [
    { key: "quoteForm.freshOranges", value: "Fresh Oranges" },
    { key: "quoteForm.organicTomatoes", value: "Organic Tomatoes" },
    { key: "quoteForm.freshAvocados", value: "Fresh Avocados" },
    { key: "quoteForm.bellPeppers", value: "Bell Peppers" },
    { key: "quoteForm.freshLemons", value: "Fresh Lemons" },
    { key: "quoteForm.organicCarrots", value: "Organic Carrots" },
    { key: "quoteForm.seasonalFruits", value: "Seasonal Fruits" },
    { key: "quoteForm.mixedVegetables", value: "Mixed Vegetables" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">{t("quoteForm.b2bQuoteRequest")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                {t("quoteForm.companyName")}
              </label>
              <Input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                {t("quoteForm.contactPerson")}
              </label>
              <Input
                id="contactName"
                type="text"
                value={formData.contactName}
                onChange={(e) => handleChange("contactName", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t("quoteForm.businessEmail")}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t("quoteForm.phoneNumber")}
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              {t("quoteForm.deliveryCountry")}
            </label>
            <Select onValueChange={(value) => handleChange("country", value)}>
              <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                <SelectValue placeholder={t("quoteForm.selectDeliveryCountry")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="france">{t("quoteForm.france")}</SelectItem>
                <SelectItem value="spain">{t("quoteForm.spain")}</SelectItem>
                <SelectItem value="germany">{t("quoteForm.germany")}</SelectItem>
                <SelectItem value="uk">{t("quoteForm.uk")}</SelectItem>
                <SelectItem value="netherlands">{t("quoteForm.netherlands")}</SelectItem>
                <SelectItem value="uae">{t("quoteForm.uae")}</SelectItem>
                <SelectItem value="other">{t("quoteForm.other")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">{t("quoteForm.productsOfInterest")}</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productOptions.map((product) => (
                <div key={product.key} className="flex items-center space-x-2">
                  <Checkbox
                    id={product.key}
                    checked={formData.products.includes(product.value)}
                    onCheckedChange={(checked) => handleProductChange(product.value, checked as boolean)}
                  />
                  <label htmlFor={product.key} className="text-sm text-gray-700 cursor-pointer">
                    {t(product.key)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                {t("quoteForm.expectedQuantity")}
              </label>
              <Select onValueChange={(value) => handleChange("quantity", value)}>
                <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder={t("quoteForm.selectQuantityRange")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100-500">{t("quoteForm.quantity100500")}</SelectItem>
                  <SelectItem value="500-1000">{t("quoteForm.quantity5001000")}</SelectItem>
                  <SelectItem value="1000-5000">{t("quoteForm.quantity10005000")}</SelectItem>
                  <SelectItem value="5000-10000">{t("quoteForm.quantity500010000")}</SelectItem>
                  <SelectItem value="10000+">{t("quoteForm.quantity10000plus")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                {t("quoteForm.deliveryFrequency")}
              </label>
              <Select onValueChange={(value) => handleChange("frequency", value)}>
                <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder={t("quoteForm.selectFrequency")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">{t("quoteForm.weekly")}</SelectItem>
                  <SelectItem value="biweekly">{t("quoteForm.biweekly")}</SelectItem>
                  <SelectItem value="monthly">{t("quoteForm.monthly")}</SelectItem>
                  <SelectItem value="seasonal">{t("quoteForm.seasonal")}</SelectItem>
                  <SelectItem value="one-time">{t("quoteForm.oneTime")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
              {t("quoteForm.specialRequirements")}
            </label>
            <Textarea
              id="requirements"
              rows={4}
              value={formData.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              placeholder={t("quoteForm.requirementsPlaceholder")}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) => handleChange("agreedToTerms", checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              {t("quoteForm.agreeTerms")}
            </label>
          </div>

          <Button
            type="submit"
            disabled={!formData.agreedToTerms}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg disabled:opacity-50"
          >
            {t("quoteForm.requestQuote")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
