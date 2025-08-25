import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { dummyWaterfalls, Waterfall } from '@/data/waterfallData';

// Optional helper to format MongoDB ObjectId date
const getDateFromObjectId = (objectId: string): string => {
  try {
    const timestamp = parseInt(objectId.substring(0, 8), 16) * 1000;
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return 'Invalid Date';
  }
};

const ViewAllwaterfall = () => {
  const { isLoading, error, waterfalls } = dummyWaterfalls();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-900">Loading waterfalls...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4"> {/* Padding top fixes navbar overlap */}
        <div className="container mx-auto max-w-9xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">All Waterfalls</h2>

          <div className="overflow-x-auto rounded-lg shadow-2xl shadow-black/20 border border-gray-300 bg-white">
            <table className="w-full bg-white">
              <thead className="bg-emerald-500/20">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Width
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Height
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    No of Drop
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Coordinates
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Remarks
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {waterfalls.map((waterfall: Waterfall) => (
                  <tr key={waterfall.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.avgWidth}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.avgHeight}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.no_of_drops}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.watercourse}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.coordinate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {waterfall.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewAllwaterfall;
