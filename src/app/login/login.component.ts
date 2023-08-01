import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private user:UserService) {}

  dologin(values:any){
    console.warn(values);
  }
}
