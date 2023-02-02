import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickMortyRoutingModule } from './rick-morty-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { LocacionesComponent } from './pages/locaciones/locaciones.component';
import { EpisodeosComponent } from './pages/episodeos/episodeos.component';


@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    LocacionesComponent,
    EpisodeosComponent
  ],
  imports: [
    CommonModule,
    RickMortyRoutingModule,
  ]
})
export class RickMortyModule { }
