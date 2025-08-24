import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Other pages
import Countries from "./pages/Countries"; // Renamed from Countries for clarity
import Blog from "./pages/Blog";
import Books from "./pages/Books"; // Renamed from Books
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import SearchResults from "./pages/SearchResults";
import RecentlyAdd from "./pages/Recently_add"; // Renamed file for consistency
import ViewAllwaterfall from "./components/ViewAllwaterfall"; // Renamed file for consistency

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

          {/* Other routes with clean, conventional paths */}
          <Route path="/countries" element={<Countries />} />

          <Route path="/blog" element={<Blog/>} />

          <Route path="/books" element={<Books/>} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/help" element={<Help/>} />

          <Route path="/Recently_add" element={<RecentlyAdd/>} />

          <Route path="/ViewAllwaterfall" element={<ViewAllwaterfall/>} />

          {/* Catch-all "*" route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;