import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
