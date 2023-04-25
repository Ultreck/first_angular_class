import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-call',
  templateUrl: './contact-call.component.html',
  styleUrls: ['./contact-call.component.css']
})
export class ContactCallComponent {
constructor(public service : ContactsService,  public http : HttpClient){}
public allArray : any;
public displayArr : any;
ngOnInit(){
  this.service.navClassControl = "hidden"
  let index = JSON.parse(localStorage["_id"])
  console.log(this.service.clickedContact);
  this.http.get("/contact/data").subscribe((res) => {
 this.allArray = res
this.displayArr = this.allArray[index];
console.log(this.displayArr);

  })
}
}
