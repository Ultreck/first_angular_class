import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-class',
  templateUrl: './structural-class.component.html',
  styleUrls: ['./structural-class.component.css']
})
export class StructuralClassComponent {
  gender:string="female"
    test(e:any){
   console.log(e.innerText)
    }
}
