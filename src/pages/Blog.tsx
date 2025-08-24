import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image_id?: string;
  video_id?: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;

        if (!apiBaseUrl || !apiKey) {
          throw new Error("API URL or Key is not configured in .env.local file.");
        }

        const blogListUrl = `${apiBaseUrl}/api/v1/blogs`;

        const response = await fetch(blogListUrl, {
          headers: { 'X-API-Key': apiKey },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BlogPost[] = await response.json();
        setBlogs(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="min-h-screen flex justify-center items-center"><p>Loading posts...</p></div>;
  if (error) return <div className="min-h-screen flex justify-center items-center"><p className="text-red-500">Error: {error}</p></div>;

  return (
    <div className="min-h-screen">
      <Navigation/>
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold">Waterfall Blog</h1>
            </div>
            <p className="text-lg text-gray-600">
              Stories, science, and discoveries from the world of waterfalls.
            </p>
          </div>
          
          <div className="space-y-8">
            {blogs.map((post) => {
              const apiBaseUrl = import.meta.env.VITE_API_URL;
              
              const mediaUrl = post.image_id 
                ? `${apiBaseUrl}/media/${post.image_id}` 
                : (post.video_id ? `${apiBaseUrl}/media/${post.video_id}` : null);

              return (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  {/* --- THIS SECTION IS UPDATED --- */}
                  {mediaUrl && post.image_id && 
                    <img src={mediaUrl} alt={post.title} className="w-full h-64 object-contain rounded-md mb-4 bg-black" />}
                  
                  {mediaUrl && post.video_id && 
                    <video src={mediaUrl} className="w-full h-64 object-contain rounded-md mb-4 bg-black" controls />}
                  {/* --- END OF UPDATE --- */}
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.description}</p>
                </article>
              );
            })}
          </div>
        </div>

      </main>
      <Footer/>
    </div>
  );
};

export default Blog;