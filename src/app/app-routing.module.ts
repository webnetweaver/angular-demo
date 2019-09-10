import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroductionComponent} from './components/root/introduction.component';
import {RestExampleComponent} from './components/RestAPI/restful.component';
import {TwoWayBindingComponent} from './components/TwoWayBinding/Binding.component'
import {NotFoundComponent} from './components/root/notfound.component'

const routes: Routes = [
  {path:"home", component:IntroductionComponent},
  {path:"restAPI", component:RestExampleComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"two-way-binding", component: TwoWayBindingComponent},
  {path:"**", component: NotFoundComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
