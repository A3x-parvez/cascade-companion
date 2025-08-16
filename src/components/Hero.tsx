import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-waterfall.jpg';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCountryClick = (country: string) => {
    navigate(`/search?q=${encodeURIComponent(country)}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Mist Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 mist-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Waves className="w-12 h-12 text-primary-foreground mr-4 flow-animation" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
            Global Waterfall
            <span className="block text-4xl md:text-6xl text-ocean-light">Explorer</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
          Discover the world's most magnificent waterfalls, from hidden gems to iconic cascades
        </p>
        
       {/* Search Bar */}
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-[var(--shadow-water)] border border-border/20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search waterfalls by name or country..."
                className="pl-10 h-12 text-lg bg-muted border-border/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button size="lg" className="ocean-gradient hover:opacity-90 transition-opacity px-8 h-12" onClick={handleSearch}>
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {['Iceland', 'Brazil', 'Norway', 'Canada', 'New Zealand'].map((country) => (
              <Button
                key={country}
                variant="outline"
                size="sm"
                className="bg-background/30 border-border/30 hover:bg-accent/50"
                onClick={() => handleCountryClick(country)}
              >
                {country}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 text-primary-foreground">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">1,200+</div>
            <div className="text-sm md:text-base opacity-90">Waterfalls</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">85</div>
            <div className="text-sm md:text-base opacity-90">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">24/7</div>
            <div className="text-sm md:text-base opacity-90">Updated</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 ripple-animation"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
