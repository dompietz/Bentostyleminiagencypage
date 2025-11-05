import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Let's Work Together</h2>
          <p className="text-xl text-purple-200">Have a project in mind? We'd love to hear about it.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-purple-200 mb-1">Email</div>
                    <div className="text-lg">hello@agency.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-purple-200 mb-1">Phone</div>
                    <div className="text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-purple-200 mb-1">Location</div>
                    <div className="text-lg">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-span-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-purple-200">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-purple-200">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-purple-200">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-purple-200">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-purple-900 rounded-xl hover:bg-purple-100 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
