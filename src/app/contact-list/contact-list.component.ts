import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
 constructor(public dataList: ContactsService, public http: HttpClient){}
 public contactList : any= [];
//  public firstname = ''
 public firstLetterClass : string =  ' ';

 ngOnInit(){
  this.contactList = this.http.get("/contact/data").subscribe((res) => {
    this.contactList = res;
//  this.contactList.map((val:any, index:any) =>{ 
//   if( val.firstname){
//     console.log( val.firstname);
//       this.firstLetterClass = "text-white font-bold text-lg bg-red-600 text-center rounded-full w- mx-auto w-10 h-10 pt-2";
    

//   }
//   // if(val.firstname.substr(0, 1) === "E" || val.firstname.slice(0, 1) === "e"){
//   //   this.firstLetterClass = "text-white font-bold text-lg bg-red-600 text-center rounded-full w- mx-auto w-10 h-10 pt-2";
//   // }else if(val.firstname.substr(0,1) ==="O" || val.firstname.slice(0,1) ==="o"){
//   //   this.firstLetterClass = "text-white font-bold text-lg bg-blue-600 text-center rounded-full w- mx-auto w-10 h-10 pt-2";

//   // }
//   // val.firstname.slice(0, 1)
// });

 

  

    // this.contactList.map((val:any, index:any) => {console.log(val.firstname);
    // })
    
  })


  
  // this.contactList = this.dataList.getData();
  // console.log(this.contactList);
  
  
 }


}
