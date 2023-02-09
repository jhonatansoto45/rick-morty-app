import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RickMortyService } from 'src/app/service/rick-morty.service';
import {
  Gender,
  Result,
  Species,
  Status,
} from '../../interface/rickmorty.interface';
import { EpisodiosService } from '../../services/episodios.service';

@Component({
  selector: 'app-episodeos',
  templateUrl: './episodeos.component.html',
  styleUrls: ['./episodeos.component.scss'],
})
export class EpisodeosComponent implements OnInit, OnDestroy {
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
    private episodioService: EpisodiosService,
    private rmService: RickMortyService
  ) {}

  ngOnInit(): void {
    this.getDataSession();
    this.episodioService.extractEpisodios(this.character.episode);
  }

  ngOnDestroy(): void {}

  getDataSession(): void {
    this.character = JSON.parse(sessionStorage.getItem('currentCharacter')!);
  }
}
