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

  showFilter: boolean = false;

  constructor(private rmService: RickMortyService, private router: Router) {
    this.clickedFueraFiltro();
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

  detallePersonaje(index: number): void {
    this.router.navigate(['/rick-morty/detalle/', index]);
  }

  viewFilter(): void {
    this.showFilter = !this.showFilter;
  }

  clickedFueraFiltro(): void {
    window.addEventListener('click', (event) => {
      const divFilter = document.querySelector('.filter__opt');
      if (this.showFilter && !divFilter?.contains(event.target as Node)) {
        this.showFilter = false;
      }
    });
  }
}
