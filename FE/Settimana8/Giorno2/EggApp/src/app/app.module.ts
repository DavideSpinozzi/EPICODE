import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AttivoComponent } from './attivo/attivo.component';
import { InattivoComponent } from './inattivo/inattivo.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'Attivo', component: AttivoComponent },
  { path: 'Inattivo', component: InattivoComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AttivoComponent,
    InattivoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
