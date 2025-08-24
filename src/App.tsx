import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tallest pages
import OverallHeight from "./pages/tallest/OverallHeight";
import SingleDrop from "./pages/tallest/SingleDrop";
import FreeFalling from "./pages/tallest/FreeFalling";

// Largest pages
import AverageWidth from "./pages/largest/AverageWidth";
import AverageVolume from "./pages/largest/AverageVolume";
import VolumeNoRapids from "./pages/largest/VolumeNoRapids";
import VolumeExist from "./pages/largest/VolumeExist";

// Other pages
import Countries from "./pages/Countries";
import Blog from "./pages/Blog";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import SearchResults from "./pages/SearchResults";
import RecentlyAdd from "./pages/Recently_add";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Search Route */}
          <Route path="/search" element={<SearchResults />} />

          {/* Tallest routes */}
          <Route path="/tallest/overall-height" element={<OverallHeight />} />
          <Route path="/tallest/single-drop" element={<SingleDrop />} />
          <Route path="/tallest/free-falling" element={<FreeFalling />} />
          
          {/* Largest routes */}
          <Route path="/largest/average-width" element={<AverageWidth />} />
          <Route path="/largest/average-volume" element={<AverageVolume />} />
          <Route path="/largest/volume-no-rapids" element={<VolumeNoRapids />} />
          <Route path="/largest/volume-exist" element={<VolumeExist />} />
          
          {/* Other routes */}
          <Route path="/countries" element={<Countries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/Recently_add" element={<RecentlyAdd />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
