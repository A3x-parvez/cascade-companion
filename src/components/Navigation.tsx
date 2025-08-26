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
  Library,
  PenSquare,
  HelpCircle,
  Database,
  Expand,
  Globe2,
  PanelLeft,
  Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";


const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { to: "/countries", label: "Browse by State" },
    { to: "/Recently_add", label: "Recently Updates" },    
    { to: "/blog", label: "Blog" },
    { to: "/books", label: "Materials" },
    { to: "/contact", label: "Contact" },
    { to: "/help", label: "Help" },
  ];

  // Dynamically set classes based on the current page
  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-lg transition-colors duration-300",
    "bg-gradient-to-r from-teal-600/30 via-emerald-500/20 to-teal-400/30 border-teal-200/40"
    // {
    //   "bg-gradient-to-r from-teal-600/30 via-emerald-500/20 to-teal-400/30 border-teal-200/40": isHomePage,
    //   "bg-stone-50/80 border-stone-200/50": !isHomePage
    // }
  );

  const textClass = isHomePage ? "text-white" : "text-black";
  const buttonClass = cn(
    "text-base h-9 text-bold",
    isHomePage
      ? "text-white hover:bg-white/10 hover:text-white"
      : "text-foreground hover:bg-black/5"
  );
  const mobileTriggerClass = cn(
    isHomePage 
      ? "text-white hover:bg-white/10 hover:text-white"
      : "text-foreground hover:bg-black/5"
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 ocean-gradient rounded-lg flex items-center justify-center">
              <Waves className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className={cn("text-xl font-bold", textClass)}>India Waterfall Database</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={buttonClass}>
                  <Database className="w-4 h-4 mr-1" />
                  Databases
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background/90 backdrop-blur-lg border-border/20 shadow-xl z-50">
                <DropdownMenuItem asChild>
                  <Link to="/countries">Browse by State</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/Recently_add">Recently Updates</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className={buttonClass} asChild>
              <Link to="/blog"><PenSquare className="w-4 h-4 mr-1" />Blog</Link>
            </Button>
            <Button variant="ghost" className={buttonClass} asChild>
              <Link to="/books"><Library className="w-4 h-4 mr-1" />Materials</Link>
            </Button>
            <Button variant="ghost" className={buttonClass} asChild>
              <Link to="/contact"><Phone className="w-4 h-4 mr-1" />Contact</Link>
            </Button>
            <Button variant="ghost" className={buttonClass} asChild>
              <Link to="/help"><HelpCircle className="w-4 h-4 mr-1" />Help</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className={mobileTriggerClass}>
                  <PanelLeft className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 p-0 border-r border-stone-200/50 bg-stone-50/95 backdrop-blur-lg"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-2 p-4 border-b border-border/20">
                    <div className="w-8 h-8 ocean-gradient rounded-lg flex items-center justify-center">
                      <Waves className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h2 className="font-semibold text-lg text-foreground">India Waterfalls</h2>
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