"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center space-x-4">
        <ThemeToggle />
        <LanguageToggle />
        <Link href="/contact">
          <Button className="bg-orange-700 hover:bg-orange-800 text-white">
            Get Quote
          </Button>
        </Link>
      </div>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Our Farm
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-4">
              <ThemeToggle />
              <LanguageToggle />
              <Link href="/contact">
                <Button className="bg-orange-700 hover:bg-orange-800 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
