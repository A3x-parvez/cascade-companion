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
  avgWidth: number;
  avgHeight: number;
  watercourse: string;
  location: string;
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
          <TableHeader>
            <TableRow>
              
              <TableHead className="font-semibold">Waterfall Name</TableHead>
              <TableHead className="font-semibold">Avg Width (m)</TableHead>
              <TableHead className="font-semibold">Avg Height (m)</TableHead>
              <TableHead className="font-semibold">Watercourse</TableHead>
              <TableHead className="font-semibold">Location</TableHead>
              <TableHead className="font-semibold">Remark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {waterfalls.map((waterfall) => (
              <TableRow key={waterfall.id} className="hover:bg-accent/50">
                <TableCell className="text-primary hover:underline cursor-pointer">
                  {waterfall.name}
                </TableCell>
                <TableCell>{waterfall.avgWidth}</TableCell>
                <TableCell>{waterfall.avgHeight}</TableCell>
                <TableCell>{waterfall.watercourse}</TableCell>
                <TableCell>{waterfall.location}</TableCell>
                <TableCell className="font-medium">{waterfall.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WaterfallTable;