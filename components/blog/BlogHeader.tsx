import { BookOpen, Leaf, TrendingUp } from "lucide-react";

export default function BlogHeader() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-800 via-slate-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Farm Stories
            <span className="block text-emerald-300">& Export News</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Read the latest updates on sustainable farming, export strategy, and
            Moroccan produce markets.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Leaf className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Farming Tips</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Market Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
