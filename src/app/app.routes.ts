import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { VassoioComponent } from './components/vassoio/vassoio.component';
import { AboutuComponent } from './components/aboutu/aboutu.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

export const routes: Routes = [
    { path: '**', component: NotFoundComponent },
    { path: '', component: WelcomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'vassoio', component: VassoioComponent},
    { path: 'about', component: AboutuComponent },
    { path: 'carrello', component: CarrelloComponent },
    { path: 'categoria/:categoria', component: HomeComponent },
    
];
