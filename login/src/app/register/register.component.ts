import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private user:UserService) {}

  doRegistration(values:any){
    console.warn(values)
    this.user.saveuser(values).subscribe((result)=>{
      console.warn(result)
    })
  }

  saveuser(){
    
  }
}
