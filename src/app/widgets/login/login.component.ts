import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'abo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading=false;
  submitted=false;
  loginForm:any;
  dashboard:any
  
  constructor() { }

  ngOnInit(): void {  
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }
  onSubmit():void{
    this.submitted = true;
  }
  get f() { return this.loginForm.controls; }
}
