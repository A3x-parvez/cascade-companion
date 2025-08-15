import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Ruler, Droplets } from 'lucide-react';

interface WaterfallCardProps {
  waterfall: {
    id: string;
    name: string;
    country: string;
    height_meters: number;
    type: string;
    image_url: string;
    description: string;
  };
}

const WaterfallCard: React.FC<WaterfallCardProps> = ({ waterfall }) => {
  return (
    <Card className="waterfall-card group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={waterfall.image_url} 
          alt={waterfall.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge 
          className="absolute top-3 right-3 bg-primary/90 text-primary-foreground"
        >
          {waterfall.type}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-ocean-deep transition-colors">
          {waterfall.name}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{waterfall.country}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-ocean-deep">
            <Ruler className="w-4 h-4 mr-1" />
            <span className="font-medium">{waterfall.height_meters}m</span>
          </div>
          <Droplets className="w-5 h-5 text-ocean-light flow-animation" />
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {waterfall.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default WaterfallCard;