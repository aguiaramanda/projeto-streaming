import { Request, Response } from 'express';
import { DeezerService } from '../services/DeezerService';
import asyncHandler from '../middleware/asyncHandler';

export const searchMusic = asyncHandler(async (req: Request, res: Response) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: 'A busca não pode estar vazia.' });
  }

  const result = await DeezerService.searchMusic(query as string);
  const formattedData = result.data.map((track: any) =>({
    id: track.id,
    title: track.title,
    artist: track.artist.name,
    album: track.album.title,
    cover: track.album.cover_medium,
    preview: track.preview,
  }));
  
  res.status(200).json(formattedData);
});
