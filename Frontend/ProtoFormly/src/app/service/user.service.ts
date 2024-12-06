import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users'; 
  private tokenJWT : any = "";

  constructor(private http: HttpClient) { }

  isAuthenticated() :boolean{
    return this.tokenJWT
  }

  hasRole( role: string): boolean {
    if (!this.isAuthenticated){
      return false;
    }
    return this.tokenJWT.roles.includes(role);
  }

  register(userData: any): Observable<any> {
    
    return this.http.post(this.apiUrl, userData);
  }

  login(userData: any): Observable<any> {

    return this.http.post(this.apiUrl+"/login", userData);
  }

  saveJwt(jwt: string){
    this.tokenJWT = jwtDecode(jwt);
  }


  isTokenExpired(token: string): boolean {
    if (!this.tokenJWT || !this.tokenJWT.exp) {
      return true; // Si le token ne contient pas d'expiration, on considère qu'il est expiré
    }
    const currentTime = Math.floor(Date.now() / 1000); // Temps actuel en secondes
    return this.tokenJWT.exp < currentTime;
  }
}

