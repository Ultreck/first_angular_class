import { Injectable } from '@angular/core';
import { blogType } from '../interfaceFolder/blogInterface';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  // coming from blogs
  public title:string = "";
  public more:string = "";
  public date:Date = new Date();
  public time:string = this.date.toLocaleString().substring(10);
  public blogArray:blogType[] = [];
  public blogObj = {};

ngOnInit(){
}


addBlogs(){
  if(!localStorage.getItem("blogData")){
    localStorage.setItem("blogData", JSON.stringify(this.blogArray));
  }else{
    this.blogArray = JSON.parse(localStorage["blogData"])
  }
  let obj = {title:this.title, more:this.more, time:this.time}
  this.blogArray.push(obj)
  localStorage.setItem("blogData", JSON.stringify(this.blogArray));
    console.log(this.blogArray);
    this.title = '';
    this.more = '';
      // this.time = this.date.toLocaleString().substring(10);
    
    }


}

