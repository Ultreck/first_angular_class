import { Injectable } from '@angular/core';
import { contactInterface } from '../interfaceFolder/contactInterface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(public http: HttpClient, public router : Router) { }
public addContactClass : string = 'hidden';
public addBtnClass : string = ' flex';
public firstname : string = '';
public lastname : string = '';
public email : string = '';
public navClassControl : string = 'text';
public osType : string = 'Mobile';
public numberValue:string = "";
public callNumber:string = "";
public clickedContact:any ;
public displayFoundClass:string = "hidden";
public recentPageClass:string = "overflow-auto text-sm ";
public displayClass:string = "hidden";
public contact : string = this.numberValue;
public contactObj :{} = {};
public contactArr : any = [];
// public contactList : any= [];


ngOnInit(){
   return this.http.get("http://localhost:5000/data").subscribe((res) => {
      this.contactArr = res;
      console.log(this.contactArr);

    })
}
  addContact(){
this.addContactClass = "flex ";
this.addBtnClass = "hidden ";
console.log("Odebe");

}
  valueNum(num:any){
    let allNum = this.numberValue + num;
    this.numberValue = allNum;
    if(this.numberValue){
      this.displayFoundClass = " pt-4 grid  w-full  h-96"
      this.displayClass = "flex"
      this.recentPageClass = "hidden"
    }else{
      this.displayFoundClass = " hidden"
      this.recentPageClass = "text-sm"
      this.displayClass = 'hidden'
    }
    // console.log(allNum);
    
  }
  erazeFunction(){
    let deleteData =  this.numberValue.slice(0,-1);
    this.numberValue = deleteData;
    console.log(this.numberValue);
    if(!this.numberValue){
      this.displayFoundClass = " hidden"
      this.recentPageClass = "text-sm"
      this.displayClass = "hidden"
    }
    
  }
  hideKeyPad(){
    this.addContactClass = 'hidden'
    this.addBtnClass = "flex ";
    this.recentPageClass = "text-sm"
    this.displayFoundClass = " hidden"
  }


  saveContact(){
this.contactObj = {firstname:this.firstname, lastname:this.lastname, contact:this.contact, osType:this.osType}
console.log(this.contactObj);
 this.http.post("http://localhost:5000/register", this.contactObj).subscribe((res) => {console.log(res);
 this.router.navigate(["/"]);
 this.firstname = " ";
 this.lastname = " ";
 this.email = " ";
 });
// console.log(sent);
  }

  addContactFunct(){
    this.contact = this.numberValue;
    this.router.navigate(["add"])
  }
  endCallFunct(){
    this.router.navigate(["/"])
    this.navClassControl = "text";
  }
  callFunct(){
    this.callNumber = this.numberValue;
    if(this.numberValue){
      this.router.navigate(["call"])
      this.navClassControl = "hidden";
    }else{
      alert("Please enter number you want to dial.")
      setTimeout(this.endCallFunct, 5000)
    }
    
  }
  
  callFunct2(e:any){
    this.callNumber = e
    this.router.navigate(["call"])
    this.navClassControl = "hidden";
  }
  viewFunct(e:any, index:any){
    this.navClassControl = "hidden";
    this.clickedContact = e;
    localStorage.setItem("_id", JSON.stringify(index))
    this.router.navigate(["view"])
  }
  backFunct(){
    this.router.navigate(["con"])
    this.navClassControl = "text";
  }
 
  // getData(){
  //   return this.http.get("http://localhost:5000/data").subscribe((res) => {
      // this.contactArr = res;
      // console.log(this.contactArr);
      // console.log(res);

  //   })
  // }
}
