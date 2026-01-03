"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
            <div className="relative w-24 h-24">
              <Image
                src="/logo.png"
                alt="The3Vegetables Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, 96px"
                priority
              />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {(() => {
                  const name = t("companyName");
                  const parts = name.split("3");
                  return (
                    <>
                      {parts[0]}
                      <span className="text-green-600 dark:text-green-400">3</span>
                      {parts[1]}
                    </>
                  );
                })()}
              </div>
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
            <Link href="/shop" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              {t("nav.shop")}
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
            <Link href="/contact">
                <Button className="bg-orange-700 hover:bg-orange-800 text-white">{t("nav.getQuote")}</Button>
            </Link>
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
              <Link href="/shop" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t("nav.shop")}
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
                <Link href="/contact">
                  <Button className="bg-orange-700 hover:bg-orange-800 text-white">{t("nav.getQuote")}</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
