import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private router : Router){}
  logbtn(){
    this.router.navigate(['/','login']);
  }
  regbtn(){
    this.router.navigate(['/','register']);
  }
  showbtn(){
    this.router.navigate(['/','showuser']);
  }
}