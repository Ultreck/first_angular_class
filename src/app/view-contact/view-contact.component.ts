import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
constructor(public view : ContactsService, public http : HttpClient){}
public allArray : any;
public displayArr : any;
ngOnInit(){
  this.view.navClassControl = "hidden"
  let index = JSON.parse(localStorage["_id"])
  console.log(this.view.clickedContact);
  this.http.get("/contact/data").subscribe((res) => {
 this.allArray = res
this.displayArr = this.allArray[index];
console.log(this.displayArr);

  })
}
}
