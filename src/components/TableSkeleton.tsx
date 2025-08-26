import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

const WaterfallTableSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-xl shadow-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead className="font-bold text-black py-4">
                Waterfall Name
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                Width
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                Height
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                No of Drops
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                Course Name
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                Location
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                Coordinate
              </TableHead>
              <TableHead className="font-bold text-black py-4">
                Remark
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 8 }).map((_, index) => (
              <TableRow
                key={index}
                className="hover:bg-muted/20 transition-colors"
              >
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-40 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-16 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-16 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-16 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-32 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-48 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-40 rounded" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-32 rounded" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WaterfallTableSkeleton;
