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
    title: 'Waterfalls of North America',
    avgWidth: 324,
    avgHeight: 2023,
    watercourse: 'Dr. Michael Rivers',
    location: 'Nature Publishing, New York'
  },
  {
    id: '2',
    type: 'Photography',
    title: 'Capturing the Falls: A Visual Journey',
    avgWidth: 256,
    avgHeight: 2022,
    watercourse: 'Sarah Chen',
    location: 'Adventure Press, California'
  },
  {
    id: '3',
    type: 'Scientific Study',
    title: 'Hydrology and Waterfall Formation',
    avgWidth: 412,
    avgHeight: 2024,
    watercourse: 'Prof. Elena Cascade',
    location: 'Academic Publishers, London'
  },
  {
    id: '4',
    type: 'Travel Guide',
    title: 'World\'s Most Beautiful Waterfalls',
    avgWidth: 288,
    avgHeight: 2023,
    watercourse: 'Adventure Collective',
    location: 'Globe Trekker Books, Sydney'
  },
  {
    id: '5',
    type: 'Historical',
    title: 'Legends of the Falling Waters',
    avgWidth: 195,
    avgHeight: 2021,
    watercourse: 'Dr. James Torrent',
    location: 'Heritage Publications, Edinburgh'
  },
  {
    id: '6',
    type: 'Children\'s Book',
    title: 'Wally the Waterfall\'s Adventure',
    avgWidth: 32,
    avgHeight: 2024,
    watercourse: 'Emma Springs',
    location: 'Young Readers Press, Toronto'
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