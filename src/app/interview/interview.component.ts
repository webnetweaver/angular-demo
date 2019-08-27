import { Component, OnInit, Input } from '@angular/core';
import {TestServiceService} from '../test-service.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  serviceOutput: string;
  serviceOutput2: string;
  @Input() testInput: number;
  constructor(private testService: TestServiceService) { }

  ngOnInit() {
    this.serviceOutput = this.testService.getData();
    this.serviceOutput2 = this.testService.getData2();
  }

}
