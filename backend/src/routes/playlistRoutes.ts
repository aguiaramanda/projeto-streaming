import { Router } from 'express';
import { PlaylistController } from '../controllers/PlaylistController';

const router = Router();

router.post('/', PlaylistController.createPlaylist);
router.get('/', PlaylistController.getAllPlaylists);
router.get('/:id', PlaylistController.getPlaylistById);
router.put('/:id', PlaylistController.updatePlaylist);
router.delete('/:id', PlaylistController.deletePlaylist);

export default router;
