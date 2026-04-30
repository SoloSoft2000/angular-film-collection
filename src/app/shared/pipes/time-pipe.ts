import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
})
export class TimePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) return '';
    const hours = Math.floor(value/60);
    const minutes = value % 60;
    let result = hours ? `${hours}h ` : '';
    result += minutes ? `${minutes}min` : '';
    return result.trim();
  }
}
