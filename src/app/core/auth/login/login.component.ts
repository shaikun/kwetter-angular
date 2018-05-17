import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;

    constructor(private authService: AuthService, private router: Router) {
        this.email    = '';
        this.password = '';
    }

    ngOnInit() {
    }

    login() {
        this.authService.login(this.email, this.password).subscribe(() => {
            this.router.navigate(['']);
        });
    }

}
