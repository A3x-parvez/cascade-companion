import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { volumeNoRapids } from '@/data/waterfallData';
import { Expand } from 'lucide-react';

const VolumeNoRapids = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Expand className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Largest by Volume (no Rapids)</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Waterfalls with massive volume flowing smoothly without rapids or turbulent sections.
            </p>
          </div>
          
          <WaterfallTable waterfalls={volumeNoRapids} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolumeNoRapids;