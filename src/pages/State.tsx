import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { dummyWaterfalls } from '@/data/waterfallData';
import { Globe2, ChevronDown } from 'lucide-react';

const States = () => {
  const { isLoading, error, waterfallsByState } = dummyWaterfalls();
  const [activeState, setActiveState] = useState<string | null>(null);

  useEffect(() => {
  if (waterfallsByState) {
    const sortedStates = Object.keys(waterfallsByState).sort((a, b) =>
      a.localeCompare(b)
    );
    if (sortedStates.length > 0) {
      setActiveState(sortedStates[0]); // open alphabetically first state
    }
  }
}, [waterfallsByState]);

  const handleToggle = (stateName: string) => {
    setActiveState(activeState === stateName ? null : stateName);
  };

  if (isLoading) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-background">
          <div className="flex flex-col items-center space-y-4">
            {/* Loader Animation */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
            </div>

            {/* Loading Text */}
            <p className="text-lg font-medium text-gray-700 animate-pulse">
              Loading waterfalls...
            </p>
          </div>
        </div>
      );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700/30 via-emerald-200/40 to-teal-500/30 backdrop-blur-lg">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-background">
    <Navigation />

    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Globe2 className="w-8 h-8 text-black mr-3 drop-shadow" />
            <h1 className="text-4xl font-bold text-black drop-shadow-lg">
              Browse Waterfalls by State
            </h1>
          </div>
          <p className="text-lg text-black/80">
            Explore magnificent waterfalls organized by their geographic locations around India.
          </p>
        </div>

        {/* States Accordion */}
        <div className="space-y-4">
          {Object.entries(waterfallsByState)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([state, waterfalls]) => (
              <div
                key={state}
                className="rounded-xl border border-black/20 shadow-lg bg-white/10 backdrop-blur-md"
              >
                <h2
                  className="text-2xl font-semibold p-4 flex justify-between items-center cursor-pointer hover:bg-black/5 text-black"
                  onClick={() => handleToggle(state)}
                >
                  <span>{state}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeState === state ? 'rotate-180' : ''
                    } text-black`}
                  />
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeState === state ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 border-t border-black/20">
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
