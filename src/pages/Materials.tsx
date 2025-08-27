import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface Material {
  id: string;
  title: string;
  description: string;
  pdf_id: string;
}

const Materials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;

        if (!apiBaseUrl || !apiKey) throw new Error("API URL or Key is not configured.");
        
        const response = await fetch(`${apiBaseUrl}/api/v1/materials`, {
          headers: { 'X-API-Key': apiKey },
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data: Material[] = await response.json();
        setMaterials(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMaterials();
  }, []);

  if (loading) return (
        <div className="min-h-screen flex justify-center items-center bg-background">
          <div className="flex flex-col items-center space-y-4">
            {/* Loader Animation */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
            </div>

            {/* Loading Text */}
            <p className="text-lg font-medium text-gray-700 animate-pulse">
              Loading materials...
            </p>
          </div>
        </div>
      );

  if (error) return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-red-500 text-lg">Error: {error}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <BookOpen className="w-10 h-10 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Materials & Resources</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
              A collection of guides, checklists, and research documents available for viewing.
            </p>
          </div>
          
          {/* Material Cards */}
          <div className="space-y-6">
            {materials.length > 0 ? (
              materials.map((material, index) => {
                const pdfUrl = `${import.meta.env.VITE_API_URL}/media/${material.pdf_id}`;
                return (
                  <motion.div
                    key={material.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-emerald-500/10 border border-gray-200 rounded-xl p-6 flex flex-col justify-between gap-4 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    {/* Content */}
                    <div className="flex-grow max-w-full">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors break-words">
                        {material.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed break-words whitespace-pre-line">
                        {material.description}
                      </p>
                    </div>

                    {/* Button at bottom center */}
                    <div className="w-full flex justify-center mt-4">
                      <a 
                        href={`${import.meta.env.VITE_API_URL}/media/${material.pdf_id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        View / Download PDF
                      </a>
                    </div>
                  </motion.div>

                );
              })
            ) : (
              <p className="text-center text-gray-500 py-8">No materials found.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Materials;
