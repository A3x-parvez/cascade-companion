// export interface Waterfall {
//   id: string;
//   type: string;
//   name: string;
//   avgWidth: number;
//   avgHeight: number;
//   watercourse: string;
//   location: string;
// }

// export const dummyWaterfalls: Waterfall[] = [
//   {
//     id: '1',
//     type: 'Segmented',
//     name: 'Jog Falls',
//     avgWidth: 472,
//     avgHeight: 253,
//     watercourse: 'Sharavathi River',
//     location: 'India, Karnataka'
//   },
//   {
//     id: '2',
//     type: 'Block',
//     name: 'Athirappilly Falls',
//     avgWidth: 100,
//     avgHeight: 80,
//     watercourse: 'Chalakudy River',
//     location: 'India, Kerala'
//   },
//   {
//     id: '3',
//     type: 'Plunge',
//     name: 'Nohkalikai Falls',
//     avgWidth: 23,
//     avgHeight: 340,
//     watercourse: 'Unnamed stream near Cherrapunji',
//     location: 'India, Meghalaya'
//   },
//   {
//     id: '4',
//     type: 'Horseshoe',
//     name: 'Chitrakote Falls',
//     avgWidth: 300,
//     avgHeight: 29,
//     watercourse: 'Indravati River',
//     location: 'India, Chhattisgarh'
//   },
//   {
//     id: '5',
//     type: 'Tiered',
//     name: 'Dudhsagar Falls',
//     avgWidth: 30,
//     avgHeight: 310,
//     watercourse: 'Mandovi River',
//     location: 'India, Goa'
//   },
//   {
//     id: '6',
//     type: 'Cascade',
//     name: 'Vajrai Falls',
//     avgWidth: 70,
//     avgHeight: 560,
//     watercourse: 'Urvashi River',
//     location: 'India, Maharashtra'
//   },
//   {
//     id: '7',
//     type: 'Block',
//     name: 'Hogenakkal Falls',
//     avgWidth: 300,
//     avgHeight: 20,
//     watercourse: 'Kaveri River',
//     location: 'India, Tamil Nadu'
//   },
//   {
//     id: '8',
//     type: 'Plunge',
//     name: 'Barehipani Falls',
//     avgWidth: 120,
//     avgHeight: 399,
//     watercourse: 'Budhabalanga River',
//     location: 'India, Odisha'
//   },
//   {
//     id: '9',
//     type: 'Cascade',
//     name: 'Kempty Falls',
//     avgWidth: 15,
//     avgHeight: 40,
//     watercourse: 'Tons River tributary',
//     location: 'India, Uttarakhand'
//   },
//   {
//     id: '10',
//     type: 'Plunge',
//     name: 'Hundru Falls',
//     avgWidth: 50,
//     avgHeight: 98,
//     watercourse: 'Subarnarekha River',
//     location: 'India, Jharkhand'
//   }
// ];


// export const tallestOverallHeight = dummyWaterfalls.sort((a, b) => b.avgHeight - a.avgHeight);
// export const tallestSingleDrop = dummyWaterfalls.filter(w => w.type === 'Plunge').sort((a, b) => b.avgHeight - a.avgHeight);
// export const freeFallingDrops = dummyWaterfalls.filter(w => w.type === 'Plunge' || w.type === 'Horsetail').sort((a, b) => b.avgHeight - a.avgHeight);

// export const largestByWidth = dummyWaterfalls.sort((a, b) => b.avgWidth - a.avgWidth);
// export const largestByVolume = dummyWaterfalls.filter(w => w.type === 'Cataract' || w.type === 'Cascade').sort((a, b) => b.avgWidth - a.avgWidth);
// export const volumeNoRapids = dummyWaterfalls.filter(w => w.type === 'Plunge' || w.type === 'Curtain').sort((a, b) => b.avgWidth - a.avgWidth);
// export const volumeStillExist = dummyWaterfalls.sort((a, b) => b.avgWidth - a.avgWidth);

