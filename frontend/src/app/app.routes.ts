import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-playlist', component: CreatePlaylistComponent },
  { path: '**', redirectTo: 'login' }
];
