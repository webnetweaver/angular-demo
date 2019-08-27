import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  serviceValue: string;
  constructor() {this.serviceValue = "starting value"; }

  getData(): string {
    return "a simple test string";
  }

  getData2(): string{
    return this.serviceValue;
  }

  setValue(val: string): void{
    this.serviceValue = val;
  }
}
