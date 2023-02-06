import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../interface/rickmorty.interface';

@Pipe({
  name: 'estado',
})
export class EstadoPipe implements PipeTransform {
  transform(value: string): string {
    return value === Status.Alive ? 'Vivo' : 'Muerto';
  }
}
