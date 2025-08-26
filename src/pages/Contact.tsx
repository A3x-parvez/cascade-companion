import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-black mb-3">Contact Us</h1>
            <p className="text-lg text-gray-700">
              We’d love to hear from you! Reach out to us using the details below.
            </p>
          </div>

          {/* Contact Information (Vertical + Wide) */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2 p-8 rounded-2xl shadow-lg bg-emerald-50 hover:shadow-2xl transition-shadow w-full">
              <Mail className="w-7 h-7 text-emerald-600" />
              <p className="font-medium text-black text-lg">Email</p>
              <p className="text-gray-700 text-center">info@waterfallexplorer.com</p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-8 rounded-2xl shadow-lg bg-emerald-50 hover:shadow-2xl transition-shadow w-full">
              <Phone className="w-7 h-7 text-emerald-600" />
              <p className="font-medium text-black text-lg">Phone</p>
              <p className="text-gray-700 text-center">+1 (555) 123-FALL</p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-8 rounded-2xl shadow-lg bg-emerald-50 hover:shadow-2xl transition-shadow w-full">
              <MapPin className="w-7 h-7 text-emerald-600" />
              <p className="font-medium text-black text-lg">Address</p>
              <p className="text-gray-700 text-center">
                123 Nature Trail <br />
                Waterfall Valley, WV 12345 <br />
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
