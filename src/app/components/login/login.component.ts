import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private authService: AuthService,
        private router: Router) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    ngOnInit(): void {
    }

    login() {
        const val = this.form.value;
        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe((data: any) => {
                    console.log("User is logged in with token:", data.token);
                    this.authService.setUserToken(data.token);
                    this.router.navigateByUrl('/home');
                });
        }
    }
}
