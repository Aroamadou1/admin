import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byType'
})
export class ByTypePipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if (!value) return [];
    else if (!args) return value;
    else if(args === 'user') {
      return value.filter(
        item => item.type==='admin'||item.type==='vendeur'||item.type==='magasinier'||item.type==='porteur'||item.type==='fournisseur'
      );
    }
    else if(args==='marchandise') {
      return value.filter(
        item => item.type==='categorie'||item.type==='produit'
      );
    }
    else if(args==='sortie'){
      return value.filter(
        item => item.type==='sortie'||item.type==='vente'
      );
    } else return value.filter(
      item => item.type===args
    );
    
  }

}
