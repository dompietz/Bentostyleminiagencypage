import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <span className="text-sm">Creative Studio</span>
          </div>
          
          <h1 className="text-7xl lg:text-8xl tracking-tight">
            We Create
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Digital Magic
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A boutique agency crafting exceptional digital experiences through design, development, and strategy.
          </p>
          
          <div className="flex gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all flex items-center gap-2">
              Start a Project
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
    </section>
  );
}
