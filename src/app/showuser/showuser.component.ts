import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent {

  users:any;
  
  constructor(private userdata:UserService) {
    userdata.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });

     }
  }