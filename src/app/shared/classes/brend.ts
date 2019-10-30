import { IBrend } from '../interfaces/brend.interface';

export class Brend implements IBrend {
    constructor(
        public id: string,
        public brend: string,
        public link: string,
        public logoUrl: string,
        public text: string,
        public title: string
    ) { }
}
