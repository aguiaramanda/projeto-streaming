import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../../core/services/deezer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artists, Genre, Music, Playlist, Track } from '../../models/deezer.models';
import { subscribeOn } from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SearchService } from '../../core/services/search.service';
import { MusicService } from '../../core/services/music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule ],
})
export class DashboardComponent implements OnInit {
  musicList: Music[] = [];
  query: string = '';
  predefinedPlaylists: Playlist[] = [];
  topArtists: Artists[] = [];
  topTracks: Track[] = [];
  genres: Genre[] = [];
  searchResults: any[] = [];
  isPlaying: boolean = false;
  currentTrack: HTMLAudioElement | null = null;

  constructor(
    private deezerService: DeezerService,
    private searchService: SearchService,
    private musicService: MusicService
  ) {}

  ngOnInit(): void {
    this.loadPredefinedPlaylists();
    this.loadTopArtists();
    this.loadTopTracks();
    this.loadGenres();

    this.searchService.searchTerm$.subscribe((term) => {
      if (term) {
        this.deezerService.searchMusic(term).subscribe({
          next: (data) => {
            this.searchResults = data;
            this.hideSections();
          },
          error: (err) => console.error('Erro ao buscar músicas:', err),
        });
      }
    });
  }

  hideSections() {
    const sections = document.querySelectorAll('.hide-on-search');
    sections.forEach((section) => {
      (section as HTMLElement).style.display = 'none';
    });
  }

  playMusic(music: any) {
    if (this.currentTrack) {
      this.currentTrack.pause();
      this.currentTrack.currentTime = 0;
    }

    this.currentTrack = new Audio(music.preview);
    this.currentTrack.play();
    this.isPlaying = true;
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
        this.topArtists = data.slice(0, 7);
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
      next: (response: any) => {
        this.genres = response.data.slice(1, 9);
      },
      error: (err) => {
        console.error('Erro ao buscar Gêneros:', err);
      }, 
    });
  }

  public onPlay(playlist: Playlist): void {
    const firstTrack = playlist.tracks[0]; 
    const music: Music = {
      id: firstTrack.id,
      title: firstTrack.title,
      artist: firstTrack.artist,
      album: firstTrack.title,
      preview: firstTrack.preview,
    };

    this.musicService.play(music); 
    this.isPlaying = true;
  }


}
