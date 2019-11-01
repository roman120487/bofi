import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    constructor(
    public id: number,
    public userName: string,
    public userEmail: string,
    public userPassword: string
    ) { }
}