// export const waterfallsByCountry = {
// 'Karnataka': dummyWaterfalls.filter(w => w.location.includes('Karnataka')),
//   'Kerala': dummyWaterfalls.filter(w => w.location.includes('Kerala')),
//   'Meghalaya': dummyWaterfalls.filter(w => w.location.includes('Meghalaya')),
//   'Chhattisgarh': dummyWaterfalls.filter(w => w.location.includes('Chhattisgarh')),
//   'Goa': dummyWaterfalls.filter(w => w.location.includes('Goa')),
//   'Maharashtra': dummyWaterfalls.filter(w => w.location.includes('Maharashtra')),
//   'Tamil Nadu': dummyWaterfalls.filter(w => w.location.includes('Tamil Nadu')),
//   'Odisha': dummyWaterfalls.filter(w => w.location.includes('Odisha')),
//   'Uttarakhand': dummyWaterfalls.filter(w => w.location.includes('Uttarakhand')),
//   'Jharkhand': dummyWaterfalls.filter(w => w.location.includes('Jharkhand'))
// };

import { useState, useEffect, useMemo } from 'react';

// The interface remains the same as your original definition.
export interface Waterfall {
  id: string;
  type: string;
  name: string;
  avgWidth: string;
  avgHeight: string;
  avgWidthnum: number;
  avgHeightnum: number;
  watercourse: string;
  location: string;
}

/**
 * Custom hook to fetch and process waterfall data from the API.
 * @returns An object containing the loading state, error state, and processed waterfall data.
 */
export const dummyWaterfalls = () => {
  // State to hold the waterfall data fetched from the API
  const [waterfalls, setWaterfalls] = useState<Waterfall[]>([]);
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to handle any potential errors during the fetch
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchWaterfalls = async () => {
      try {
        // Fetch data from your API endpoint.
        // Replace with your full API URL if the frontend is not served from the same origin.
      const apiUrl = import.meta.env.VITE_API_URL || '/api/v1/waterfalls';
        const apiKey = import.meta.env.VITE_API_KEY || 'YOUR_API_KEY_HERE';

        const response = await fetch(`${apiUrl}/api/v1/waterfalls`, {
            headers: {
                'X-API-Key': apiKey
            }
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const apiData = await response.json();

        // Transform the API data to match the frontend's Waterfall interface.
        const transformedData: Waterfall[] = apiData.map((w: any, index: number) => ({
          // The API doesn't provide an ID, so we create one.
          // Using the waterfall name + index for a more stable key.
          id: `${w.waterfallname}-${index}`,
          // The API doesn't have a 'type' field. We'll use the 'remarks' field if it exists,
          // otherwise, we'll default to 'N/A'.
          type: w.remarks || 'N/A',
          name: w.waterfallname,
          // Safely parse width and height from string to number, defaulting to 0 if invalid.
          avgWidth: w.width,
          avgHeight: w.height,
          avgWidthnum: w.width || 'Unknown',
          avgHeightnum: parseInt(w.height, 10) || 0,
          watercourse: w.course_name,
          // Combine location and state for the full location string.
          location: `${w.location}, ${w.state}`,
        }));

        setWaterfalls(transformedData);
      } catch (err: any) {
        console.error("Failed to fetch waterfalls:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWaterfalls();
  }, []); // The empty dependency array ensures this runs only once on mount.

  // --- Data Processing Logic ---
  // useMemo is used to prevent re-calculating these lists on every re-render.
  // Note: We use [...waterfalls] to create a shallow copy before sorting,
  // which prevents mutating the original state directly.

  const tallestOverallHeight = useMemo(() =>
    [...waterfalls].sort((a, b) => b.avgWidthnum - a.avgHeightnum), [waterfalls]);

  const largestByWidth = useMemo(() =>
    [...waterfalls].sort((a, b) => b.avgWidthnum - a.avgWidthnum), [waterfalls]);

  const volumeStillExist = useMemo(() =>
    [...waterfalls].sort((a, b) => b.avgWidthnum- a.avgWidthnum), [waterfalls]);

  const waterfallsByState = useMemo(() => {
    // This dynamically creates groups based on the state from the API data.
    return waterfalls.reduce((acc, w) => {
      const state = w.location.split(', ')[1];
      if (state) {
        if (!acc[state]) {
          acc[state] = [];
        }
        acc[state].push(w);
      }
      return acc;
    }, {} as Record<string, Waterfall[]>);
  }, [waterfalls]);

  // Return all the processed data and state flags.
  // A component using this hook can then decide how to render this data.
  return {
    isLoading,
    error,
    waterfalls,
    tallestOverallHeight,
    largestByWidth,
    volumeStillExist,
    waterfallsByState,
  };
};



