import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-call-log',
  templateUrl: './call-log.component.html',
  styleUrls: ['./call-log.component.css']
})
export class CallLogComponent {
constructor(public callLog : ContactsService){}
}
