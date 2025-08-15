import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { largestByWidth } from '@/data/waterfallData';
import { Expand } from 'lucide-react';

const AverageWidth = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Expand className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Largest Waterfalls by Average Width</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Explore the widest waterfalls in the world, showcasing nature's grandest curtains of water.
            </p>
          </div>
          
          <WaterfallTable waterfalls={largestByWidth} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AverageWidth;