import { Request, Response } from 'express';
import { db } from '../service/prisma.service';


export const getDashboardMetrics = async (req: Request, res: Response): Promise<void> => {
	try {
		const popularProducts = await db.products.findMany({
			take: 15,
			orderBy: {
				stockQuantity: 'desc',
			},
		});

		const salesSummary = await db.
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving dashboard metrics' });
	}
};
