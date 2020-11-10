import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  currentUser: any;
  constructor(private authenticationService: AuthenticationService) {
   this.currentUser = this.authenticationService.currentUserValue;
   console.log(this.currentUser);
   }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
  }

}
