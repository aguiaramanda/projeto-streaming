import axios from 'axios';

export class DeezerService {
  private static BASE_URL = 'https://api.deezer.com';

  public static async searchMusic(query: string) {
    try {
      const response = await axios.get(`${this.BASE_URL}/search`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar músicas:', error);
      throw new Error('Erro ao buscar músicas');
    }
  }

  public static async getAlbum(albumId: number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/album/${albumId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar álbum:', error);
      throw new Error('Erro ao buscar álbum');
    }
  }

  public static async getArtist(artistId: number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/artist/${artistId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
      throw new Error('Erro ao buscar artista');
    }
  }

  public static async getPlaylist(id: string) {
    try {
      const response = await axios.get(`${this.BASE_URL}/playlist/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar playlist:', error);
      throw new Error('Erro ao buscar playlist:');
    }
  }

  public static async getTopArtists() {
    try {
      const response = await axios.get(`${this.BASE_URL}/chart`);
      return response.data.artists.data;
    } catch (error) {
      console.error('Erro ao buscar os Top Artists:', error);
      throw error;
    }
  }

  public static async getTopTracks() {
    try {
      const response = await axios.get(`${this.BASE_URL}/chart`);
      return response.data.tracks.data;
    } catch (error) {
      console.error('Erro ao buscar os Top Músicas:', error);
      throw error;
    }
  }

  public static async getGenres() {
  try {
    const response = await axios.get(`${this.BASE_URL}/genre`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar gêneros:', error);
    throw error;
  }
}

}
