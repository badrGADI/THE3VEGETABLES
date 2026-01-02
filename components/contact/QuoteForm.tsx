"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "@/hooks/useTranslation"

import { submitQuoteRequest, type QuoteFormData } from "@/lib/firebaseServices";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function QuoteForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    products: [],
    quantity: "",
    frequency: "",
    requirements: "",
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      !formData.companyName ||
      !formData.contactName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      formData.products.length === 0 ||
      !formData.agreedToTerms
    ) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Please fill in all required fields and agree to the terms."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const documentId = await submitQuoteRequest(formData);
      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your quote request has been submitted successfully. We'll get back to you with pricing within 24 hours."
      );

      // Reset form
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        products: [],
        quantity: "",
        frequency: "",
        requirements: "",
        agreedToTerms: false,
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "There was an error submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof Omit<QuoteFormData, "products" | "agreedToTerms">,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear submit status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  const handleBooleanChange = (field: "agreedToTerms", value: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  const handleProductChange = (product: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      products: checked
        ? [...prev.products, product]
        : prev.products.filter((p) => p !== product),
    }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  const productOptions = [
    "Fresh Oranges",
    "Organic Tomatoes",
    "Fresh Avocados",
    "Bell Peppers",
    "Fresh Lemons",
    "Organic Carrots",
    "Seasonal Fruits",
    "Mixed Vegetables",
  ];

  return (
    <Card className="border-orange-100 dark:border-orange-200 bg-white dark:bg-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">
          B2B Quote Request
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <p className="text-green-700 dark:text-green-300">
                {submitMessage}
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
              <p className="text-red-700 dark:text-red-300">{submitMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Company Name *
              </label>
              <Input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                required
                disabled={isSubmitting}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="contactName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Contact Person *
              </label>
              <Input
                id="contactName"
                type="text"
                value={formData.contactName}
                onChange={(e) => handleChange("contactName", e.target.value)}
                required
                disabled={isSubmitting}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Business Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                disabled={isSubmitting}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                disabled={isSubmitting}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Delivery Country *
            </label>
            <Select
              onValueChange={(value) => handleChange("country", value)}
              disabled={isSubmitting}
              value={formData.country}
            >
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
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Products of Interest *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productOptions.map((product) => (
                <div key={product} className="flex items-center space-x-2">
                  <Checkbox
                    id={product}
                    checked={formData.products.includes(product)}
                    onCheckedChange={(checked) =>
                      handleProductChange(product, checked as boolean)
                    }
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor={product}
                    className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    {product}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Expected Quantity (kg/month)
              </label>
              <Select
                onValueChange={(value) => handleChange("quantity", value)}
                disabled={isSubmitting}
                value={formData.quantity}
              >
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
              <label
                htmlFor="frequency"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Delivery Frequency
              </label>
              <Select
                onValueChange={(value) => handleChange("frequency", value)}
                disabled={isSubmitting}
                value={formData.frequency}
              >
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
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Special Requirements
            </label>
            <Textarea
              id="requirements"
              rows={4}
              value={formData.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              disabled={isSubmitting}
              className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              placeholder={t("quoteForm.requirementsPlaceholder")}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) =>
                handleBooleanChange("agreedToTerms", checked as boolean)
              }
              disabled={isSubmitting}
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              I agree to the terms and conditions and privacy policy *
            </label>
          </div>

          <Button
            type="submit"
            disabled={!formData.agreedToTerms || isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Quote Request...
              </>
            ) : (
              "Request Quote"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
