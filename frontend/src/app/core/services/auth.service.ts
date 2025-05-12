import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  async login(credentials: { email: string; password: string }) {
    try {
      const response = await lastValueFrom(
        this.http.post(`${this.apiUrl}/login`, credentials)
      );
      return response;
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      throw error;
    }
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, user);
  }


  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
