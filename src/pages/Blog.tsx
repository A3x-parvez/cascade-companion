import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Calendar, User } from 'lucide-react';

const dummyBlogPosts = [
  {
    id: '1',
    title: 'Paani ka Jadoo: The Science Behind Indian Waterfalls',
    excerpt: 'Samajhiye kaise prakritik bhugol aur samay ke saath yeh shaandar jharne bante hain.',
    author: 'Dr. Aditi Sharma',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Tips for Clicking Jharnas Like a Pro',
    excerpt: 'Seekhiye kaise alag-alag roshni mein jharno ki tasveerein aur bhi khoobsurat dikhengi.',
    author: 'Rohit Verma',
    date: '2024-01-12',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Climate Change aur Jharno ki Behti Dhara',
    excerpt: 'Samajhiye badalte mausam ka prabhav Bharat ke jharno ke paani par.',
    author: 'Prof. Kavya Iyer',
    date: '2024-01-10',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Chhupi Hui Khoj: Bharat ke Hidden Waterfalls',
    excerpt: 'Khojiye un anjaane jharno ko jo bheed se door, prakriti ke beech asli sukoon dete hain.',
    author: 'Adventure Yatra Team',
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