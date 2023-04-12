import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http : HttpClient) { }
  users :string [] = [
    'Shola',
    'Sade',
    'Fola'
  ]

  getData(){
      return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  deleteData(index:number){
  this.users.splice(index, 1)
  }
  editData(index:number, data : string){
  this.users.splice(index, 1, data)
  }
}
