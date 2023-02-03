import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rick-morty',
    loadChildren: () =>
      import('./rick-morty/rick-morty.module').then((m) => m.RickMortyModule),
  },
  {
    path: '**',
    redirectTo: 'rick-morty',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
