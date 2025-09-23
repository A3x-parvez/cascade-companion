import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import State from "./pages/State";
import Blog from "./pages/Blog";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import MaintenancePage from "./pages/MaintenancePage";
import SearchResults from "./pages/SearchResults";
import RecentlyAdd from "./pages/Recently_add";
import ViewAllwaterfall from "./components/ViewAllwaterfall";
import WteroDevmark from "./pages/wtero_devmark";

const queryClient = new QueryClient();

const App = () => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        // This fetch call does NOT need an API key
        const response = await fetch(`${apiBaseUrl}/api/v1/status`);
        const data = await response.json();

        if (data.status === "maintenance") {
          setIsMaintenanceMode(true);
        }
      } catch (error) {
        console.error(
          "Could not connect to API, assuming maintenance mode:",
          error
        );
        // If the API is completely down, show the maintenance page as a fallback
        setIsMaintenanceMode(true);
      } finally {
        setIsLoading(false);
      }
    };
    checkStatus();
  }, []);

  // Show a blank screen or a simple loader while checking the status
  if (isLoading) {
    return <div className="min-h-screen" />;
  }

  // If in maintenance mode, show ONLY the maintenance page
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/state" element={<State />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Recently_add" element={<RecentlyAdd />} />
            <Route path="/we-are-wtero" element={<WteroDevmark />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="/ViewAllwaterfall" element={<ViewAllwaterfall />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
