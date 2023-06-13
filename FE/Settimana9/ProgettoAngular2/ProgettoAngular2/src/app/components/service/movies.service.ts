import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MoviePopular } from 'src/app/models/movie-popular';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  recuperaMovies(){
    return this.http.get<MoviePopular[]>(`${this.baseURL}/movies-popular`);
  }
}
