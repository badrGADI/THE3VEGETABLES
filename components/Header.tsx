"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import LanguageToggle from "@/components/LanguageToggle"
import { useTranslation } from "@/hooks/useTranslation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="The3Vegetables Logo" className="w-24 h-24 object-contain" />
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">{t("companyName")}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t("companyDescription")}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              {t("nav.products")}
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              {t("nav.farm")}
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              {t("nav.blog")}
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              {t("nav.getQuote")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t("nav.home")}
              </Link>
              <Link
                href="/products"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              >
                {t("nav.products")}
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t("nav.farm")}
              </Link>
              <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t("nav.blog")}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              >
                {t("nav.contact")}
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <ThemeToggle />
                <LanguageToggle />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">{t("nav.getQuote")}</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
