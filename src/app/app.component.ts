import { Component } from '@angular/core';
import {LocalService} from './local.service'
// import * as te from "tw-elements";

interface blogType {
  title: string,
  more:string,
  time: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  allItems: string[] = [];
  blogArr: blogType[] = [];

  public newObj = {}
  

  addItem(item:string){
    this.allItems.push(item)
    console.log(this.allItems);
    
  }
  addBlog(blog:blogType){
    this.blogArr.push(blog)
    console.log(this.blogArr);
    
  }
  editBlog(blog:any){
 
 
    
  }
  updateBlog(){
  
    
  }
}
