import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin } from 'lucide-react';

const countries = [
  { name: 'Iceland', count: 127, flag: '🇮🇸', featured: 'Gullfoss' },
  { name: 'Brazil', count: 89, flag: '🇧🇷', featured: 'Iguazu Falls' },
  { name: 'Norway', count: 156, flag: '🇳🇴', featured: 'Seven Sisters' },
  { name: 'Canada', count: 203, flag: '🇨🇦', featured: 'Niagara Falls' },
  { name: 'New Zealand', count: 98, flag: '🇳🇿', featured: 'Sutherland Falls' },
  { name: 'Venezuela', count: 67, flag: '🇻🇪', featured: 'Angel Falls' },
  { name: 'Costa Rica', count: 45, flag: '🇨🇷', featured: 'La Fortuna' },
  { name: 'Japan', count: 78, flag: '🇯🇵', featured: 'Nachi Falls' }
];

const CountryBrowser = () => {
  return (
    <section className="py-16 px-4 bg-mist">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-forest-deep mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Browse by Country
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover waterfalls from around the globe, organized by country for easy exploration
          </p>
        </div>
        
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Card 
              key={country.name}
              className="waterfall-card group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-forest-deep transition-colors">
                  {country.name}
                </h3>
                <Badge variant="secondary" className="mb-3">
                  {country.count} waterfalls
                </Badge>
                <div className="flex items-center justify-center text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Featured: {country.featured}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryBrowser;