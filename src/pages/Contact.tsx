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
          {/* Page Header */}
          <div className="text-center mb-8 pt-12">
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
              <p className="text-gray-600 text-sm">arup.geo10@gmail.com</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition-all group text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors mx-auto mb-3">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">+91 9732173670</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition-all group text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors mx-auto mb-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600 text-sm">
                Tarapith Road Station<br />
                Birbhum<br />
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
