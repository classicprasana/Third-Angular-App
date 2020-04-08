import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

   message :string ="prasanna KuMaR JeNa jena:";
   amount :number =500;
   activities :any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    let response=this.http.get("https://demo4690221.mockable.io/getActivities");
    response.subscribe( (data) => this.activities =data );
  }

}
