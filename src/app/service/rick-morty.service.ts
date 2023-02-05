import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {
  Personajes,
  Result,
} from '../rick-morty/interface/rickmorty.interface';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  isOpenAside$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  dataCharacters: Result[] = [];

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  validateAside(): void {
    if (this.isOpenAside$.getValue()) {
      this.disableAside();
    }
  }

  disableAside(): void {
    this.isOpenAside$.next(false);
  }

  getCharacters(): Observable<Result[]> {
    return this.http
      .get<Personajes>(`${this.baseUrl}/character`)
      .pipe(map((data) => data.results));
  }
}
