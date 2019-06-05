import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Category } from '../Classes/Category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  /* deal whith an object from cateogry Class */
   cat: Category = new Category(1 , 'Mobile');

  constructor(private service: ServiceService) { }

  ngOnInit() {

    this.service.sayHello('Category');
  }
  
  /*form action*/
  onSubmit(){

    console.log(this.cat);
  }
}
