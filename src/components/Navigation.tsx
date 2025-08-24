import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Waves,
  ChevronDown,
  Book,
  MessageCircle,
  HelpCircle,
  TrendingUp,
  Expand,
  Globe2,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { to: "/tallest/overall-height", label: "Tallest - Overall Height" },
    { to: "/tallest/single-drop", label: "Tallest - Single Drop" },
    { to: "/tallest/free-falling", label: "Tallest - Free-falling" },
    { to: "/largest/average-width", label: "Largest - Average Width" },
    { to: "/largest/average-volume", label: "Largest - Average Volume" },
    { to: "/largest/volume-no-rapids", label: "Largest - Volume (no Rapids)" },
    { to: "/largest/volume-exist", label: "Largest - Volume (still exist)" },
    { to: "/Recently_add", label: "Recently Updates" },
    { to: "/countries", label: "Browse by Country" },
    { to: "/blog", label: "Blog" },
    { to: "/books", label: "Books" },
    { to: "/contact", label: "Contact" },
    { to: "/help", label: "Help" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 ocean-gradient rounded-lg flex items-center justify-center">
              <Waves className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-md font-bold text-foreground">India Waterfall Database</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-accent text-sm h-9">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Databases
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card/90 backdrop-blur-lg border-border/20 shadow-xl z-50">
                <DropdownMenuItem asChild>
                  <Link to="/countries">Browse by State</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/Recently_add">Recently Updates</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                  <Link to="/tallest/free-falling">Free-falling Drops</Link>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-accent text-sm h-9">
                  <Expand className="w-4 h-4 mr-2" />
                  Largest
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card/90 backdrop-blur-lg border-border/20 shadow-xl z-50">
                <DropdownMenuItem asChild>
                  <Link to="/largest/average-width">By Average Width</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/largest/average-volume">By Average Volume</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/largest/volume-no-rapids">By Volume (no Rapids)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/largest/volume-exist">By Volume (still exist)</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <Button variant="ghost" className="hover:bg-accent text-sm h-9" asChild>
              <Link to="/countries"><Globe2 className="w-4 h-4 mr-2" />Browse by State</Link>
            </Button> */}
            <Button variant="ghost" className="hover:bg-accent text-sm h-9" asChild>
              <Link to="/blog"><MessageCircle className="w-4 h-4 mr-2" />Blog</Link>
            </Button>
            <Button variant="ghost" className="hover:bg-accent text-sm h-9" asChild>
              <Link to="/books"><Book className="w-4 h-4 mr-2" />Materials</Link>
            </Button>
            <Button variant="ghost" className="hover:bg-accent text-sm h-9" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            {/* <Button variant="ghost" className="hover:bg-accent text-sm h-9" asChild>
              <Link to="/help"><HelpCircle className="w-4 h-4 mr-2" />Help</Link>
            </Button> */}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 p-0 border-r border-border/20 bg-background/95 backdrop-blur-lg"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-2 p-4 border-b border-border/20">
                    <div className="w-8 h-8 ocean-gradient rounded-lg flex items-center justify-center">
                      <Waves className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h2 className="font-semibold text-lg">India Waterfalls</h2>
                  </div>

                  {/* Links */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="flex flex-col space-y-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-border/20 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} India Waterfalls
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


