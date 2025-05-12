export interface Music {
  id: number;
  title: string;
  artist: string;
  album?: string;
  cover?: string;
  coverUrl?: string;
  preview: string;
}

export interface Playlist {
  id: number;
  name: string;
  description?: string;
  cover?: string;
  tracks: Music[];
}

export interface Artists {
  id: number;
  name: string;
  picture: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  link: string;
}

export interface Track {
  id: number;
  title: string;
  link: string;
  preview: string;
  artist: {
    id: number;
    name: string;
    link: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
  };
}

export interface Genre {
  id: number;
  name: string;
  picture: string;
  picture_medium: string;
  picture_big: string;
}