import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass } from 'lucide-react';
import WaterfallCard from './WaterfallCard';

// Sample data - this would come from Supabase in the full implementation
const featuredWaterfalls = [
  {
    id: '1',
    name: 'Angel Falls',
    country: 'Venezuela',
    height_meters: 979,
    type: 'Plunge',
    image_url: '/placeholder.svg',
    description: 'The world\'s highest uninterrupted waterfall, cascading from the Auyán-tepui mountain in Canaima National Park.'
  },
  {
    id: '2',
    name: 'Niagara Falls',
    country: 'USA/Canada',
    height_meters: 51,
    type: 'Cataract',
    image_url: '/placeholder.svg',
    description: 'One of the most famous waterfalls in the world, known for its powerful flow and rainbow mists.'
  },
  {
    id: '3',
    name: 'Iguazu Falls',
    country: 'Argentina/Brazil',
    height_meters: 82,
    type: 'Cascade',
    image_url: '/placeholder.svg',
    description: 'A spectacular system of 275 waterfalls on the border between Argentina and Brazil.'
  },
  {
    id: '4',
    name: 'Victoria Falls',
    country: 'Zambia/Zimbabwe',
    height_meters: 108,
    type: 'Curtain',
    image_url: '/placeholder.svg',
    description: 'Known locally as "Mosi-oa-Tunya" (the smoke that thunders), it\'s one of the largest waterfalls in the world.'
  }
];

const FeaturedWaterfalls = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Compass className="w-8 h-8 text-ocean-deep mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Waterfalls
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of the world's most magnificent waterfalls, from towering giants to hidden treasures
          </p>
        </div>
        
        {/* Waterfall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredWaterfalls.map((waterfall) => (
            <WaterfallCard key={waterfall.id} waterfall={waterfall} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="ocean-gradient hover:opacity-90 transition-opacity px-8">
            View All Waterfalls
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWaterfalls;