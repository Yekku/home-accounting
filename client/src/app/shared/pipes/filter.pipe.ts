import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'wfmFilter', standalone: true })
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: string, field: string): any[] {
    if (!items || !value) return items;
    return items.filter((item) => {
      const fieldValue = String(item[field] || '');
      return fieldValue.toLowerCase().includes(value.toLowerCase());
    });
  }
}
