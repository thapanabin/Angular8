import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : any =[];
  constructor() { 
    this.products = [
      {
        "id": 111,
        "name": "Iphone",
        "brand": "Apple",
        "price":1100
      },
      {
        "id": 222,
        "name": "Samsung Note 10",
        "brand": "Samsung",
        "price":1200
      },
      {
        "id": 333,
        "name": "Google Pixel",
        "brand": "Google",
        "price":300
      }
    ]
  }

  ngOnInit() {
  }

}
