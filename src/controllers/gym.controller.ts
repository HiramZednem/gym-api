import { Request, Response } from 'express';
import { gymService } from '../services/gym.service';


export const gymController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const gyms = await gymService.getAll();
            return res.status(201).json(gyms);
        } catch (e) {
            res.status(500).json({ error: (e as Error).message });
        }
    },

};
