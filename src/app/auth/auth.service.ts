import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  async login(user: any){
    try {
      const result = await this.http.post<any>(`${environment.url}auth/login`, user).toPromise();
      if(result && result.access_token){
        window.localStorage.setItem('token', result.access_token);
        return true;
      }
      return false
    } catch (error) {
      return false
    }
  }

  async createAccount(account: any){
    let result = await this.http.post<any>(`${environment.url}usuario`, account).toPromise();
    result = this.login(account)
    return result;
  }

  getAuthorizationToken(){
    const token  = window.localStorage.getItem('token');
    return token;
  }
}
