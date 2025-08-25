import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Waterfall {
  id: string;
  type: string;
  name: string;
  no_of_drops: string;
  avgWidth: string;
  avgHeight: string;
  watercourse: string;
  location: string;
  coordinate: string;
}

interface WaterfallTableProps {
  waterfalls: Waterfall[];
  title?: string;
}

const WaterfallTable: React.FC<WaterfallTableProps> = ({ waterfalls, title }) => {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      )}
      <div className="rounded-md border border-border bg-card">
        <Table>
          <TableHeader className="bg-emerald-500/20">
            <TableRow>
              <TableHead className="font-bold text-black">Waterfall Name</TableHead>
              <TableHead className="font-bold text-black">Width</TableHead>
              <TableHead className="font-bold text-black">Height</TableHead>
              <TableHead className="font-bold text-black">No of Drops</TableHead>
              <TableHead className="font-bold text-black">Course Name</TableHead>
              <TableHead className="font-bold text-black">Location</TableHead>
              <TableHead className="font-bold text-black">Coordinate</TableHead>
              <TableHead className="font-bold text-black">Remark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {waterfalls.map((waterfall) => (
              <TableRow key={waterfall.id} className="hover:bg-accent/50">
                <TableCell className="font-bold text-black hover:underline cursor-pointer">
                  {waterfall.name}
                </TableCell>
                <TableCell className="font-bold text-black">{waterfall.avgWidth}</TableCell>
                <TableCell className="font-bold text-black">{waterfall.avgHeight}</TableCell>
                <TableCell className="font-bold text-black">{waterfall.no_of_drops}</TableCell>
                <TableCell className="font-bold text-black">{waterfall.watercourse}</TableCell>
                <TableCell className="font-bold text-black">{waterfall.location}</TableCell>
                <TableCell className="font-bold text-black">{waterfall.coordinate}</TableCell>
                <TableCell className="font-bold text-black">{waterfall.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WaterfallTable;
