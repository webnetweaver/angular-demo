import { Component } from '@angular/core';

@Component({
  selector:'navigation',
  template:`<nav class="nav">    
    <ul>
      <li routerLink="/home" routerLinkActive="hilite">Introduction</li>
      <li>Two-Way Binding</li>
      <li>Form Validation</li>
      <li routerLink="/restAPI" routerLinkActive="hilite">Restful API</li>
      <li>Content Projection</li>
      <li>Templates and Containers</li>
      <li>Structural Directives</li>
      <li>Pipe Formatting</li>
    </ul>
  </nav>`,
  styleUrls:['./app.css']
})
export class NavigationComponent{}
