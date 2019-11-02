import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEntree'
})
export class SearchEntreePipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return [];
    if (!args) return value;
    return value.filter(
      item => item.nom.toLowerCase().includes(args.toLowerCase()) || item.numero.toString().includes(args)
    );
  }

}
