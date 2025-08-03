import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Fresh Market Co.",
    location: "London, UK",
    text: "The quality of produce from FreshFarm is exceptional. Their oranges and vegetables arrive fresh and perfectly packaged every time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    company: "Mediterranean Foods",
    location: "Dubai, UAE",
    text: "We've been working with FreshFarm for 3 years. Their reliability and quality consistency make them our preferred supplier.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    company: "Organic Plus",
    location: "Barcelona, Spain",
    text: "Outstanding organic produce and excellent customer service. The team goes above and beyond to meet our requirements.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                  <div className="text-sm text-orange-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
