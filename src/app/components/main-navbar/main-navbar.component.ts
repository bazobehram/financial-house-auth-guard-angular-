import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  currentUser: any;


  constructor(private authenticationService: AuthenticationService) { 
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

}
