export class Notification {
    constructor(
        public id: number,
        public codeOperation: number,
        public titre: string,
        public message: string,
        public created_at: Date,
    ) {

    }
 } 