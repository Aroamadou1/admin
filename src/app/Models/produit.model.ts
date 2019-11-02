export class Produit {
    constructor(
        public id: number,
        public categorie_id: number,
        public nom: string,
        public quantiteStock: number,
        public quantiteReel: number,
        public quantiteCritique: number,
        public created_at: string,
        public updated_at: string,
        public deleted_at: string,
    ) {

    }
 } 