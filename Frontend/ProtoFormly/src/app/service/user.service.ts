import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users'; 

  constructor(private http: HttpClient) { }

  isAuthenticated() :boolean{
    return true;
  }

  hasRole(role : any) : boolean{
    return true;
  }

  register(userData: any): Observable<any> {
    
    return this.http.post(this.apiUrl, userData);
  }

  login(userData: any): Observable<any> {
   
    return this.http.post(this.apiUrl+"/login", userData);
  }
}

