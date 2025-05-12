import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artists, Genre, Playlist, Track } from '../../models/deezer.models';

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  private apiUrl = 'http://localhost:5000/api/deezer';

  constructor(private http: HttpClient) {}

  public searchMusic(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, {
      params: { query },
    });
  }

  public getPredefinedPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.apiUrl}/playlists`);
  }

  public getTopArtists(): Observable<Artists[]>{
    return this.http.get<Artists[]>(`${this.apiUrl}/top-artists`);
  }
  
  public getTopTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.apiUrl}/top-tracks`);
  }

  public loadGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.apiUrl}/genres`);
  } 

  createPlaylist(playlist: { name: string, description: string }): Observable<Playlist> {
    return this.http.post<Playlist>(`${this.apiUrl}/playlists`, playlist);
  }
}
