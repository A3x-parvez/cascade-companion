import React from 'react';
import { Button } from '@/components/ui/button';
import { Waves, Map, Search, Globe, Settings } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 ocean-gradient rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Waterfall Explorer</h1>
              <p className="text-xs text-muted-foreground">Discover Nature's Beauty</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="hover:bg-accent">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" className="hover:bg-accent">
              <Map className="w-4 h-4 mr-2" />
              Map
            </Button>
            <Button variant="ghost" className="hover:bg-accent">
              <Globe className="w-4 h-4 mr-2" />
              Countries
            </Button>
          </div>
          
          {/* Mobile Menu & Settings */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;