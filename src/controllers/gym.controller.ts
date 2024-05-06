import { Request, Response } from 'express';
import { gymService } from '../services/gym.service';


export const gymController = {
    getAll: async (req: Request, res: Response) => {
        try {
            const gyms = await gymService.getAll();
            return res.status(201).json(gyms);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create new user' });
        }
    },

};
