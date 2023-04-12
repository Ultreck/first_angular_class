import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent {
  @Input() allItems : string[] = [];

  
  ngOnInit(){
    console.log(this.allItems);
    
  }

}
