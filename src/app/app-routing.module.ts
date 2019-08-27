import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InterviewComponent} from './interview/interview.component';
import {Interview2Component} from './interview2/interview2.component'
const routes: Routes = [
  {path: 'interview', component: InterviewComponent},
  {path: 'interview2', component: Interview2Component}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
