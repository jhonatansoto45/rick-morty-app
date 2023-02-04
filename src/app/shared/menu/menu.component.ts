import { Component } from '@angular/core';
import { RickMortyService } from '../../service/rick-morty.service';

interface MenuItem {
  nombre: string;
  icono: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  links: MenuItem[] = [
    {
      nombre: 'Inicio',
      icono: 'home',
      ruta: './rick-morty/home',
    },
    {
      nombre: 'Personajes',
      icono: 'favorite',
      ruta: './rick-morty/personajes',
    },
    {
      nombre: 'Locaciones',
      icono: 'map',
      ruta: './rick-morty/locaciones',
    },
    {
      nombre: 'Episodeos',
      icono: 'star_rate',
      ruta: './rick-morty/episodeos',
    },
  ];

  constructor(private rickMortyService: RickMortyService) {}

  toggle(): void {
    this.asideActive
      ? this.rickMortyService.disableAside()
      : this.rickMortyService.isOpenAside$.next(true);
  }

  get asideActive(): boolean {
    return this.rickMortyService.isOpenAside$.getValue();
  }
}
