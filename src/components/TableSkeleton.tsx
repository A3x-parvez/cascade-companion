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

const TableSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="waterfall-table">
        <Table>
          <TableHeader className="table-header">
            <TableRow>
              <TableHead className="font-bold text-ocean-deep py-4">Waterfall Type</TableHead>
              <TableHead className="font-bold text-ocean-deep py-4">Waterfall Name</TableHead>
              <TableHead className="font-bold text-ocean-deep py-4">Avg Width (m)</TableHead>
              <TableHead className="font-bold text-ocean-deep py-4">Avg Height (m)</TableHead>
              <TableHead className="font-bold text-ocean-deep py-4">Watercourse</TableHead>
              <TableHead className="font-bold text-ocean-deep py-4">Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index} className="table-row">
                <TableCell className="py-4">
                  <Skeleton className="h-6 w-24 rounded-full" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-40" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-16" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-32" />
                </TableCell>
                <TableCell className="py-4">
                  <Skeleton className="h-5 w-48" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableSkeleton;
