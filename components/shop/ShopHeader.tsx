import { ShoppingBag, Sparkles, Truck } from "lucide-react";

export default function ShopHeader() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <ShoppingBag className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh Moroccan Produce
            <span className="block text-gray-300">Shop Online</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Browse our full selection of high-quality fruits and vegetables,
            shipped fresh to your market with fast, reliable service.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Truck className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
