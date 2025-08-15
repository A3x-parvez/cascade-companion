import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { tallestOverallHeight } from '@/data/waterfallData';
import { TrendingUp } from 'lucide-react';

const OverallHeight = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Tallest Waterfalls by Overall Height</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Discover the world's tallest waterfalls ranked by their total vertical drop from top to bottom.
            </p>
          </div>
          
          <WaterfallTable waterfalls={tallestOverallHeight} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OverallHeight;