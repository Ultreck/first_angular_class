import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public actRoute : ActivatedRoute){}

  ngOnInit() {
    console.log(this.actRoute.snapshot.params['id']);
    
  }

}
