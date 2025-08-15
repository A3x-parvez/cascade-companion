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
    type: 'Plunge',
    name: 'Angel Falls',
    avgWidth: 150,
    avgHeight: 979,
    watercourse: 'Kerep River',
    location: 'Venezuela, Canaima National Park'
  },
  {
    id: '2',
    type: 'Cataract',
    name: 'Niagara Falls',
    avgWidth: 1203,
    avgHeight: 51,
    watercourse: 'Niagara River',
    location: 'USA/Canada Border'
  },
  {
    id: '3',
    type: 'Cascade',
    name: 'Iguazu Falls',
    avgWidth: 2700,
    avgHeight: 82,
    watercourse: 'Iguazu River',
    location: 'Argentina/Brazil Border'
  },
  {
    id: '4',
    type: 'Curtain',
    name: 'Victoria Falls',
    avgWidth: 1708,
    avgHeight: 108,
    watercourse: 'Zambezi River',
    location: 'Zambia/Zimbabwe Border'
  },
  {
    id: '5',
    type: 'Tiered',
    name: 'Gullfoss',
    avgWidth: 70,
    avgHeight: 32,
    watercourse: 'Hvítá River',
    location: 'Iceland, Golden Circle'
  },
  {
    id: '6',
    type: 'Plunge',
    name: 'Tugela Falls',
    avgWidth: 15,
    avgHeight: 948,
    watercourse: 'Tugela River',
    location: 'South Africa, KwaZulu-Natal'
  },
  {
    id: '7',
    type: 'Horsetail',
    name: 'Yosemite Falls',
    avgWidth: 18,
    avgHeight: 739,
    watercourse: 'Yosemite Creek',
    location: 'USA, California'
  },
  {
    id: '8',
    type: 'Multi-step',
    name: 'Kaieteur Falls',
    avgWidth: 113,
    avgHeight: 226,
    watercourse: 'Potaro River',
    location: 'Guyana, Kaieteur National Park'
  },
  {
    id: '9',
    type: 'Cascade',
    name: 'Skógafoss',
    avgWidth: 25,
    avgHeight: 60,
    watercourse: 'Skógá River',
    location: 'Iceland, South Region'
  },
  {
    id: '10',
    type: 'Plunge',
    name: 'Sutherland Falls',
    avgWidth: 12,
    avgHeight: 580,
    watercourse: 'Arthur River',
    location: 'New Zealand, Fiordland'
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
  'Venezuela': dummyWaterfalls.filter(w => w.location.includes('Venezuela')),
  'USA/Canada': dummyWaterfalls.filter(w => w.location.includes('USA') || w.location.includes('Canada')),
  'Argentina/Brazil': dummyWaterfalls.filter(w => w.location.includes('Argentina') || w.location.includes('Brazil')),
  'Zambia/Zimbabwe': dummyWaterfalls.filter(w => w.location.includes('Zambia') || w.location.includes('Zimbabwe')),
  'Iceland': dummyWaterfalls.filter(w => w.location.includes('Iceland')),
  'South Africa': dummyWaterfalls.filter(w => w.location.includes('South Africa')),
  'Guyana': dummyWaterfalls.filter(w => w.location.includes('Guyana')),
  'New Zealand': dummyWaterfalls.filter(w => w.location.includes('New Zealand')),
};