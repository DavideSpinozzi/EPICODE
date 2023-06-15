import { Component, OnInit } from '@angular/core';
import { MoviePopular } from 'src/app/models/movie-popular';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details',
    template: `
        <div
            class="bg-black main d-flex align-items-center justify-content-center text-white"
        >
            <div class="bg-dark p-4 rounded-2 w-75">
                <h1>{{ movie.title }}</h1>
                <img
                    class="card-img-top h-100"
                    src="http://image.tmdb.org/t/p/w500{{ movie.poster_path }}"
                    alt="film"
                />
            </div>
        </div>
    `,
    styles: [
        `
            .main {
                height: 100vh;
            }
        `,
    ],
})
export class DetailsComponent implements OnInit {
    movie!: MoviePopular;
    id!: number;

    constructor(
        private movieSrv: MoviesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((parametro) => {
            console.log(parametro);
            this.id = +parametro['id'];
            console.log(this.id);
            this.caricaDettagli();
        });
    }

    caricaDettagli() {
        this.movieSrv.dettaglioMovies(this.id).subscribe((dettaglio) => {
            this.movie = dettaglio;
        });
    }
}
