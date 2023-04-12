import { Component } from '@angular/core';
import { ChatAppService } from '../services/chat-app.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent {

  constructor(public data: ChatAppService){}

}
