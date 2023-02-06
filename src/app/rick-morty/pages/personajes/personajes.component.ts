import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickMortyService } from '../../../service/rick-morty.service';
import { Result } from '../../interface/rickmorty.interface';
import { PersonajesModel } from './personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  cards: Result[] = [];

  showFilter: boolean = false;
  filterMsg: string = '';

  model: PersonajesModel = PersonajesModel.getInstance();

  constructor(private rmService: RickMortyService, private router: Router) {
    this.clickedFueraFiltro();
    this.changeChecked(true, 'name');
  }

  ngOnInit(): void {
    this.rmService.validateAside();

    if (!this.dataSession.length) {
      this.rmService.getCharacters().subscribe((data) => (this.cards = data));
    } else {
      this.cards = this.dataSession;
    }
  }

  get aside(): boolean {
    return this.rmService.isOpenAside$.getValue();
  }

  get dataSession() {
    return this.rmService.getSessionStorageCharacters;
  }

  searchCharacter(value: string): void {
    console.log(value);
    console.log(this.filterMsg.split(','));
  }

  viewFilter(): void {
    this.showFilter = !this.showFilter;
  }

  changeChecked(value: boolean, field: string): void {
    if (!value) {
      this.filterMsg = this.filterMsg.includes(field)
        ? this.filterMsg.replace(`${field},`, '')
        : '';
      return;
    }

    this.filterMsg = this.filterMsg.concat(`${field},`);
  }

  detallePersonaje(index: number): void {
    this.router.navigate(['/rick-morty/detalle/', index]);
  }

  private clickedFueraFiltro(): void {
    window.addEventListener('click', (event) => {
      const divFilter = document.querySelector('.filter__opt');
      if (this.showFilter && !divFilter?.contains(event.target as Node)) {
        this.showFilter = false;
      }
    });
  }
}
