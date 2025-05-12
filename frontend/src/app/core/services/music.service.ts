import { Injectable } from '@angular/core';
import { Music } from '../../models/deezer.models';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  currentMusic: Music | null = null;
  isPlaying: boolean = false;

  play(music: Music): void {
    this.currentMusic = music;
    this.isPlaying = true;
    const audio = new Audio(music.preview);
    audio.play();
  }
}
