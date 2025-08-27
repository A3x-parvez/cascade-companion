import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation />
      <main className="pt-16 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Author Section */}
          {/* Author Section */}
          <div className="text-center mb-8 pt-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center border border-white/20 max-w-lg mx-auto">
              <div className="relative inline-block mb-6">
                {/* Profile Image */}
                <img
                  src="/images/parvez.jpg"   // <-- replace with your image path
                  alt="Parvez Ahmed"
                  className="w-28 h-28 rounded-full mx-auto shadow-lg object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Parvez Ahmed</h2>
              <p className="text-emerald-600 font-medium mb-4">Founder & Explorer</p>
              <p className="text-gray-600 leading-relaxed">
                Explorer, developer, and the mind behind <span className="font-medium text-emerald-700">Waterfall Explorer</span>. 
                Passionate about nature, technology, and helping people discover hidden gems around the world.
              </p>
            </div>
          </div>


          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-emerald-100 rounded-full mb-4">
              <MessageSquare className="w-6 h-6 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">
              Get In <span className="text-emerald-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Ready to discover hidden waterfalls or have questions about your next adventure? 
              We're here to help make your journey unforgettable.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition-all group text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors mx-auto mb-3">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">info@waterfallexplorer.com</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition-all group text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors mx-auto mb-3">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-FALL</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition-all group text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors mx-auto mb-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600 text-sm">
                123 Nature Trail<br />
                Waterfall Valley, WV 12345<br />
                West Bengal, India
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
