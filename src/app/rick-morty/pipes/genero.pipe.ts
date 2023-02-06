import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../interface/rickmorty.interface';

@Pipe({
  name: 'genero',
})
export class GeneroPipe implements PipeTransform {
  transform(value: Gender): string {
    return value === Gender.Female
      ? 'Femenino'
      : value === Gender.Male
      ? 'Masculino'
      : 'Desconocido';
  }
}
