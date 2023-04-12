import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(public userData : UsersService, public user: UsersService){}
public allUsers : string[] = []


  ngOnInit(){
    this.user.getData().subscribe((res:any) =>{console.log(res);
    })
    console.log(this.allUsers);
    
  }



}
