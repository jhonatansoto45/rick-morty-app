import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickMortyService } from '../../../service/rick-morty.service';
import {
  Gender,
  Result,
  Species,
  Status,
} from '../../interface/rickmorty.interface';
import { EpisodiosService } from '../../services/episodios.service';

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
    private episodioService: EpisodiosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let idCharacter: number = 0;
    this.activatedRoute.params.subscribe(({ id }) => (idCharacter = id));

    this.getCharacter(idCharacter);
  }

  get personajes() {
    return this.rmService.getSessionStorageCharacters;
  }

  getCharacter(id: number): void {
    this.rmService
      .getCharacterById(id)
      .subscribe((data) => (this.character = data));
  }

  verEpisodios(): void {
    sessionStorage.setItem('currentCharacter', JSON.stringify(this.character));
    this.router.navigate(['/rick-morty/episodios']);
  }
}
