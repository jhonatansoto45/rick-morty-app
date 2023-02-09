import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  constructor() {}

  extractEpisodios(episodios: string[]): string {
    let listEpisodios: string = '';
    episodios.forEach((item) => {
      const lastLevel: number = 5;
      listEpisodios = listEpisodios.concat(item.split('/')[lastLevel]);
    });

    return listEpisodios;
  }
}
