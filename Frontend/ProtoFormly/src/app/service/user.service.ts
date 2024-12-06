import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users'; 


  constructor(private http: HttpClient,private cookieService : CookieService) { }

  get tokenJWT() : any{
    return jwtDecode(this.cookieService.get('jwt'));
  }

  isAuthenticated() :boolean{
    if(this.tokenJWT != ""){
      return true;
    }else{
      return false;
    }
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
    this.cookieService.set('jwt', jwt, 1, '/');
    console.log(this.tokenJWT);
  }


  isTokenExpired(token: string): boolean {
    if (!this.tokenJWT || !this.tokenJWT.exp) {
      return true; // Si le token ne contient pas d'expiration, on considère qu'il est expiré
    }
    const currentTime = Math.floor(Date.now() / 1000); // Temps actuel en secondes
    return this.tokenJWT.exp < currentTime;
  }
}

