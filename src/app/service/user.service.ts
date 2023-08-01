import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { login } from '../datatype';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }

  
  saveuser(values:any){
    return this.http.post(this.url,values);
  }

  userlogin(values:login){
    console.warn(values);
    this.http.get(`http://localhost:3000/users?email=${values.email}&password=${values.password}`
    ,{observe:'response'}).subscribe((result:any)=>{
      console.warn(result)
    })

  }

  users(){
    return this.http.get(this.url);
  }
}
