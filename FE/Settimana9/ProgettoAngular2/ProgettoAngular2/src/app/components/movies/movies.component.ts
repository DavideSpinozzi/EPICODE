import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { MoviePopular } from 'src/app/models/movie-popular';
@Component({
    selector: 'app-movies',
    template: `
        <div class="bg-black">
            <h1 class="text-center text-white titolo p-3">MOVIES</h1>
            <div class="row w-100 m-auto">
                <div class="col-3 p-4 contenitoreCards" *ngFor="let movie of movies">
                <div
                    class="card w-100 h-100 bg-dark text-white"
                    style="width: 18rem;"
                >
                    <img
                        class="card-img-top h-100"
                        src="http://image.tmdb.org/t/p/w500{{movie.poster_path}}"
                        alt="film"
                    />
                    <div class="card-body">
                        <h3 class="card-text">
                            {{ movie.title }}
                        </h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [
        `
        .contenitoreCards{
            height: 800px;
        }
        .titolo{
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(46,46,46,1) 20%, rgba(46,46,46,1) 50%, rgba(46,46,46,1) 80%, rgba(0,0,0,1) 100%);
        }
        `
    ],
})
export class MoviesComponent implements OnInit {
    movies!: MoviePopular[];

    constructor(private movieSrv: MoviesService) {}

    ngOnInit(): void {
        this.movieSrv.recuperaMovies().subscribe((_movies: MoviePopular[]) => {
            this.movies = _movies;
        });
    }
}
