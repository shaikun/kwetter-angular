import { User } from '../user/user';
import { ResourceService } from '../services/resource.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

@Injectable()
export class AuthService extends ResourceService {

    public user: User = new User();

    public isAuthenticated = false;

    public endpoint = 'auth';

    /**
     * Tries to login at DS
     *
     * @returns {any}
     * @param email
     * @param password
     */
    login(email: string, password: string) {
        const data = {email: email, password: password};
        return Observable.create(observer => {
            this.create(data).subscribe((res) => {
                this.isAuthenticated = true;
                localStorage.setItem('currentUser', email);
                localStorage.setItem('token', res['token']);
                observer.next(true);
                observer.complete();
            });
        });
    }


    /**
     * Reset everything, logout
     */
    logout(): void {
        this.resetCurrentUser();

    }

    /**
     * Resets the current user
     */
    private resetCurrentUser(): void {
        localStorage.removeItem('currentUser');
        this.user            = new User();
        this.isAuthenticated = false;

    }
}