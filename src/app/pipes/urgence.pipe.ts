import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urgence'
})
export class UrgencePipe implements PipeTransform {

  transform(value: any[]): any {
    if (!value) return [];
    return value.filter(
      item => item.urgence===1
    );
  }

}
