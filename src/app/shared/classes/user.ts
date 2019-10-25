import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string
    ) { }
}
