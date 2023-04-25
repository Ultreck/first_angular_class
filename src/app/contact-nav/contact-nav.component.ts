import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.css']
})
export class ContactNavComponent {
constructor(public service: ContactsService){}
}
