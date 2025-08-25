import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Clock } from 'lucide-react';

// 1. Correct the interface to match your API
interface Waterfall {
  id: string;
  waterfallname: string;
  height: string;
  width: string;
  no_of_drops: string;
  course_name: string;
  location: string;
  state: string;
  remarks: string;
  latitude: string;  // Changed from coordinate
  longitude: string; // Added longitude
}

// Helper function to extract the date from a MongoDB ObjectId
const getDateFromObjectId = (objectId: string): string => {
  try {
    const timestamp = parseInt(objectId.substring(0, 8), 16) * 1000;
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch (e) {
    return 'Invalid Date';
  }
};

const RecentlyAddedWaterfalls = () => {
  const [waterfalls, setWaterfalls] = useState<Waterfall[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWaterfalls = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;

        if (!apiBaseUrl || !apiKey) {
          throw new Error("API URL or Key is not configured in .env.local file.");
        }

        const response = await fetch(`${apiBaseUrl}/api/v1/waterfalls`, {
          headers: { 'X-API-Key': apiKey },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const unsortedData: Waterfall[] = await response.json();
        const sortedData = unsortedData.sort((a, b) => b.id.localeCompare(a.id));
        setWaterfalls(sortedData);

      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWaterfalls();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><p>Loading waterfalls...</p></div>;
  }
  if (error) {
    return <div className="min-h-screen flex items-center justify-center"><p>Error: {error}</p></div>;
  }

  return (
  <div className="min-h-screen">
    <Navigation />
    <main className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-9xl">

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold">Recently Added Waterfalls</h1>
          </div>
          <p className="text-lg text-gray-600">
            Explore the latest waterfalls added to our database. Sorted by date for your convenience.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-lg shadow-2xl shadow-black/20 border border-gray-300 bg-white">
          <table className="w-full bg-white">
            <thead className="bg-emerald-500/20">
            {/* <thead className="bg-teal-500/30"> */}
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Date Added
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  No of Drop
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Height
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Width
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  State
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
              {waterfalls.map((waterfall) => (
                <tr key={waterfall.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {getDateFromObjectId(waterfall.id)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.waterfallname}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.no_of_drops}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.height}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.width}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.course_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.state}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.latitude && waterfall.longitude
                      ? `${waterfall.latitude}, ${waterfall.longitude}`
                      : 'NA'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {waterfall.remarks ? waterfall.remarks : 'NA'}
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

export default RecentlyAddedWaterfalls;