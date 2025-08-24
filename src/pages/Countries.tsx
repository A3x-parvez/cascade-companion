import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { dummyWaterfalls } from '@/data/waterfallData'; // import the hook // Import the new hook
import { Globe2, ChevronDown } from 'lucide-react';


const States = () => {
  // Use the new custom hook to get live, processed data
  const { isLoading, error, waterfallsByState } = dummyWaterfalls();
  const [activeState, setActiveState] = useState<string | null>(null);

  // When data loads, open the first state in the list by default
  useEffect(() => {
    if (waterfallsByState) {
      const firstState = Object.keys(waterfallsByState)[0];
      if (firstState) {
        setActiveState(firstState);
      }
    }
  }, [waterfallsByState]);

  const handleToggle = (stateName: string) => {
    setActiveState(activeState === stateName ? null : stateName);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><p>Loading waterfalls...</p></div>;
  }
  if (error) {
    return <div className="min-h-screen flex items-center justify-center"><p>Error: {error}</p></div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Globe2 className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold">Browse Waterfalls by State</h1>
            </div>
            <p className="text-lg text-gray-600">
              Explore magnificent waterfalls organized by their geographic locations around India.
            </p>
          </div>
          
          <div className="space-y-4">
            {Object.entries(waterfallsByState).map(([state, waterfalls]) => (
              <div key={state} className="border border-gray-200 rounded-lg">
                <h2 
                  className="text-2xl font-bold p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                  onClick={() => handleToggle(state)}
                >
                  <span>{state}</span>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${activeState === state ? 'rotate-180' : ''}`} 
                  />
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeState === state ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-4 border-t border-gray-200">
                    <WaterfallTable waterfalls={waterfalls} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default States;