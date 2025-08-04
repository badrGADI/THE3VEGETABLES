"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="text-xl font-bold">{t("companyName")}</div>
                <div className="text-sm text-gray-400">
                  {t("companyDescription")}
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{t("companyMission")}</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("ourProducts")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("ourFarm")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("blogAndNews")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("exportProducts")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/moroccan-tomatoes"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("moroccanTomatoes")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/moroccan-carrots"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("organicCarrots")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/moroccan-peppers"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("bellPeppers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/moroccan-onions"
                  className="text-gray-400 hover:text-orange-500"
                >
                  {t("redOnions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactInfo")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{t("location")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{t("phoneNumber")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{t("email")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t("copyright")} |
            <Link href="/privacy" className="hover:text-orange-500 ml-1">
              {t("privacyPolicy")}
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-orange-500 ml-1">
              {t("termsOfService")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
