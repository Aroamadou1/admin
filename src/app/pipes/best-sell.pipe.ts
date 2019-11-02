import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestSell'
})
export class BestSellPipe implements PipeTransform {

  transform(value: any[]): any {
    if (!value) return {nom:'', quantite:''};
    if (value.length===0) return {nom:'', quantite:''};
    return value.reduce(function(prev, current) {
      return (prev.quantite > current.quantite) ? prev : current
  });  
  }

}
