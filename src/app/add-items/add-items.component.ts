import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  @Output() sendItem = new EventEmitter()
public item = "";

//  addItem(){

//  }
}
