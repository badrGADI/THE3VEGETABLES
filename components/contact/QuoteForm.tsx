"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

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
    "Fresh Oranges",
    "Organic Tomatoes",
    "Fresh Avocados",
    "Bell Peppers",
    "Fresh Lemons",
    "Organic Carrots",
    "Seasonal Fruits",
    "Mixed Vegetables",
  ]

  return (
    <Card className="border-orange-100 dark:border-orange-200 bg-white dark:bg-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">B2B Quote Request</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name *
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
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contact Person *
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Email *
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
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
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Delivery Country *
            </label>
            <Select onValueChange={(value) => handleChange("country", value)}>
              <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                <SelectValue placeholder="Select delivery country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="spain">Spain</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="netherlands">Netherlands</SelectItem>
                <SelectItem value="uae">United Arab Emirates</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Products of Interest *</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productOptions.map((product) => (
                <div key={product} className="flex items-center space-x-2">
                  <Checkbox
                    id={product}
                    checked={formData.products.includes(product)}
                    onCheckedChange={(checked) => handleProductChange(product, checked as boolean)}
                  />
                  <label htmlFor={product} className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    {product}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Expected Quantity (kg/month)
              </label>
              <Select onValueChange={(value) => handleChange("quantity", value)}>
                <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder="Select quantity range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100-500">100 - 500 kg</SelectItem>
                  <SelectItem value="500-1000">500 - 1,000 kg</SelectItem>
                  <SelectItem value="1000-5000">1,000 - 5,000 kg</SelectItem>
                  <SelectItem value="5000-10000">5,000 - 10,000 kg</SelectItem>
                  <SelectItem value="10000+">10,000+ kg</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Delivery Frequency
              </label>
              <Select onValueChange={(value) => handleChange("frequency", value)}>
                <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="seasonal">Seasonal</SelectItem>
                  <SelectItem value="one-time">One-time order</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Special Requirements
            </label>
            <Textarea
              id="requirements"
              rows={4}
              value={formData.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              placeholder="Please specify any special packaging, certification, or delivery requirements..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) => handleChange("agreedToTerms", checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the terms and conditions and privacy policy *
            </label>
          </div>

          <Button
            type="submit"
            disabled={!formData.agreedToTerms}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg disabled:opacity-50"
          >
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
