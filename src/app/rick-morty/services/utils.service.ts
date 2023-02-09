import { Injectable } from '@angular/core';
import { Result } from '../interface/rickmorty.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  findCharacter(character: Result[], id: number): Result {
    return character.find((item) => item.id === id)!;
  }
}
