import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MoviesComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
