import { Component } from '@angular/core';


interface Student {
  firstname:string,
  lastname:string,
  email:string,
  password:string,
  age:string,
}
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  public firstname:string = "";
  public lastname:string = "";
  public age:string = "";
  public password:string = "";
  public email:string = "";
  allStudents: Student[] = []

 ngOnInit(){
  if(localStorage.getItem("student")){
    this.allStudents = JSON.parse(localStorage["student"])
    console.log(this.allStudents);
    
  }else{
    this.allStudents = [];
  }
 }

 register(){
  let {firstname, lastname, email, password, age} = this;
  console.log(this.firstname, this.lastname, this.email, this.password, this.age);
  this.allStudents.push({firstname, lastname, email, password, age})
  
  // localStorage["student"] = JSON.stringify(this.allStudents)
  localStorage.setItem("student", JSON.stringify(this.allStudents))
  console.log("Working fine");
 }

 editFunction(value:object, index:number){}
 deleteFunction(index:number){}
}
