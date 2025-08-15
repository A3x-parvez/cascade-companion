import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { waterfallsByCountry } from '@/data/waterfallData';
import { Globe2 } from 'lucide-react';

const Countries = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Globe2 className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Browse Waterfalls by Country</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Explore magnificent waterfalls organized by their geographic locations around the world.
            </p>
          </div>
          
          <div className="space-y-12">
            {Object.entries(waterfallsByCountry).map(([country, waterfalls]) => (
              <div key={country} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                  {country}
                </h2>
                <WaterfallTable waterfalls={waterfalls} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Countries;