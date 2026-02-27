import { Pipe, PipeTransform } from '@angular/core';
import { format, parse } from 'date-fns';

@Pipe({ name: 'dateFormat', standalone: true })
export class DateFormatPipe implements PipeTransform {
  transform(value: string | null | undefined, formatFrom: string, formatTo: string = 'dd.MM.yyyy'): string {
    if (!value) return '';
    try {
      const date = parse(value, formatFrom, new Date());
      return format(date, formatTo);
    } catch {
      return value;
    }
  }
}
