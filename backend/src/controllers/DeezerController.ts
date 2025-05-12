import { Request, Response } from 'express';
import { DeezerService } from '../services/DeezerService';
import asyncHandler from '../middleware/asyncHandler';

export class DeezerController {
    static searchMusic = asyncHandler(async (req: Request, res: Response) => {
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


    static getPredefinedPlaylists = asyncHandler(async (_req: Request, res: Response) => {
        const predefinedPlaylists = [
            '5897059264', 
            '5691935322',
            '7579385582',
            '1202660313',
            '3443535566',
            '13525328463',
            '4697225044',
            '3338949242'

        ];

        const playlistsData = await Promise.all(
            predefinedPlaylists.map(async (id) => {
            const result = await DeezerService.getPlaylist(id);

                return {
                    id: result.id,
                    title: result.title,
                    description: result.description,
                    cover: result.picture_medium,
                    tracks: result.tracks.data.map((track: any) => ({
                        id: track.id,
                        title: track.title,
                        artist: track.artist.name,
                        preview: track.preview,
                    })),
                };
            })
        );
        res.status(200).json(playlistsData);
    });

    static getTopArtists = asyncHandler(async (req: Request, res: Response) => {
        const artists = await DeezerService.getTopArtists();
        res.status(200).json(artists);
    });

    static getTopTracks = asyncHandler(async (req: Request, res: Response) => {
        const topTracks = await DeezerService.getTopTracks();
        res.status(200).json(topTracks);
    });

    static getGenres = asyncHandler(async (req: Request, res: Response) => {
        const topCharts = await DeezerService.getGenres();
        res.status(200).json(topCharts);
    });
}