import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../../service/rick-morty.service';
import { Result } from '../../interface/rickmorty.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  cards: Result[] = [];

  constructor(private rmService: RickMortyService) {}

  ngOnInit(): void {
    this.rmService.validateAside();

    this.rmService.getCharacters().subscribe((data) => {
      this.cards = data.results;
    });
  }

  get aside(): boolean {
    return this.rmService.isOpenAside$.getValue();
  }
}
