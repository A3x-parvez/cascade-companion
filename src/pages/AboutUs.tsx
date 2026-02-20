import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import profile_pic from "@/assets/arup_roy.jpeg"; 
import { Shield, Users, Target, BookOpen, List } from 'lucide-react';

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
                ARUP KUMAR ROY
              </h2>
              <p className="text-gray-600 mb-4">
                Founder & Researcher
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am a geomorphology researcher specializing in waterfalls, fluvial processes, and plateau landscapes, with a strong focus on the Chotanagpur Plateau of India. My work integrates field observations, GIS, and geological analysis to understand waterfalls as dynamic landforms and geoheritage features, aiming to document, classify, and conserve these scientifically important yet underrepresented landscapes.
              </p>
            </div>
          </div>

       {/* Mission / Vision / Values */}
          <div className="grid grid-cols-1 gap-8 mb-16">

            {/* Mission */}
            <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
              <Target className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-black text-center mb-4">
                My Mission
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                To systematically collect, organize, analyze, and disseminate multidisciplinary information on waterfalls using geomorphological, geological, hydrological, and spatial perspectives.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Through this platform, the mission is to:
              </p>

              <ol className="text-gray-600 text-sm leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  Develop a standardized waterfall database integrating location, morphology, lithology, drainage context, and evolutionary history
                </li>
                <li>
                  Support research, education, and conservation by providing reliable spatial and scientific data
                </li>
                <li>
                  Bridge the gap between academic research and public understanding of waterfalls
                </li>
                <li>
                  Promote regional and underrepresented waterfall landscapes (e.g., plateau regions, shield areas, granite–gneiss terrains) at national and international levels
                </li>
                <li>
                  Encourage sustainable geotourism and geoheritage awareness based on scientific understanding
                </li>
              </ol>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-black text-center mb-4">
                My Vision
              </h3>

              <ol className="text-gray-600 text-sm leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  To build a comprehensive, scientifically credible, and globally accessible 
                  digital platform that documents waterfalls as dynamic geomorphic features, 
                  natural heritage assets, and indicators of landscape evolution.
                </li>
                <li>
                  This vision recognizes waterfalls not merely as scenic attractions, but as 
                  outcomes of long-term interactions among geology, tectonics, climate, and 
                  fluvial processes deserving systematic documentation and international recognition.
                </li>
              </ol>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
              <BookOpen className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-black text-center mb-4">
                My Values
              </h3>

              <ol className="text-gray-600 text-sm leading-relaxed space-y-4 list-decimal pl-5">

                <li>
                  <span className="font-semibold text-black">Scientific Integrity</span>
                  <p className="mt-1">
                    All data and interpretations are grounded in established geomorphological 
                    and geological principles, supported by peer-reviewed research, field 
                    evidence, and spatial analysis.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-black">Interdisciplinary Approach</span>
                  <p className="mt-1">
                    The platform integrates geomorphology, hydrology, geology, GIS, ecology, 
                    and environmental history to present waterfalls as complex Earth system features.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-black">Documentation & Preservation</span>
                  <p className="mt-1">
                    Waterfalls are treated as geoheritage resources, emphasizing the importance 
                    of documentation for conservation, land-use planning, and environmental change assessment.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-black">Accessibility & Education</span>
                  <p className="mt-1">
                    Information is presented in a way that is accessible to researchers and students, 
                    educators, policy planners, nature enthusiasts, and responsible tourists.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-black">Regional Representation</span>
                  <p className="mt-1">
                    Special emphasis is placed on less-documented regions and landscapes, ensuring 
                    balanced global and national representation beyond well-known tourist waterfalls.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-black">Sustainability & Ethics</span>
                  <p className="mt-1">
                    The platform promotes awareness of environmental sensitivity, discouraging 
                    unsustainable exploitation and encouraging responsible interaction with natural waterfall systems.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-black">Open Knowledge & Collaboration</span>
                  <p className="mt-1">
                    The database encourages data sharing, academic collaboration, and future 
                    expansion through verified contributions from researchers and institutions.
                  </p>
                </li>

              </ol>
            </div>

          </div>


          {/* Privacy Policy */}
          <div id="privacy" className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
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
