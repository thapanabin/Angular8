import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return [
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
  constructor() {
    
}
}
