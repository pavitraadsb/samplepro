import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { login } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInRequest: login = {
    Email: '',
    Password: ''
  };
  errorMessage: string='';
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  navigateToSignUp(){
   this.router.navigate(['signup']);
  }
  onSignInSubmit() {
    this.auth.signin(this.signInRequest).subscribe(
      (response )=> {
        console.log('Sign-in Successful', response);
        this.router.navigate(['/home']); // Navigate to home page on successful login
      },
     ( error) => {
        console.error('Error occurred', error);
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
  
}
