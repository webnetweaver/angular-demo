import { Component, OnInit, Input } from '@angular/core';
import{ TestServiceService} from '../test-service.service';

@Component({
  selector: 'app-interview2',
  templateUrl: './interview2.component.html',
  styleUrls: ['./interview2.component.css']
})
export class Interview2Component implements OnInit {
  serviceOutput: string;
  serviceOutput2: string;
  constructor(private testService: TestServiceService) { }

  ngOnInit() {
    this.serviceOutput = this.testService.getData();
    this.serviceOutput2 = this.testService.getData2();
  }

  setServiceValue(){
    this.testService.setValue(this.serviceOutput2);
  }

}
