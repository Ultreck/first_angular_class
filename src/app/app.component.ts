import { Component } from '@angular/core';
import {LocalService} from './local.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localStore: LocalService) { }

  title = 'angularclass';
  public name = "John Deo";
  public firstname:String = "";
  public lastname:String = "";
  public age:String = "";
  public password:String = "";
  public email:String = "";
  public data:Object = {};
  public student:Array< Object> = [];
  public localData:any;
  public userData = "";

  // private num = 1;
  // protected num2 = 2;
  // publick is known as access modifier;
  public num:number = 5;
  // public student:Array< Object> = [
  //   {name:"Janet", dept:"Siftware", age:12}
  // ];
  showName = () =>{
    alert(this.name)
  }
  getData = () =>{
    console.log(this
      .userData);
    
  }
  addUsers = () =>{
    this.data = {firstname:this.firstname, lastname:this.lastname, age:this.age,  password:this.password,  email:this.email};
    this.student.push(this.data);
    this.localStore.saveData('anData', this.student);
  }

  
  getUsers = () =>{
    this.localData =  this.localStore.getData("ngData");
    console.log( this.localData);
  }

  // onPageLoad = () =>{
  //   let dat =localStorage.getItem("ngData")
  //   console.log(dat);
  //   alert(dat)
  // }

}
