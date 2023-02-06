import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickMortyRoutingModule } from './rick-morty-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { LocacionesComponent } from './pages/locaciones/locaciones.component';
import { EpisodeosComponent } from './pages/episodeos/episodeos.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { EstadoPipe } from './pipes/estado.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    LocacionesComponent,
    EpisodeosComponent,
    ImagenPipe,
    DetallePersonajeComponent,
    EstadoPipe
  ],
  imports: [
    CommonModule,
    RickMortyRoutingModule,
  ]
})
export class RickMortyModule { }
