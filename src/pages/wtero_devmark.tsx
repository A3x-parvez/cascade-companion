import React from 'react';
import { Code, Feather, Zap, ShieldCheck, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-waterfall.jpg';

const WteroLicense = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        
        <Card className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-md border-primary/20 shadow-2xl shadow-primary/10">
          <CardHeader className="text-center border-b border-primary/20 pb-4">
            <div className="flex justify-center items-center gap-3 mb-2">
              <Code className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl font-bold text-gray-100">
                Developed by Wtero
              </CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              This website is the official digital property of its rightful owner.  
              It has been <span className="text-primary font-semibold">designed, developed, and delivered by Wtero</span>.
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wtero Values */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Development Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Feather className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                    <span>
                      <strong className="text-gray-100">Creativity First:</strong> Every solution is crafted with innovative thinking to match the client’s brand identity.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                    <span>
                      <strong className="text-gray-100">Performance Driven:</strong> Optimized websites and AI solutions ensuring speed, scalability, and a smooth experience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                    <span>
                      <strong className="text-gray-100">Trust & Quality:</strong> Delivered with secure, reliable, and future-proof technology.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Wtero Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Wtero Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Email</h4>
                      <a href="mailto:contact@wtero.com" className="text-muted-foreground hover:text-primary">contact@wtero.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Website</h4>
                      <a href="https://wtero.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">www.wtero.com</a>
                    </div>
                  </div>
                </div>

                <a href="https://wtero.com" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="mt-6 w-full bg-primary/10 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    Start Your Next Project with Wtero
                  </Button>
                </a>

                <a href="/" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="mt-3 w-full bg-primary/10 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    Back to Main Page
                  </Button>
                </a>
              </div>
            </div>

            {/* Footer Signature */}
            <div className="text-center mt-8 pt-4 border-t border-primary/20">
              <p className="text-xs text-muted-foreground">
                This license page verifies Wtero as the creator and technology partner behind this website.  
                Ownership and rights belong solely to the client.
              </p>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default WteroLicense;
