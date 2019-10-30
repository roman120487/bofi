import { IBrend } from '../interfaces/brend.interface';

export class Brend implements IBrend {
    constructor(
        public brend: string,
        public logoUrl: string,
        public text: string
    ) { }
}
