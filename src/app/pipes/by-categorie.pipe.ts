import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byCategorie'
})
export class ByCategoriePipe implements PipeTransform {

  transform(value: any[], args: number): any[] {
    if (!value) return [];
    if (!args) return value;
    if (args===0) return value;
    return value.filter(
      item => item.categorie_id===args
    );
  }

}
