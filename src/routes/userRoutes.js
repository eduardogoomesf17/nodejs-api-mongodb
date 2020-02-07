import { Router } from 'express';

import userController from '../controllers/userController';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.put('/:username', userController.update);
router.delete('/:username', userController.delete);

export default router;
