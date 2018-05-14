import { User } from '../user/user';

export class Kweet {
    id: number;
    user: User;
    user_id: number;
    text: string;
    date: string;

    public fields = ['message'];

    constructor() {
    }
}
