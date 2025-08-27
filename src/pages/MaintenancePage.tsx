// pages/MaintenancePage.tsx

import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-50 px-6">
      <div className="text-center bg-white rounded-2xl shadow-xl p-10 max-w-lg border border-gray-200">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 p-4 rounded-full shadow-inner">
            <Wrench className="w-12 h-12 text-emerald-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          We’ll Be Back Soon!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our website is currently undergoing scheduled maintenance.  
          We’re working hard to bring everything back online as quickly as possible.  
          Please check back in a little while.
        </p>

        {/* Contact */}
        <p className="text-gray-500 text-sm">
          Need assistance?{" "}
          <a
            href="mailto:contact@wtero.com"
            className="text-emerald-600 font-medium hover:underline"
          >
            contact@wtero.com
          </a>
        </p>
      </div>
    </div>
  );
}
