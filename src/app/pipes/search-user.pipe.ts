import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return [];
    if (!args) return value;
    return value.filter(
      item => item.nom.toLowerCase().includes(args.toLowerCase())  || item.prenom.toLowerCase().includes( args.toLowerCase())
    );
  }

}
