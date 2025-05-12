import express from 'express';
import { DeezerController } from '../controllers/DeezerController';

const router = express.Router();

router.get('/search', DeezerController.searchMusic);
router.get('/playlists', DeezerController.getPredefinedPlaylists);
router.get('/top-artists', DeezerController.getTopArtists);
router.get('/top-tracks', DeezerController.getTopTracks);
router.get('/genres', DeezerController.getGenres);

export default router;
