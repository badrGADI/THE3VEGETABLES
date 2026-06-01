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

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="The3Vegetables Logo"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <div className="text-xl font-bold">
                    The{" "}
                    <span className="text-green-600 dark:text-green-400">
                      3
                    </span>{" "}
                    Vegetables
                  </div>
                  <div className="text-sm text-gray-400">
                    Agricultural Export
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Leading Moroccan agricultural export company supplying premium
              fresh produce to international markets worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Our Farm
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Export Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/moroccan-tomatoes"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Moroccan Tomatoes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/moroccan-carrots"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Organic Carrots
                </Link>
              </li>
              <li>
                <Link
                  href="/products/moroccan-peppers"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Bell Peppers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/moroccan-onions"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Red Onions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">Agadir, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">+212 654 352 802</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">info@the-3rocks.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MoroccoFresh Agricultural Export. All rights reserved. |
            <Link href="/privacy" className="hover:text-orange-500 ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-orange-500 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
