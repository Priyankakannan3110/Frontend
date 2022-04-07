import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  loginForm!: FormGroup;
  constructor(private loginService:LoginService,private http:HttpClient) { }

  userLogin(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      alert("Successfully user is loggedin")
    },error=>alert("Sorry user not loggedin"));
    }
  

  ngOnInit(): void {
    this.loginForm= new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(5)])
  });
  }
  get email()
   {
     return this.loginForm.get('email');
   }
   get password()
   {
     return this.loginForm.get('password');
   }


}
