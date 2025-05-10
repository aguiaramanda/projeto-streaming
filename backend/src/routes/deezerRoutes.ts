import express from 'express';
import { searchMusic } from '../controllers/DeezerController';

const router = express.Router();

router.get('/search', searchMusic);

export default router;
