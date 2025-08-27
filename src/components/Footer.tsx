import React, { useState } from 'react';
import { Waves, Github, Twitter, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const socialLinks = [
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Mail, label: 'Email' },
];

const exploreLinks = [
  { href: '/state', title: 'Waterfalls by State' },
  { href: '/Recently_add', title: 'Recently Added' },
  { href: '/blog', title: 'Blog' },
  { href: '/materials', title: 'Materials' },
];

const resourceLinks = [
  { href: '/about', title: 'About Us' },
  { href: '/contact', title: 'Contact' },
  { href: '/aboutUs#privacy', title: 'Privacy Policy' },
];

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleSecretClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        navigate("./we-are-wtero");
      }
      return newCount;
    });

    // Reset count after 1 second if not completed
    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Brand & Socials */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">India Waterfall Database</h3>
                <p className="text-xs text-gray-500">Discover Nature's Beauty</p>
              </div>
            </div>
            <p className="text-gray-600 mb-3 max-w-md text-sm">
              Explore India's most magnificent waterfalls. From hidden gems to iconic cascades, 
              discover nature's most spectacular water features from around the country.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Explore</h4>
            <ul className="space-y-1 text-gray-600">
              {exploreLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-blue-600 transition-colors text-sm">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-600">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-blue-600 transition-colors text-sm">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Hidden Easter Egg Trigger */}
        <div className="mt-6 pt-4 text-center text-gray-500 text-sm border-t border-gray-200">
          <span
            onClick={handleSecretClick}
            className="cursor-pointer select-none"
          >
            © 2025
          </span>{" "}
          India Waterfall Database. All Rights Reserved.
      </div>
     </div>
    </footer>
  );
};

export default Footer;
