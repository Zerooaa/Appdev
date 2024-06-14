import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
    
    }
)
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }
    ngOnInit() {
    }

    onLogin(loginForm: NgForm){
        console.log(loginForm.value)
        const token = this.authService.authUser(loginForm.value);
        if(token){
            localStorage.setItem('token', token.userName);
            this.alertify.success('Login Successful');
            this.router.navigate(['/homePage']);
        }
        else{
            this.alertify.error('Login Failed');
        }
    }
}