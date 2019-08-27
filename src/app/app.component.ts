import { Component, OnInit } from '@angular/core';
import { AnotherService} from './another.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
}

@Component({
	selector: 'new-element',
	template:'<p>A new element3</p><p>And here is the answer {{anotherDisplay}}'
})
export class NewComponent implements OnInit{

  anotherDisplay: string;
  constructor(private another: AnotherService){};

  ngOnInit(){
    this.anotherDisplay = this.another.getAnswer();
  }

  
}