import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Customer } from './signup.model';
import { login } from '../login/login.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customer: Customer = {
    CustomerId:0,
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    DateofBirth: new Date(),
    Address: '',
    PhoneNumber: '',
    SSN: '',
    EmploymentInformation: ''
  };

  errorMessage: string = '';
  constructor(
    private login:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  navigateToSignIn(){
    this.router.navigate(['login']);
  }
  onSubmit() {
    if (this.customer.Password !== this.customer.ConfirmPassword) {
      this.errorMessage = "Password and Confirm Password do not match.";
      return;
    }

    this.login.signup(this.customer).subscribe(
      response => {
        console.log('Signup Successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error occurred', error);
        this.errorMessage = 'Signup Failed. Please try again.';
      }
    );
  }

}
                    