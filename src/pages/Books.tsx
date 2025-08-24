import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, BookOpen } from 'lucide-react'; // Using a more relevant icon

// Define a type for our material structure to match the API
interface Material {
  id: string;
  title: string;
  description: string;
  pdf_id: string;
}

const Materials = () => {
  // State to store the materials fetched from the API
  const [materials, setMaterials] = useState<Material[]>([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle any potential errors
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        // Read the API URL and Key from your .env.local file
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;

        if (!apiBaseUrl || !apiKey) {
          throw new Error("API URL or Key is not configured in your .env.local file.");
        }
        
        const response = await fetch(`${apiBaseUrl}/api/v1/materials`, {
          headers: {
            'X-API-Key': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Material[] = await response.json();
        setMaterials(data); // Update state with the fetched materials
      } catch (e: any) {
        setError(e.message);
        console.error("Failed to fetch materials:", e);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchMaterials();
  }, []); // The empty dependency array [] ensures this effect runs only once

  // Show a loading message while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading materials...</p>
      </div>
    );
  }

  // Show an error message if the fetch fails
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold">Materials & Resources</h1>
            </div>
            <p className="text-lg text-gray-600">
              A collection of guides, checklists, and research documents available for viewing.
            </p>
          </div>
          
          <div className="space-y-4">
            {materials.length > 0 ? (
              materials.map((material) => {
                // Construct the full URL to the PDF file
                const pdfUrl = `${import.meta.env.VITE_API_URL}/media/${material.pdf_id}`;
                
                return (
                  <div key={material.id} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {material.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {material.description}
                      </p>
                    </div>
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      View / Download PDF
                    </a>
                  </div>
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