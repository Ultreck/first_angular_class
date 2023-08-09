import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(public userServ: UsersService){}
public obj :{} = {};
public firstname :string = ""
public lastname :string = ""
public email :string = ""
public password :string = ""
ngOnInit(){
this.signUp();
}
signUp(){
  let {firstname, lastname, email, password} = this;
  this.obj = {firstname:this.firstname, lastname: this.lastname, email:this.email, password:this.password}
  this.userServ.signUp(this.obj).subscribe((res) => {
    console.log(res);
  })
}

}
