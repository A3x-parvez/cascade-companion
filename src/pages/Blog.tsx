import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Calendar, User } from 'lucide-react';

const dummyBlogPosts = [
  {
    id: '1',
    title: 'The Science Behind Waterfall Formation',
    excerpt: 'Discover how geological processes create these natural wonders over millions of years.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Photography Tips for Capturing Waterfalls',
    excerpt: 'Learn professional techniques for photographing waterfalls in different lighting conditions.',
    author: 'Mark Chen',
    date: '2024-01-12',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Climate Change Impact on Waterfall Flow',
    excerpt: 'Understanding how changing weather patterns affect seasonal waterfall volumes.',
    author: 'Prof. Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Hidden Waterfalls: Off the Beaten Path',
    excerpt: 'Explore lesser-known waterfalls that offer pristine natural experiences.',
    author: 'Adventure Team',
    date: '2024-01-08',
    readTime: '10 min read'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Waterfall Blog</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Stories, science, and discoveries from the world of waterfalls.
            </p>
          </div>
          
          <div className="space-y-8">
            {dummyBlogPosts.map((post) => (
              <article key={post.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;