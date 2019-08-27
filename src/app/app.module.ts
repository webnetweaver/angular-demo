import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, NewComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent} from './components/root/navigation.component';
import {HomeIconComponent} from './components/root/homeicon.component';
import { navigationCancelingError } from '@angular/router/src/shared';


@NgModule({
  declarations: [
    AppComponent,
	NewComponent,
	NavigationComponent,
  HomeIconComponent
  ],
  imports: [
    BrowserModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
