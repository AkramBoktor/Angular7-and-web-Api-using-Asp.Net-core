import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  sayHello(componentName: string) {
    console.log('Hello from component' + componentName);
  }
}
