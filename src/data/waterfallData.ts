export interface Waterfall {
  id: string;
  type: string;
  name: string;
  avgWidth: number;
  avgHeight: number;
  watercourse: string;
  location: string;
}

export const dummyWaterfalls: Waterfall[] = [
  {
    id: '1',
    type: 'Segmented',
    name: 'Jog Falls',
    avgWidth: 472,
    avgHeight: 253,
    watercourse: 'Sharavathi River',
    location: 'India, Karnataka'
  },
  {
    id: '2',
    type: 'Block',
    name: 'Athirappilly Falls',
    avgWidth: 100,
    avgHeight: 80,
    watercourse: 'Chalakudy River',
    location: 'India, Kerala'
  },
  {
    id: '3',
    type: 'Plunge',
    name: 'Nohkalikai Falls',
    avgWidth: 23,
    avgHeight: 340,
    watercourse: 'Unnamed stream near Cherrapunji',
    location: 'India, Meghalaya'
  },
  {
    id: '4',
    type: 'Horseshoe',
    name: 'Chitrakote Falls',
    avgWidth: 300,
    avgHeight: 29,
    watercourse: 'Indravati River',
    location: 'India, Chhattisgarh'
  },
  {
    id: '5',
    type: 'Tiered',
    name: 'Dudhsagar Falls',
    avgWidth: 30,
    avgHeight: 310,
    watercourse: 'Mandovi River',
    location: 'India, Goa'
  },
  {
    id: '6',
    type: 'Cascade',
    name: 'Vajrai Falls',
    avgWidth: 70,
    avgHeight: 560,
    watercourse: 'Urvashi River',
    location: 'India, Maharashtra'
  },
  {
    id: '7',
    type: 'Block',
    name: 'Hogenakkal Falls',
    avgWidth: 300,
    avgHeight: 20,
    watercourse: 'Kaveri River',
    location: 'India, Tamil Nadu'
  },
  {
    id: '8',
    type: 'Plunge',
    name: 'Barehipani Falls',
    avgWidth: 120,
    avgHeight: 399,
    watercourse: 'Budhabalanga River',
    location: 'India, Odisha'
  },
  {
    id: '9',
    type: 'Cascade',
    name: 'Kempty Falls',
    avgWidth: 15,
    avgHeight: 40,
    watercourse: 'Tons River tributary',
    location: 'India, Uttarakhand'
  },
  {
    id: '10',
    type: 'Plunge',
    name: 'Hundru Falls',
    avgWidth: 50,
    avgHeight: 98,
    watercourse: 'Subarnarekha River',
    location: 'India, Jharkhand'
  }
];


export const tallestOverallHeight = dummyWaterfalls.sort((a, b) => b.avgHeight - a.avgHeight);
export const tallestSingleDrop = dummyWaterfalls.filter(w => w.type === 'Plunge').sort((a, b) => b.avgHeight - a.avgHeight);
export const freeFallingDrops = dummyWaterfalls.filter(w => w.type === 'Plunge' || w.type === 'Horsetail').sort((a, b) => b.avgHeight - a.avgHeight);

export const largestByWidth = dummyWaterfalls.sort((a, b) => b.avgWidth - a.avgWidth);
export const largestByVolume = dummyWaterfalls.filter(w => w.type === 'Cataract' || w.type === 'Cascade').sort((a, b) => b.avgWidth - a.avgWidth);
export const volumeNoRapids = dummyWaterfalls.filter(w => w.type === 'Plunge' || w.type === 'Curtain').sort((a, b) => b.avgWidth - a.avgWidth);
export const volumeStillExist = dummyWaterfalls.sort((a, b) => b.avgWidth - a.avgWidth);

export const waterfallsByCountry = {
'Karnataka': dummyWaterfalls.filter(w => w.location.includes('Karnataka')),
  'Kerala': dummyWaterfalls.filter(w => w.location.includes('Kerala')),
  'Meghalaya': dummyWaterfalls.filter(w => w.location.includes('Meghalaya')),
  'Chhattisgarh': dummyWaterfalls.filter(w => w.location.includes('Chhattisgarh')),
  'Goa': dummyWaterfalls.filter(w => w.location.includes('Goa')),
  'Maharashtra': dummyWaterfalls.filter(w => w.location.includes('Maharashtra')),
  'Tamil Nadu': dummyWaterfalls.filter(w => w.location.includes('Tamil Nadu')),
  'Odisha': dummyWaterfalls.filter(w => w.location.includes('Odisha')),
  'Uttarakhand': dummyWaterfalls.filter(w => w.location.includes('Uttarakhand')),
  'Jharkhand': dummyWaterfalls.filter(w => w.location.includes('Jharkhand'))
};