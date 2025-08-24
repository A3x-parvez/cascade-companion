import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Book } from 'lucide-react';

interface BookData {
  id: string;
  type: string;
  title: string;
  avgWidth: number; // pages
  avgHeight: number; // publication year
  watercourse: string; // author
  location: string; // publisher/location
}

const dummyBooks: BookData[] = [
  {
    id: '1',
    type: 'Field Guide',
    title: 'Waterfalls of India: A Field Guide',
    avgWidth: 324,
    avgHeight: 2022,
    watercourse: 'Dr. Raghavendra Rao',
    location: 'National Book Trust, New Delhi'
  },
  {
    id: '2',
    type: 'Photography',
    title: 'Jharna: Waterfalls Through the Lens',
    avgWidth: 256,
    avgHeight: 2023,
    watercourse: 'Sudhir Shivaram',
    location: 'Penguin Random House India, Gurugram'
  },
  {
    id: '3',
    type: 'Scientific Study',
    title: 'Hydrology of Indian Rivers and Waterfalls',
    avgWidth: 412,
    avgHeight: 2024,
    watercourse: 'Prof. Anjali Kulkarni',
    location: 'Indian Academy of Sciences, Bengaluru'
  },
  {
    id: '4',
    type: 'Travel Guide',
    title: 'Exploring India’s Hidden Waterfalls',
    avgWidth: 288,
    avgHeight: 2023,
    watercourse: 'Lonely Planet India Team',
    location: 'Lonely Planet India, Mumbai'
  },
  {
    id: '5',
    type: 'Historical',
    title: 'Myths & Legends of Indian Waterfalls',
    avgWidth: 195,
    avgHeight: 2021,
    watercourse: 'Dr. Kavita Deshpande',
    location: 'Rupa Publications, New Delhi'
  },
  {
    id: '6',
    type: 'Children\'s Book',
    title: 'Chintu and the Talking Jharna',
    avgWidth: 32,
    avgHeight: 2024,
    watercourse: 'Priya Nair',
    location: 'Tulika Books, Chennai'
  }
];
const Books = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-ocean-deep mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Waterfall Books Collection</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Discover books about waterfalls, from scientific studies to travel guides and photography collections.
            </p>
          </div>
          
          <div className="rounded-md border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Book Type</TableHead>
                  <TableHead className="font-semibold">Book Title</TableHead>
                  <TableHead className="font-semibold">Pages</TableHead>
                  <TableHead className="font-semibold">Year</TableHead>
                  <TableHead className="font-semibold">Author</TableHead>
                  <TableHead className="font-semibold">Publisher</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyBooks.map((book) => (
                  <TableRow key={book.id} className="hover:bg-accent/50">
                    <TableCell className="font-medium">{book.type}</TableCell>
                    <TableCell className="text-primary hover:underline cursor-pointer">
                      {book.title}
                    </TableCell>
                    <TableCell>{book.avgWidth}</TableCell>
                    <TableCell>{book.avgHeight}</TableCell>
                    <TableCell>{book.watercourse}</TableCell>
                    <TableCell>{book.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Books;