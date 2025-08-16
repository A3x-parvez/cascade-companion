import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Waves, ChevronDown, Book, MessageCircle, HelpCircle, TrendingUp, Expand, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 ocean-gradient rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Waterfall Explorer</h1>
              <p className="text-xs text-muted-foreground">Discover Nature's Beauty</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Tallest Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-accent">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Tallest
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/tallest/overall-height" className="cursor-pointer">Overall Height</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/tallest/single-drop" className="cursor-pointer">Tallest Single Drop</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/tallest/free-falling" className="cursor-pointer">Free-falling Drops</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Largest Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-accent">
                  <Expand className="w-4 h-4 mr-2" />
                  Largest
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/largest/average-width" className="cursor-pointer">By Average Width</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/largest/average-volume" className="cursor-pointer">By Average Volume</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/largest/volume-no-rapids" className="cursor-pointer">By Volume (no Rapids)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/largest/volume-exist" className="cursor-pointer">By Volume (still exist)</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Browse by Country */}
            <Button variant="ghost" className="hover:bg-accent" asChild>
              <Link to="/countries">
                <Globe2 className="w-4 h-4 mr-2" />
                Browse by Country
              </Link>
            </Button>

            {/* Blog */}
            <Button variant="ghost" className="hover:bg-accent" asChild>
              <Link to="/blog">
                <MessageCircle className="w-4 h-4 mr-2" />
                Blog
              </Link>
            </Button>

            {/* Books */}
            <Button variant="ghost" className="hover:bg-accent" asChild>
              <Link to="/books">
                <Book className="w-4 h-4 mr-2" />
                Books
              </Link>
            </Button>

            {/* Contact */}
            <Button variant="ghost" className="hover:bg-accent" asChild>
              <Link to="/contact">
                Contact
              </Link>
            </Button>

            {/* Help */}
            <Button variant="ghost" className="hover:bg-accent" asChild>
              <Link to="/help">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;