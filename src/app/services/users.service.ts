import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http : HttpClient) { }
  public baseUrl = environment.baseUrl;
  // users :string [] = [
  //   'Shola',
  //   'Sade',
  //   'Fola'
  // ]

  signUp(e:any){
   return  this.http.post(`${this.baseUrl}/reg.php`, e)
  }

  // getData(){
  //     return this.http.get("https://jsonplaceholder.typicode.com/users")
  // }
  // deleteData(index:number){
  // this.users.splice(index, 1)
  // }
  // editData(index:number, data : string){
  // this.users.splice(index, 1, data)
  // }
}
