import { Router } from 'express';
import { MusicController } from '../controllers/MusicController'; 

const router = Router();

router.post('/', MusicController.createMusic);
router.get('/', MusicController.getAllMusics);
router.get('/:id', MusicController.getMusicById);
router.put('/:id', MusicController.updateMusic);
router.delete('/:id', MusicController.deleteMusic);

export default router;
