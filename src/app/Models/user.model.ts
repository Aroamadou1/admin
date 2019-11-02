export class User {
    constructor(
        public id: number,       
        public nom: string,
        public contact: string,
        public created_at: string,
        public updated_at: string,
        public deleted_at: string,
        public prenom?: string
    ) {

    }
} 
