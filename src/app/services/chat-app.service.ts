import { Injectable } from '@angular/core';
import { chatType } from '../interfaceFolder/chatInterface';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {

  constructor() { }
  public message:string = ""
  public message2:string = ""
  public messageArray: string[] = [];

  sendMessage(){
  this.messageArray.push(this.message)
    console.log(this.messageArray);
    this.message = " ";
    
  }
  sendMessage2(){
  this.messageArray.push(this.message2)
    console.log(this.messageArray);
    this.message2 = " ";
    
  }
}
