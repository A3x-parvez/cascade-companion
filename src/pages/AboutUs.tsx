import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import profile_pic from "@/assets/rijwanool_profile.jpg"; 
import { Shield, Users, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-gray-800">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about our mission, our story, and the people behind
              <span className="text-emerald-600 font-semibold"> Waterfall Explorer</span>.
            </p>
          </div>

          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-16">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-emerald-400/40 md:mr-8 mb-4 md:mb-0 flex-shrink-0">
              <img
                src={profile_pic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-2">
                Arup Roy
              </h2>
              <p className="text-gray-600 mb-4">
                Founder & Researcher
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am a Geography PhD student and teacher, and this project grew out of my
                doctoral research on hidden waterfalls in India. The data and insights shared
                here were collected during my fieldwork, with the goal of showcasing these
                natural treasures to a wider audience. This is a personal, non-commercial
                initiative driven by my passion for geography and love of nature.
              </p>
            </div>
          </div>

          {/* Mission / Vision / Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow p-6 text-center border border-gray-200">
              <Target className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-black mb-2">My Mission</h3>
              <p className="text-gray-600 text-sm">
                To explore and document hidden waterfalls across India, preserving their
                beauty through photography, stories, and research for anyone who shares a
                love for nature.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center border border-gray-200">
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-black mb-2">My Vision</h3>
              <p className="text-gray-600 text-sm">
                To inspire others to appreciate lesser-known natural wonders, encourage
                responsible travel, and highlight the importance of conservation of these
                hidden gems.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center border border-gray-200">
              <BookOpen className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-black mb-2">My Values</h3>
              <p className="text-gray-600 text-sm">
                Curiosity, respect for nature, and a commitment to sharing knowledge
                openly without commercial intent guide every step of this project.
              </p>
            </div>
          </div>


          {/* Privacy Policy */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-black">Privacy Policy</h2>
            </div>
            <p className="text-gray-700 mb-4">
              This website is a personal and non-commercial project created to showcase my
              research on hidden waterfalls in India. It is intended purely for educational
              and hobby purposes.
            </p>
            <p className="text-gray-700 mb-4">
              We do not collect, store, or process any personal information from visitors.
              No cookies, analytics, or tracking tools are used on this site.
            </p>
            <p className="text-gray-700">
              Since this is a hobby project, you can freely browse without concern about
              data usage or privacy. If any changes are made in the future, they will be
              updated on this page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
