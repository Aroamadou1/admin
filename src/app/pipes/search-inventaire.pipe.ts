import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInventaire'
})
export class SearchInventairePipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return [];
    if (!args) return value;
    return value.filter(
      item => item.motif.toLowerCase().includes(args.toLowerCase()) || item.created_at.includes(args)
    );
  }
}
