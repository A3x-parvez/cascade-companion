import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { Waves, Github, Twitter, Mail } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// 2. Update href to use URL paths, not file paths
const socialLinks = [
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Mail, label: 'Email' },
];

const exploreLinks = [
  { href: '/countries', title: 'Waterfalls by State' },
  { href: '/Recently_add', title: 'Recently Added' },
  { href: '/blog', title: 'Blog' },
  { href: '#', title: 'Photo Gallery' }, // This remains a placeholder
];

const resourceLinks = [
  { href: '#', title: 'About Us' },
  { href: '/contact', title: 'Contact' },
  { href: '#', title: 'Privacy Policy' },
  { href: '#', title: 'Terms of Service' },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. Brand & Socials */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Indian Waterfall Database</h3>
                <p className="text-sm text-gray-500">Discover Nature's Beauty</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Explore India's most magnificent waterfalls. From hidden gems to iconic cascades, 
              discover nature's most spectacular water features from around the country.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer"
                   className="p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors">
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* 2. Explore Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-600">
              {exploreLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-blue-600 transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 3. Resources & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 mb-6">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-blue-600 transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 India Waterfall Database. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;