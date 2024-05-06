import { Router } from 'express';
import { gymController } from '../controllers';

const router = Router();

router.get('/', gymController.getAll);
// router.get('/:id', userController.getUser);
// router.get('/', userController.getAllUser);
// router.post('/login', userController.login);
// router.patch('/:id', userController.updateUser);


export default router;
