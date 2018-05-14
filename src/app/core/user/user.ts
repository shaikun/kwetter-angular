export class User {

    public id: number;
    public password: number;
    public email: string;
    public username: string;
    public location: string;
    public website: string;
    public biography: string;

    public fields = ['id', 'username', 'email', 'website', 'biography'];

    constructor() {

    }

}
