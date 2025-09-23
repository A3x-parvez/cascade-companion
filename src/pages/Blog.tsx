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

  if (loading)
    return (
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
              Loading posts...
            </p>
          </div>
        </div>
      );


  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-gray-900">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-emerald-600 mr-3" />
              <h1 className="text-4xl font-bold">Waterfall Blog</h1>
            </div>
            <p className="text-lg text-gray-700">
              Stories, science, and discoveries from the world of waterfalls.
            </p>
          </div>

          <div className="space-y-10">
            {blogs.map((post) => {
              const apiBaseUrl = import.meta.env.VITE_API_URL;
              const mediaUrl = post.image_id
                ? `${apiBaseUrl}/media/${post.image_id}`
                : post.video_id
                ? `${apiBaseUrl}/media/${post.video_id}`
                : null;

              return (
                <article
                  key={post.id}
                  className="bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow"
                >
                  {/* IMAGE */}
                  {mediaUrl && post.image_id && (
                    <img
                      src={mediaUrl}
                      alt={post.title}
                      className="w-full min-h-[200px] max-h-[200px] md:min-h-[400px] md:max-h-[400px] object-contain rounded-lg mb-4 bg-black"
                    />
                  )}

                  {/* VIDEO */}
                  {mediaUrl && post.video_id && (
                    <div className="w-full bg-black rounded-lg mb-4 flex justify-center items-center">
                      <video
                        src={mediaUrl}
                        className="w-full min-h-[200px] max-h-[200px] md:min-h-[400px] md:max-h-[400px] object-contain rounded-lg"
                        controls
                      />
                    </div>
                  )}


                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    {post.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
