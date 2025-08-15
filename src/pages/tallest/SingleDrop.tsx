import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { tallestSingleDrop } from '@/data/waterfallData';
import { TrendingUp } from 'lucide-react';

const SingleDrop = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Tallest Single Drop Waterfalls</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Experience the power of nature's single-drop plunge waterfalls with uninterrupted vertical falls.
            </p>
          </div>
          
          <WaterfallTable waterfalls={tallestSingleDrop} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SingleDrop;