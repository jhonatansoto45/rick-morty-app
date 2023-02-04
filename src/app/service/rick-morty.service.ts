import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Personajes } from '../rick-morty/interface/rickmorty.interface';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  isOpenAside$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  getCharacters(): Observable<Personajes> {
    return this.http.get<Personajes>(`${this.baseUrl}/character`);
  }
}
