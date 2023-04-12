import { Component } from '@angular/core';
import { LocalService } from '../local.service';

type Students = (string | number | boolean)

interface StudentTwo  {
firsname: string,
lastname: string,
email: string,
password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // nullibility
  doSmth(age:number, name?: string){}

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
  public filtered:any;
  public userData = "";
  public buttonStyleOne = "text bg-blue-500 hover:bg-blue-600 py-1 text-white";
  public buttonStyleTwo = "text bg-green-500 hover:bg-green-600 py-1 text-white hidden";
  public buttonText = "Submit";
  public editIndex:any;
  public newObj:any;


  ngOnInit(){
    if(!localStorage.getItem("student")){
      this.data = JSON.parse(localStorage["student"])
    }else{
      this.data = [];
    }
    this.getUsers()};

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
    console.log(this.userData);
  }


  addUsers = () =>{
    this.data = {firstname:this.firstname, lastname:this.lastname, age:this.age,  password:this.password,  email:this.email};
    this.student.push(this.data);
    this.localStore.saveData('anData', this.student);
    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.age = ""
    this.password = " "
    this.getUsers()
  }

  
  getUsers() {
    console.log("Working fine");
    this.localData =  this.localStore.getData("anData");
    console.log( this.localData);
  }
  
  editFunction = (e:any, i:any) =>{
    this.firstname = e.firstname;
    this.lastname = e.lastname;
    this.email = e.email;
    this.age = e.age;
    this.password = e.password;
    this.editIndex = i;
    this.buttonStyleOne = "text bg-blue-500 hover:bg-blue-600 py-1 text-white hidden";
    this.buttonStyleTwo = "text bg-green-500 hover:bg-green-600 py-1 text-white"
    console.log(this.editIndex);
    
  }
  
  updateChanges() {
    this.newObj = {firstname:this.firstname, lastname:this.lastname, email:this.email, age:this.age, password:this.password};
    this.localData[this.editIndex] = this.newObj;
    this.localStore.saveData('anData', this.localData);
    this.buttonStyleOne = "text bg-blue-500 hover:bg-blue-600 py-1 text-white";
    this.buttonStyleTwo = "text bg-green-500 hover:bg-green-600 py-1 text-white hidden"
    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.age = ""
    this.password = " "
  }

  deleteFunction = (e:any) =>{
    this.filtered = this.localData.filter((val:any, index:any) => (index !== e))
   this.localStore.saveData('anData', this.filtered);
    console.log(this.filtered);
    console.log(e);
    this.getUsers()
  }

}
