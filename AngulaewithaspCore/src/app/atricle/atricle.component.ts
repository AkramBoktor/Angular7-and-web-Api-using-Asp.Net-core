import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-atricle',
  templateUrl: './atricle.component.html',
  styleUrls: ['./atricle.component.scss']
})
export class AtricleComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
      this.service.sayHello('Article');
  }

}
