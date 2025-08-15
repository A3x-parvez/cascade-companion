import React from 'react';
import { Waves, Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 ocean-gradient rounded-lg flex items-center justify-center">
                <Waves className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Global Waterfall Explorer</h3>
                <p className="text-sm text-muted-foreground">Discover Nature's Beauty</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Explore the world's most magnificent waterfalls. From hidden gems to iconic cascades, 
              discover nature's most spectacular water features from around the globe.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-ocean-deep transition-colors">All Waterfalls</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Interactive Map</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Countries</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Types</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Height Rankings</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-ocean-deep transition-colors">About</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">API</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-ocean-deep transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Global Waterfall Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;