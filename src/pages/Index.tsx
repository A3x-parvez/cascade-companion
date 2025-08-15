import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedWaterfalls from '@/components/FeaturedWaterfalls';
import CountryBrowser from '@/components/CountryBrowser';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedWaterfalls />
      <CountryBrowser />
      <Footer />
    </div>
  );
};

export default Index;
