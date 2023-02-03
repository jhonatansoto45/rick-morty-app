import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(value: string): string {
    return `../../../assets/partnes/${value}.png`;
  }
}
