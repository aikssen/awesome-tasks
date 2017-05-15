import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { config } from './app.configuration';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { HomeModule } from '../modules/home/home.module';

import {GoogleApiModule} from 'ng-gapi';
import {GapiUserService} from '../shared/services/gapiUser.service';
import {TaskService} from '../shared/services/task.service';


@NgModule({
  imports: [ // angular and custom module imports
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing, // app routes
    HomeModule,
    GoogleApiModule.setConfig(config) // GAPI configuration loading
  ],
  exports: [
    RouterModule
  ],
  declarations: [ // custom components imports
    AppComponent
  ],
  bootstrap: [ // app init/bootstraping
    AppComponent
  ],
  providers: [
    GapiUserService, // google user authentication
    TaskService, // Google Task API
  ]
})
export class AppModule { }
