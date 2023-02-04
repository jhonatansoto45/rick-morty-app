import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/service/rick-morty.service';
import { ListadosService } from '../../services/listados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [],
})
export class HomeComponent implements OnInit {
  constructor(
    private rmService: RickMortyService,
    private listados: ListadosService
  ) {}

  ngOnInit(): void {
    this.rmService.validateAside();
  }

  get listPremios() {
    return [...this.listados.listPremios];
  }

  get listPartnes() {
    return [...this.listados.listPartnes];
  }

  dataPersonajes(): void {}
}
