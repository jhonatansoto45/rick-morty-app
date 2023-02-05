import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickMortyService } from '../../../service/rick-morty.service';
import { Result } from '../../interface/rickmorty.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  cards: Result[] = [];

  constructor(private rmService: RickMortyService, private router: Router) {}

  ngOnInit(): void {
    this.rmService.validateAside();

    this.rmService.getCharacters().subscribe((data) => {
      this.cards = data;
      this.rmService.dataCharacters = data;
    });
  }

  get aside(): boolean {
    return this.rmService.isOpenAside$.getValue();
  }

  detallePersonaje(index: number): void {
    console.log('clicked personaje');
    this.router.navigate(['/rick-morty/detalle/', index]);
  }
}
