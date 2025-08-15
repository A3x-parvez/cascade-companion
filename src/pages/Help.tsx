import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Search, Map, BookOpen } from 'lucide-react';

const Help = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Help & FAQ</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about using Waterfall Explorer.
            </p>
          </div>
          
          <div className="grid gap-8">
            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Search className="w-8 h-8 text-ocean-deep mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Search Tips</h3>
                <p className="text-sm text-muted-foreground">Learn how to find waterfalls</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Map className="w-8 h-8 text-ocean-deep mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Navigation Help</h3>
                <p className="text-sm text-muted-foreground">Using our site features</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <BookOpen className="w-8 h-8 text-ocean-deep mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">User Guide</h3>
                <p className="text-sm text-muted-foreground">Complete documentation</p>
              </div>
            </div>
            
            {/* FAQ Accordion */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I search for waterfalls?</AccordionTrigger>
                  <AccordionContent>
                    You can search for waterfalls using our search feature in the navigation bar. 
                    Search by name, location, country, or waterfall type. You can also browse by 
                    categories like height or width using our specialized sections.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What information is provided for each waterfall?</AccordionTrigger>
                  <AccordionContent>
                    Our database includes waterfall type, name, average width, average height, 
                    watercourse (the river or stream), and location. Each entry provides 
                    comprehensive details to help you learn about these natural wonders.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How are waterfalls categorized by height?</AccordionTrigger>
                  <AccordionContent>
                    We categorize waterfalls by height in several ways: Overall Height (total drop), 
                    Tallest Single Drop (uninterrupted fall), and Free-falling Drops (water falls 
                    freely without touching the cliff). Each category helps you understand different 
                    aspects of waterfall formation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>What does "largest by volume" mean?</AccordionTrigger>
                  <AccordionContent>
                    Volume refers to the amount of water flowing over the waterfall. We categorize 
                    by Average Volume (typical flow), Volume with no Rapids (smooth flow), and 
                    Volume that still exists (waterfalls that maintain their historic flow rates).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I contribute information about waterfalls?</AccordionTrigger>
                  <AccordionContent>
                    Currently, our database is curated by our research team. However, you can 
                    contact us through our Contact page to suggest additions or corrections. 
                    We welcome input from waterfall enthusiasts and researchers.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are the books listed available for purchase?</AccordionTrigger>
                  <AccordionContent>
                    Our Books section showcases publications related to waterfalls, including 
                    field guides, photography books, and scientific studies. While we provide 
                    information about these books, you'll need to check with publishers or 
                    bookstores for availability and purchasing options.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>How often is the database updated?</AccordionTrigger>
                  <AccordionContent>
                    Our team regularly updates the database with new discoveries, better 
                    measurements, and additional waterfalls. We also update information when 
                    natural or human-made changes affect existing waterfalls.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;