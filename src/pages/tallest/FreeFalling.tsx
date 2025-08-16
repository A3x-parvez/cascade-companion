import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import TableSkeleton from '@/components/TableSkeleton';
import { freeFallingDrops } from '@/data/waterfallData';
import { TrendingUp } from 'lucide-react';

const FreeFalling = () => {
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate a data fetch
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Free-falling Drop Waterfalls</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Marvel at waterfalls where water falls freely through the air without touching the cliff face.
            </p>
          </div>

           {isLoading ? (
            <TableSkeleton />
          ) : (
            <WaterfallTable waterfalls={freeFallingDrops} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreeFalling;