import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
   let response =  this.http.get("http://demo4690221.mockable.io/getActivities");
   response.subscribe((data)=>this.activities=data);
    
  }

}
