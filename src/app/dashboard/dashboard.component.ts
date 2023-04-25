import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public actRoute : ActivatedRoute){}
  public myName = "Adeniran Love";
  public students : {}= {
    firstname:'pepper',
    lastname : 'tomato'
  };
score : number = 34.3945
myDate = new Date();


  ngOnInit() {
    console.log(this.actRoute.snapshot.params['id']);
    
  }

}
