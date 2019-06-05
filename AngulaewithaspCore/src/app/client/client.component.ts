import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private service: ServiceService) { }

  myForm = new FormGroup({

    name : new FormControl(''),
    age : new FormControl(''),
    job : new FormControl('')
  });

  ngOnInit() {

    this.service.sayHello('Client');
  }

  onSubmit() {

    console.log(this.myForm.value);
  }
}
