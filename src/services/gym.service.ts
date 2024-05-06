import { prisma } from '../db/db';


export const gymService = {
    getAll: async () => {
            return await prisma.gyms.findMany()
    },
};