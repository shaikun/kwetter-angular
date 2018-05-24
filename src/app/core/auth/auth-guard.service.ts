import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    // constructor(private authService: AuthService, private router: Router) {
    // }

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.checkLogin()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

    /**
     * Checks if the user is actually authenticated
     *
     * @returns bool
     */
    checkLogin(): (Observable<boolean> | boolean) {
        const token = localStorage.getItem('token');
        return (token !== null);
        // // If we already authenticated don't do it again,
        // // You can comment the next 3 lines to fetch data from DS on every page navigation
        // if (this.authService.isAuthenticated) {
        //
        //     return true;
        //
        // }
        //
        // let user = localStorage.getItem('user');
        // if (user) {
        //
        //     user = JSON.parse(user);
        //
        //     // When we have found a user in the cache we will have to re-login on the Pepper API,
        //     // When logged in, retry to do stuff with the API
        //     return this.authService.login(user['username'], user['password']);
        //
        // }
        //
        // // Navigate to the login page with extras
        // this.router.navigate(['/login']);
        // return false;
    }

}
