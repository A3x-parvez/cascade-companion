import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '@/assets/hero-video.mp4';
import heroImage from '@/assets/hero-waterfall.jpg';
import CountUp from 'react-countup'; // Using CountUp for a better visual

// Define a type for our stats data
interface SiteStats {
  waterfall_count: number;
  state_count: number;
}

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const [stats, setStats] = useState<SiteStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiBaseUrl || !apiKey) {
          throw new Error("API configuration is missing in .env.local file.");
        }

        const response = await fetch(`${apiBaseUrl}/api/v1/stats`, {
          headers: { 'X-API-Key': apiKey },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        
        const data: SiteStats = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
        // Set default stats on error so the page doesn't look broken
        setStats({ waterfall_count: 0, state_count: 0 });
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []); // Empty array ensures this runs only once

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Corrected and simplified this function
  const handleStateClick = (state: string) => {
    // navigate(`/search?q=${encodeURIComponent(state)}`);
    setSearchQuery(state);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImage}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      
      {/* Gradient Overlay */}
      <div  className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          {/* <Waves className="w-12 h-12 text-white mr-4" /> */}
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            India Waterfall
            <span className="block text-4xl md:text-6xl text-cyan-300">Database</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Discover India's most magnificent waterfalls, from hidden gems to iconic cascades.
        </p>
        
       {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search waterfalls by name or state..."
                className="pl-10 h-12 text-lg bg-gray-900/50 text-white border-white/30 placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-700 transition-colors px-8 h-12 text-black" onClick={handleSearch}>
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {['Karnataka', 'Kerala', 'Maharashtra', 'Chhattisgarh', 'Meghalaya'].map((state) => (
              <Button
                key={state}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-white/40"
                onClick={() => handleStateClick(state)}
              >
                {state}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {loading ? '...' : <CountUp end={stats?.waterfall_count || 0} duration={2.5} separator="," suffix="+" />}
            </div>
            <div className="text-sm md:text-base opacity-90">Waterfalls</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {loading ? '...' : <CountUp end={stats?.state_count || 0} duration={2.5} />}
            </div>
            <div className="text-sm md:text-base opacity-90">States</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">24/7</div>
            <div className="text-sm md:text-base opacity-90">Updated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;