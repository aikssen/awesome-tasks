import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
