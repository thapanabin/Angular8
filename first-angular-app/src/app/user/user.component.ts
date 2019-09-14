import { Component, OnInit } from '@angular/core';
 import { User } from './user';
import { from } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user : User = {
  "id" : 890,
  "name" : "Java Expert",
  "email" : "nabinthapant@hotmail.com",
  "mobile" : "123456789"
}
  constructor() { }

  ngOnInit() {
  }

}
