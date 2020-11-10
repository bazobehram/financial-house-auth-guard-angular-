import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { MainSidebarModule } from 'src/app/components/main-sidebar/main-sidebar.module';
import { MainNavbarModule } from 'src/app/components/main-navbar/main-navbar.module';
import { MainContentModule } from 'src/app/components/main-content/main-content.module';

@NgModule({
  imports: [
    CommonModule,
    MainSidebarModule,
    MainNavbarModule,
    MainContentModule
  ],
  exports: [TransactionComponent],
  declarations: [TransactionComponent
  ]
})
export class TransactionModule { }
