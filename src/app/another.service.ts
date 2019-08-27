import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherService {

  constructor() { }

  getAnswer(): string {
    return "another test string from a service";
  }
}
