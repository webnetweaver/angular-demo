import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, NewComponent } from './app.component';
import { InterviewComponent } from './interview/interview.component';
import { AppRoutingModule } from './app-routing.module';
import { Interview2Component } from './interview2/interview2.component';
import { NavigationComponent} from './components/root/navigation.component';
import {HomeIconComponent} from './components/root/homeicon.component';
import { navigationCancelingError } from '@angular/router/src/shared';


@NgModule({
  declarations: [
    AppComponent,
	NewComponent,
	InterviewComponent,
  Interview2Component,
  NavigationComponent,
  HomeIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
