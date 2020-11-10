import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    userModel = new User()
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        
        return this.http.get<any>('https://next.json-generator.com/api/json/get/N1TiV2mKK')
            .pipe(map(user => {
                console.log(user.Token);
                if (user.Token) {
                    this.userModel.username = email;
                    this.userModel.token = user.Token;
                    localStorage.setItem('currentUser', JSON.stringify(this.userModel));
                    console.log(localStorage.getItem('currentUser'));
                    this.currentUserSubject.next(this.userModel);
                }

                return user;
            }));

           
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);


    }
}