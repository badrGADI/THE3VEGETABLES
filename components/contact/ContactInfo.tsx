import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <p className="text-lg text-gray-600 mb-8">
          We're here to help with all your fresh produce needs. Reach out to us through any of these channels.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Farm Location</h3>
                <p className="text-gray-600">
                  Route de Taroudant, Km 15
                  <br />
                  Agadir 80000, Morocco
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                <p className="text-gray-600">
                  Main: +212 528 123 456
                  <br />
                  Export: +212 661 234 567
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">
                  +212 661 234 567
                  <br />
                  Available 24/7 for urgent inquiries
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h3>
                <p className="text-gray-600">
                  General: info@freshfarm.ma
                  <br />
                  Sales: sales@freshfarm.ma
                  <br />
                  Export: export@freshfarm.ma
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
                <p className="text-gray-600">
                  Arabic, French, English
                  <br />
                  Spanish (Export team)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
