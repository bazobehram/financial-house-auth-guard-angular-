import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MainContentComponent],
  declarations: [MainContentComponent]
})
export class MainContentModule { }
