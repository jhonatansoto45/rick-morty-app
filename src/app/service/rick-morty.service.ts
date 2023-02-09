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

  get getSessionStorageCharacters() {
    return JSON.parse(sessionStorage.getItem('characters')!);
  }

  validateAside(): void {
    if (this.isOpenAside$.getValue()) {
      this.disableAside();
    }
  }

  disableAside(): void {
    this.isOpenAside$.next(false);
  }

  getCharacters(): Observable<Result[]> {
    return this.http.get<Personajes>(`${this.baseUrl}/character`).pipe(
      map((data) => {
        this.dataCharacters = data.results;
        this.guardarSessionStorageCharacters();
        return data.results;
      })
    );
  }

  getFilterCharacter(param: string, text: string): Observable<Result[]> {
    return this.http
      .get<Personajes>(`${this.baseUrl}/character/?${param}=${text}`)
      .pipe(map((data) => data.results));
  }

  getCharacterById(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}/character/${id}`);
  }

  guardarSessionStorageCharacters(): void {
    sessionStorage.setItem('characters', JSON.stringify(this.dataCharacters));
  }
}
