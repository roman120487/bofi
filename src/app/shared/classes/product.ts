import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {
    constructor(
        public id: string,
        public title: string,
        public subscribe: string,
        public imgUrl: string,
        public category: string,
        public brandName: string,
        public power: string,
        public type: string
    ) { }
}
