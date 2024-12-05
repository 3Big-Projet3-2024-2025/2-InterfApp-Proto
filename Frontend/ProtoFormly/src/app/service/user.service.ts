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
    const formData = new FormData();

    formData.append('username', userData.username);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    return this.http.post(this.apiUrl, formData);
  }

  login(userData: any): Observable<any> {
    const formData = new FormData();

    formData.append('email', userData.email);
    formData.append('password', userData.password);
    return this.http.post(this.apiUrl, formData);
  }
}

