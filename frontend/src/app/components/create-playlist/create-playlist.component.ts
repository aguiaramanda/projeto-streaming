import { Component } from '@angular/core';
import { DeezerService } from '../../core/services/deezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-playlist',
  imports: [],
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.scss'
})
export class CreatePlaylistComponent {
  playlist = {
    name: '',
    description: ''
  };

  constructor(
    private deezerService: DeezerService, 
    private router: Router) {}

  // Função para criar a playlist
  createPlaylist() {
    if (this.playlist.name.trim() === '') {
      alert('O nome da playlist é obrigatório.');
      return;
    }

    this.deezerService.createPlaylist(this.playlist).subscribe({
      next: (response) => {
        alert('Playlist criada com sucesso!');
        this.router.navigate(['/dashboard']); // Redireciona para a dashboard após criação
      },
      error: (err) => {
        console.error('Erro ao criar playlist:', err);
        alert('Erro ao criar playlist.');
      }
    });
  }
}
