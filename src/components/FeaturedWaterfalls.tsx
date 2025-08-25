import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass } from 'lucide-react';
import WaterfallCard from './WaterfallCard';
import { useNavigate } from 'react-router-dom';
// Sample data - this would come from Supabase in the full implementation
const featuredWaterfalls = [
  {
    id: '1',
    name: 'Jog Falls',
    country: 'India (Karnataka)',
    height_meters: 253,
    type: 'Segmented',
    image_url: 'https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg',
    description: 'One of the highest waterfalls in India, formed by the Sharavathi River, plunging in four distinct cascades.'
  },
  {
    id: '2',
    name: 'Athirappilly Falls',
    country: 'India (Kerala)',
    height_meters: 80,
    type: 'Block',
    image_url: 'https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg',
    description: 'Often called the "Niagara of India", this waterfall on the Chalakudy River is surrounded by lush green forests.'
  },
  {
    id: '3',
    name: 'Nohkalikai Falls',
    country: 'India (Meghalaya)',
    height_meters: 340,
    type: 'Plunge',
    image_url: 'https://images.pexels.com/photos/356831/pexels-photo-356831.jpeg',
    description: 'The tallest plunge waterfall in India, dropping into a turquoise pool near Cherrapunji.'
  },
  {
    id: '4',
    name: 'Chitrakote Falls',
    country: 'India (Chhattisgarh)',
    height_meters: 29,
    type: 'Horseshoe',
    image_url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    description: 'Also known as the "Niagara of India", this wide horseshoe-shaped waterfall is on the Indravati River.'
  },
  {
    id: '5',
    name: 'Dudhsagar Falls',
    country: 'India (Goa)',
    height_meters: 310,
    type: 'Tiered',
    image_url: 'https://images.pexels.com/photos/14655171/pexels-photo-14655171.jpeg',
    description: 'Famous for its milky white appearance, Dudhsagar Falls cascades down the Western Ghats along the Goa-Karnataka border.'
  },
  {
    id: '6',
    name: 'Jog Falls',
    country: 'India (Karnataka)',
    height_meters: 253,
    type: 'Segmented',
    image_url: 'https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg',
    description: 'Among the highest waterfalls in India, Jog Falls is formed by the Sharavathi River and drops in four distinct segments.'
  },
  {
    id: '7',
    name: 'Athirappilly Falls',
    country: 'India (Kerala)',
    height_meters: 80,
    type: 'Block',
    image_url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    description: 'Often called the "Niagara of South India", Athirappilly Falls is Kerala’s largest waterfall, surrounded by lush rainforests.'
  },
  {
    id: '8',
    name: 'Bhimlat Falls',
    country: 'India (Rajasthan)',
    height_meters: 60,
    type: 'Plunge',
    image_url: 'https://images.pexels.com/photos/356831/pexels-photo-356831.jpeg',
    description: 'Located in the desert state of Rajasthan, Bhimlat Falls is a striking plunge waterfall that creates an oasis-like scene during monsoon.'
  }

];
const FeaturedWaterfalls = () => {
  const navigate = useNavigate(); // <-- hook for navigation

  const handleViewAll = () => {
    navigate('/ViewAllwaterfall'); // <-- navigate to page
  };

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
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Explore some of the India's most magnificent waterfalls, from towering giants to hidden treasures
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
          <Button
            size="lg"
            className="ocean-gradient hover:opacity-90 transition-opacity px-8"
            onClick={handleViewAll} // <-- button click navigates
          >
            View All Waterfalls
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWaterfalls;