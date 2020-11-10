
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { AuthGuard} from '../auth/guards/auth.guard';
import { LoginGuard } from 'src/auth/guards/login.guard';


export const appRoutes: Routes = [
    { path: '', component: TransactionComponent, canActivate: [AuthGuard]},
    { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: '**', redirectTo: '' }

 
];


