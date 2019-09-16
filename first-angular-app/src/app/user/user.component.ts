import { Component, OnInit } from '@angular/core';
 import { User } from './user';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
users:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp = this.http.get("http://jsonplaceholder.typicode.com/users");
    resp.subscribe((data)=>this.users=data);
  }

}
