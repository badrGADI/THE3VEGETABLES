import { Package, Truck, Globe } from "lucide-react";

export default function ProductsHeader() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-800 via-orange-800 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Package className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bulk Export Products
            <span className="block text-orange-300">Catalog</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore our complete range of bulk export produce from Morocco.
            Premium vegetables and fruits available in container loads for
            international distribution.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Package className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Container Loads</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Truck className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Global Shipping</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Globe className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">50+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
