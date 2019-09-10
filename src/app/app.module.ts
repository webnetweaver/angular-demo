import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent, NewComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent} from './components/root/navigation.component';
import {HomeIconComponent} from './components/root/homeicon.component';
import { navigationCancelingError } from '@angular/router/src/shared';
import {IntroductionComponent} from './components/root/introduction.component';
import { RestExampleComponent} from './components/RestAPI/restful.component';
import {NotFoundComponent} from './components/root/notfound.component';
import {TwoWayBindingExampleComponent, TwoWayBindingChildComponent, TwoWayBindingParentComponent} from './components/TwoWayBinding/Binding.component';
import {TwoWayBindingComponent} from './components/TwoWayBinding/Binding.component';


@NgModule({
  declarations: [
    AppComponent,
	NewComponent,
	NavigationComponent,
  HomeIconComponent,
  IntroductionComponent,
  RestExampleComponent,
  TwoWayBindingExampleComponent,
  TwoWayBindingChildComponent,
  TwoWayBindingParentComponent,
  TwoWayBindingComponent,
  NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
