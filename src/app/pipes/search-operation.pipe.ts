import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOperation'
})
export class SearchOperationPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return [];
    if (!args) return value;
    return value.filter(
      item => item.nomClient.toLowerCase().includes(args.toLowerCase()) || item.numero.toString().includes(args)
    );
  }

}
