import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeosComponent } from './pages/episodeos/episodeos.component';
import { HomeComponent } from './pages/home/home.component';
import { LocacionesComponent } from './pages/locaciones/locaciones.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'personajes',
        component: PersonajesComponent,
      },
      {
        path: 'locaciones',
        component: LocacionesComponent,
      },
      {
        path: 'episodeos',
        component: EpisodeosComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickMortyRoutingModule {}
