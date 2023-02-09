import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
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
  busqueda: string = '';

  debouncer$: Subject<string> = new Subject<string>();

  model: PersonajesModel = PersonajesModel.getInstance();

  constructor(private rmService: RickMortyService, private router: Router) {
    this.clickedFueraFiltro();
    this.changeChecked('name');
  }

  ngOnInit(): void {
    this.rmService.validateAside();

    if (!this.dataSession?.length) {
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

  get placeholder(): string {
    let msg: string = '';
    switch (this.filterMsg) {
      case 'name':
        msg = msg.concat('Rick, Morty, Summer...');
        break;
      case 'status':
        msg = msg.concat('Alive, Dead...');
        break;
      case 'specie':
        msg = msg.concat('Human, Alien...');
        break;
      case 'type':
        msg = msg.concat('tipo');
        break;
      case 'gender':
        msg = msg.concat('Female, Male...');
        break;
    }

    return msg.trim();
  }

  searchCharacter(): void {
    this.debouncer$.next(this.busqueda);
    this.debouncer$.pipe(debounceTime(300)).subscribe((valor: string) => {
      this.rmService
        .getFilterCharacter(this.filterMsg, valor)
        .subscribe((data) => {
          this.cards = data;
        });
    });
  }

  viewFilter(): void {
    this.showFilter = !this.showFilter;
  }

  changeChecked(field: string): void {
    if (this.busqueda.length) this.cards = this.dataSession;

    this.filterMsg = '';
    this.busqueda = '';
    this.filterMsg = field;
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
