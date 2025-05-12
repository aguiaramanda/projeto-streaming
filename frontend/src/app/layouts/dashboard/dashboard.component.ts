import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../../core/services/deezer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artists, Genre, Music, Playlist, Track } from '../../models/deezer.models';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent implements OnInit {
  musicList: Music[] = [];
  query: string = '';
  predefinedPlaylists: Playlist[] = [];
  topArtists: Artists[] = [];
  topTracks: Track[] = [];
  genres: Genre[] = [];

  constructor(private deezerService: DeezerService) {}

  ngOnInit(): void {
    this.loadPredefinedPlaylists();
    this.loadTopArtists();
    this.loadTopTracks();
    this.loadGenres();
  }

  public searchMusic() {
    if (this.query) {
      this.deezerService.searchMusic(this.query)
      .subscribe({
        next: (data: Music[]) => {
          this.musicList = data;
        },
        error: (err) => {
          console.error('Erro ao buscar músicas:', err);
        }
      });
    }
  }

  public loadPredefinedPlaylists() {
    this.deezerService.getPredefinedPlaylists()
    .subscribe({
      next: (playlists: Playlist[]) => {
        this.predefinedPlaylists = playlists;
      },
      error: (err) => console.error('Erro ao carregar playlists:', err)
    });
  }

  public loadTopArtists() {
    this.deezerService.getTopArtists().subscribe({
      next: (data: Artists[]) => {
        this.topArtists = data.slice(0, 7);;
      },
      error: (err) => {
        console.error('Erro ao buscar Top Artists:', err);
      },
    });
  }

  public loadTopTracks() {
    this.deezerService.getTopTracks().subscribe({
      next: (data: Track[]) => {
        this.topTracks = data.slice(0, 8);
      },
      error: (err) => {
        console.error('Erro ao buscar Top Tracks:', err);
      },
    });
  }

  public loadGenres() {
    this.deezerService.loadGenres().subscribe({
      next: (data: Genre[]) => {
        this.genres = data.slice(1, 9);
      },
      error: (err) => {
        console.error('Erro ao buscar Gêneros:', err);
      }, 
    });
  }

  public onPlay(track: any) {
    alert(`Para tocar ${track.title}, faça login primeiro!`);
  }
}
