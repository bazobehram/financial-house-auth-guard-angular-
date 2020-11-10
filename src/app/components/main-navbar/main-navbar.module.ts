import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MainNavbarComponent],
  declarations: [MainNavbarComponent]
})
export class MainNavbarModule { }
