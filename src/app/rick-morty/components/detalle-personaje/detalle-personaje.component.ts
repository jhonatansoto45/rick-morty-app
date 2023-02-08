import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../../../service/rick-morty.service';
import {
  Gender,
  Result,
  Species,
  Status,
} from '../../interface/rickmorty.interface';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss'],
})
export class DetallePersonajeComponent implements OnInit {
  character: Result = {
    id: 0,
    name: '',
    status: Status.Unknown,
    species: Species.Unknown,
    type: '',
    gender: Gender.Unknown,
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: new Date(''),
  };

  constructor(
    private rmService: RickMortyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      if (this.personajes?.length) {
        this.character = this.personajes[id];
      } else {
        this.cargarDatos(id);
      }
    });
  }

  get personajes() {
    return this.rmService.getSessionStorageCharacters;
  }

  cargarDatos(id: number): void {
    this.rmService.getCharacters();
    this.character = this.personajes[id];
  }
}
