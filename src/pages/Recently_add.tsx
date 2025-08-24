import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaterfallTable from '@/components/WaterfallTable';
import { dummyWaterfalls, Waterfall } from '@/data/waterfallData';
import { Globe2 } from 'lucide-react';

const RecentlyAdd = () =>{
	return (
		<div className="p-4">
            <Navigation />
			<h2 className="text-2xl font-bold mb-4">All Waterfalls</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full border border-gray-200 rounded-lg">
					<thead className="bg-gray-100">
						<tr>
							<th className="px-4 py-2 border">Name</th>
							<th className="px-4 py-2 border">Type</th>
							<th className="px-4 py-2 border">Avg Width (m)</th>
							<th className="px-4 py-2 border">Avg Height (m)</th>
							<th className="px-4 py-2 border">Watercourse</th>
							<th className="px-4 py-2 border">Location</th>
						</tr>
					</thead>
					<tbody>
						{dummyWaterfalls.map((waterfall: Waterfall) => (
							<tr key={waterfall.id} className="hover:bg-gray-50">
								<td className="px-4 py-2 border">{waterfall.name}</td>
								<td className="px-4 py-2 border">{waterfall.type}</td>
								<td className="px-4 py-2 border">{waterfall.avgWidth}</td>
								<td className="px-4 py-2 border">{waterfall.avgHeight}</td>
								<td className="px-4 py-2 border">{waterfall.watercourse}</td>
								<td className="px-4 py-2 border">{waterfall.location}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
            <Footer />
		</div>
	);
};

export default RecentlyAdd;