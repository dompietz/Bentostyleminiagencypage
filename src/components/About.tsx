import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Award, Briefcase, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Briefcase, value: "150+", label: "Projects Delivered" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Heart, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-32 px-8 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-purple-400 text-sm tracking-wider uppercase">About Us</span>
              <h2 className="text-5xl mt-4 mb-6">We're a team of passionate creators</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our mini agency brings together talented designers, developers, and strategists 
                who are passionate about creating exceptional digital experiences. We believe in 
                the power of good design and clean code to transform businesses.
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="text-2xl mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg mb-1">Research & Strategy</h4>
                    <p className="text-gray-400">Understanding your goals and audience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg mb-1">Design & Development</h4>
                    <p className="text-gray-400">Crafting beautiful and functional solutions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg mb-1">Launch & Support</h4>
                    <p className="text-gray-400">Ensuring smooth deployment and ongoing success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image and Stats */}
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MjE2MjM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <Icon size={32} className="text-purple-400 mb-3" />
                    <div className="text-3xl mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
