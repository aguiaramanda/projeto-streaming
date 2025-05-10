import { Request, Response, NextFunction } from 'express';
import Music from '../models/Music';
import asyncHandler from '../middleware/asyncHandler';

export class MusicController {
  static createMusic = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { title, artist, playlistId } = req.body;
    const newMusic = await Music.create({ title, artist, playlistId });
    return res.status(201).json(newMusic);
  });

  static getAllMusics = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const musics = await Music.findAll();
    return res.json(musics);
  });

  static getMusicById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const music = await Music.findByPk(id);
    if (!music) return res.status(404).json({ message: 'Música não encontrada' });
    return res.json(music);
  });

  static updateMusic = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, artist, playlistId } = req.body;
    const music = await Music.findByPk(id);
    if (!music) return res.status(404).json({ message: 'Música não encontrada' });

    music.title = title;
    music.artist = artist;
    music.playlistId = playlistId;

    await music.save();
    return res.json(music);
  });

  static deleteMusic = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const music = await Music.findByPk(id);
    if (!music) return res.status(404).json({ message: 'Música não encontrada' });

    await music.destroy();
    return res.status(204).send();
  });
}
