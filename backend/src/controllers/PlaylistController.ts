import { Request, Response, NextFunction } from 'express';
import Playlist from '../models/Playlist';
import asyncHandler from '../middleware/asyncHandler';

export class PlaylistController {
  static createPlaylist = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, userId } = req.body;
    const newPlaylist = await Playlist.create({ name, userId });
    return res.status(201).json(newPlaylist);
  });

  static getAllPlaylists = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const playlists = await Playlist.findAll();
    return res.json(playlists);
  });

  static getPlaylistById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const playlist = await Playlist.findByPk(id);
    if (!playlist) return res.status(404).json({ message: 'Playlist não encontrada' });
    return res.json(playlist);
  });

  static updatePlaylist = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, userId } = req.body;
    const playlist = await Playlist.findByPk(id);
    if (!playlist) return res.status(404).json({ message: 'Playlist não encontrada' });

    playlist.name = name;
    playlist.userId = userId;

    await playlist.save();
    return res.json(playlist);
  });

  static deletePlaylist = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const playlist = await Playlist.findByPk(id);
    if (!playlist) return res.status(404).json({ message: 'Playlist não encontrada' });

    await playlist.destroy();
    return res.status(204).send();
  });
}
