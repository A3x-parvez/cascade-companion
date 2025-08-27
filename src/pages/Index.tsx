import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedWaterfalls from '@/components/FeaturedWaterfalls';
import StateBrowser from '@/components/StateBrowser';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedWaterfalls />
      <StateBrowser />
      <Footer />
    </div>
  );
};

export default Index;
