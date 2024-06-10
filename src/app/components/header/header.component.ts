import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authServices:AuthService) { }

  ngOnInit(): void {
  }
  isAuthenticated=false;
  logout(){
    this.isAuthenticated=false;
  }
  onLogin(){
    this.isAuthenticated=true;
  }
}
