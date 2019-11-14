import { ICallbackUser } from '../interfaces/callback-user.interface';

export class CallbackUser implements ICallbackUser {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
        public text: string
    ) { }
}
