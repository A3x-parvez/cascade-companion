import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { dummyWaterfalls, Waterfall } from '@/data/waterfallData';

const ViewAllwaterfall = () => {
  // Use the custom hook to fetch waterfall data
  const { isLoading, error, waterfalls } = dummyWaterfalls();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading waterfalls...</p>
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
    <div className="p-4 min-h-screen">
      <Navigation />
      <h2 className="text-2xl font-bold mb-4">All Waterfalls</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Width</th>
              <th className="px-4 py-2 border">Height</th>
              <th className="px-4 py-2 border">No of drop</th>
              <th className="px-4 py-2 border">Course Name</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Coordinate</th>
              <th className="px-4 py-2 border">Remarks</th>
              
            </tr>
          </thead>
          <tbody>
            {waterfalls.map((waterfall: Waterfall) => (
              <tr key={waterfall.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{waterfall.name}</td>
                <td className="px-4 py-2 border">{waterfall.avgWidth}</td>
                <td className="px-4 py-2 border">{waterfall.avgHeight}</td>
                <td className="px-4 py-2 border">{waterfall.no_of_drops}</td>
                <td className="px-4 py-2 border">{waterfall.watercourse}</td>
                <td className="px-4 py-2 border">{waterfall.location}</td>
                <td className="px-4 py-2 border">{waterfall.coordinate}</td>
                <td className="px-4 py-2 border">{waterfall.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAllwaterfall;
