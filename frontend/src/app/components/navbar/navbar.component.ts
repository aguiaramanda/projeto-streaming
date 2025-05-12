import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Music } from '../../models/deezer.models';
import { DeezerService } from '../../core/services/deezer.service';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  musicList: Music[] = [];
  query: string = '';

  constructor(
    private router: Router, 
    private deezerService: DeezerService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
  }

  search() {
    if (this.query.trim()) {
      this.searchService.setSearchTerm(this.query);
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); 
  }
}
