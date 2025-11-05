import { ImageWithFallback } from './figma/ImageWithFallback';
import { Palette, Code, Megaphone, Sparkles, Layout, Zap } from 'lucide-react';

export function BentoServices() {
  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">Comprehensive digital services tailored to your needs</p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 h-auto">
          {/* Large featured card - Brand Design */}
          <div className="col-span-8 row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative z-10">
              <Palette size={48} className="mb-6" />
              <h3 className="text-4xl mb-4">Brand Design</h3>
              <p className="text-xl text-purple-100 max-w-md">
                Creating memorable brand identities that resonate with your audience and stand out in the market.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2">
                  <Sparkles size={20} />
                  <span>Logo & Visual Identity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles size={20} />
                  <span>Brand Guidelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles size={20} />
                  <span>Marketing Collateral</span>
                </li>
              </ul>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Web Development */}
          <div className="col-span-4 row-span-1 bg-black text-white rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <Code size={40} className="mb-4 text-green-400" />
            <h3 className="text-3xl mb-3">Web Development</h3>
            <p className="text-gray-400">
              Building fast, scalable, and beautiful websites with modern technologies.
            </p>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-green-400/20 rounded-full blur-2xl"></div>
          </div>
          
          {/* Digital Marketing */}
          <div className="col-span-4 row-span-1 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <Megaphone size={40} className="mb-4" />
            <h3 className="text-3xl mb-3">Digital Marketing</h3>
            <p className="text-orange-100">
              Strategies that drive engagement and convert audiences into customers.
            </p>
          </div>
          
          {/* UI/UX Design */}
          <div className="col-span-5 row-span-1 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]">
            <Layout size={40} className="mb-4 text-blue-600" />
            <h3 className="text-3xl mb-3">UI/UX Design</h3>
            <p className="text-gray-600">
              Intuitive interfaces that delight users and enhance experiences across all devices.
            </p>
          </div>
          
          {/* Performance Optimization */}
          <div className="col-span-3 row-span-1 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <Zap size={40} className="mb-4" />
            <h3 className="text-3xl mb-3">Performance</h3>
            <p className="text-amber-950">
              Lightning-fast solutions optimized for speed and efficiency.
            </p>
          </div>
          
          {/* Image showcase */}
          <div className="col-span-4 row-span-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxODUzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Branding materials"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white text-2xl">Creative Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
