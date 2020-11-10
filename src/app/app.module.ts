import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/auth/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { TransactionModule } from './pages/transaction/transaction.module';
import { MainSidebarModule } from './components/main-sidebar/main-sidebar.module';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      ReactiveFormsModule,
      TransactionModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthenticationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
