import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
constructor(public addData: ContactsService){}

ngOnInit(){
  // this.addData.saveContact().subscribe((res) =>{console.log(res);
  // })
}
}
