import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import TableSkeleton from '@/components/TableSkeleton';
import { dummyWaterfalls } from '@/data/waterfallData';
import { Search } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(true);

  const filteredWaterfalls = dummyWaterfalls.filter(waterfall =>
    waterfall.name.toLowerCase().includes(query.toLowerCase()) ||
    waterfall.location.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setIsLoading(true);
    // Simulate a data fetch
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900); // 0.9 second delay

    return () => clearTimeout(timer);
  }, [query]); // Re-run effect when query changes

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Search className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">
                Search Results for "{query}"
              </h1>
            </div>
            {!isLoading && (
              <p className="text-lg text-muted-foreground">
                {filteredWaterfalls.length} waterfalls found matching your search.
              </p>
            )}
          </div>
          
          {isLoading ? (
            <TableSkeleton />
          ) : filteredWaterfalls.length > 0 ? (
            <WaterfallTable waterfalls={filteredWaterfalls} />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-foreground">No Waterfalls Found</h2>
              <p className="text-muted-foreground mt-2">
                Try searching for a different name or country.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
