import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We're here to help with all your fresh produce needs. Reach out to us through any of these channels.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-orange-100 dark:border-orange-200 bg-white dark:bg-gray-700">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Company Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Route de Taroudant, Km 15
                  <br />
                  Agadir 80000, Morocco
                  <br />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Located in the fertile valleys of Agadir
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100 dark:border-orange-200 bg-white dark:bg-gray-700">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Phone Numbers</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Main: +212 528 123 456
                  <br />
                  Export: +212 661 234 567
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
