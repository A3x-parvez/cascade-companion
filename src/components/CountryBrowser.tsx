import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin } from 'lucide-react';

const countries = [
  { name: 'Karnataka', count: 9, flag: 'KA', featured: 'Jog Falls' },
  { name: 'Kerala', count: 5, flag: 'KL', featured: 'Athirappilly Falls' },
  { name: 'Meghalaya', count: 6, flag: 'ML', featured: 'Nohkalikai Falls' },
  { name: 'Chhattisgarh', count: 3, flag: 'CG', featured: 'Chitrakote Falls' },
  { name: 'Maharashtra', count: 5, flag: 'MH', featured: 'Vajrai Falls' },
  { name: 'Tamil Nadu', count: 5, flag: 'TN', featured: 'Hogenakkal Falls' },
  { name: 'Goa', count: 2, flag: 'GA', featured: 'Dudhsagar Falls' },
  { name: 'Odisha', count: 4, flag: 'OD', featured: 'Barehipani Falls' },
  { name: 'West Bengal', count: 2, flag: 'WB', featured: 'Changey Falls' },
  { name: 'Jharkhand', count: 4, flag: 'JH', featured: 'Hundru Falls' },
  { name: 'Madhya Pradesh', count: 4, flag: 'MP', featured: 'Chachai Falls' },
  { name: 'Andhra Pradesh', count: 3, flag: 'AP', featured: 'Talakona Falls' },
  { name: 'Telangana', count: 3, flag: 'TS', featured: 'Kuntala Falls' },
  { name: 'Assam', count: 1, flag: 'AS', featured: 'Kakochang Waterfalls' },
  { name: 'Arunachal Pradesh', count: 1, flag: 'AR', featured: 'Nuranang Falls' },
  { name: 'Jammu & Kashmir', count: 2, flag: 'JK', featured: 'Aharbal Waterfall' },
  { name: 'Uttarakhand', count: 2, flag: 'UK', featured: 'Kempty Falls' },
  { name: 'Himachal Pradesh', count: 3, flag: 'HP', featured: 'Bhagsu Waterfall' },
  { name: 'Sikkim', count: 1, flag: 'SK', featured: 'Kanchenjunga Falls' },
  { name: 'Gujarat', count: 3, flag: 'GJ', featured: 'Gira Falls' },
  { name: 'Rajasthan', count: 1, flag: 'RJ', featured: 'Bhimlat Falls' },
  { name: 'Bihar', count: 1, flag: 'BR', featured: 'Kakolat Falls' },
  { name: 'Uttar Pradesh', count: 2, flag: 'UP', featured: 'Rajdari Falls' }
];



const CountryBrowser = () => {
  return null;
};

export default CountryBrowser;



























































// const CountryBrowser = () => {
//   return (
//     <section className="py-16 px-4 bg-mist">
//       <div className="container mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <Globe className="w-8 h-8 text-forest-deep mr-3" />
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Browse by State
//             </h2>
//           </div>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Discover waterfalls from around India, organized by state for easy exploration
//           </p>
//         </div>
        
//         {/* Country Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {countries.map((country) => (
//             <Card 
//               key={country.name}
//               className="waterfall-card group cursor-pointer"
//             >
//               <CardContent className="p-6 text-center">
//                 <div className="text-4xl mb-3">{country.flag}</div>
//                 <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-forest-deep transition-colors">
//                   {country.name}
//                 </h3>
//                 <Badge variant="secondary" className="mb-3">
//                   {country.count} waterfalls
//                 </Badge>
//                 <div className="flex items-center justify-center text-muted-foreground text-sm">
//                   <MapPin className="w-3 h-3 mr-1" />
//                   <span>Featured: {country.featured}</span>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

