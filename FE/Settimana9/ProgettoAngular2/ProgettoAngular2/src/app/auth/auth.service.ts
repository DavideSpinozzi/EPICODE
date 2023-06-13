 import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseURL = environment.baseURL;
    constructor(private http: HttpClient) { }

    PostUtenti(dati: Users){
      return this.http.post<Users>(`${this.baseURL}/users` , dati);
    }
  }
