import { Component } from '@angular/core';
import { ChatAppService } from '../services/chat-app.service';

@Component({
  selector: 'app-chat-app2',
  templateUrl: './chat-app2.component.html',
  styleUrls: ['./chat-app2.component.css']
})
export class ChatApp2Component {
constructor(public data: ChatAppService){}

}
