import axios from 'axios';

export class DeezerService {
  private static BASE_URL = 'https://api.deezer.com';

  static async searchMusic(query: string) {
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

  static async getAlbum(albumId: number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/album/${albumId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar álbum:', error);
      throw new Error('Erro ao buscar álbum');
    }
  }

  static async getArtist(artistId: number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/artist/${artistId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar artista:', error);
      throw new Error('Erro ao buscar artista');
    }
  }
}
