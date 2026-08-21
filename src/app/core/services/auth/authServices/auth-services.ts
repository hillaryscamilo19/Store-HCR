import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

interface LoginResponse {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root',
})
export class AuthServices {
   private http = inject(HttpClient);

  private readonly API_URL =
    'http://localhost:3000/auth';


  login(
    credentials: LoginRequest
  ): Observable<LoginResponse> {

    return this.http
      .post<LoginResponse>(
        `${this.API_URL}/login`,
        credentials
      )
      .pipe(

        tap(response => {

          localStorage.setItem(
            'access_token',
            response.access_token
          );

          localStorage.setItem(
            'user',
            JSON.stringify(response.user)
          );

        })

      );
  }


  logout(): void {

    localStorage.removeItem(
      'access_token'
    );

    localStorage.removeItem(
      'user'
    );

  }


  getToken(): string | null {

    return localStorage.getItem(
      'access_token'
    );

  }


  getUser(): User | null {

    const user = localStorage.getItem(
      'user'
    );

    return user
      ? JSON.parse(user)
      : null;

  }


  isAuthenticated(): boolean {

    return !!this.getToken();

  }
  
}
