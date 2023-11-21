import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private AuthService:AuthService) {}

    LoginForm:FormGroup = new FormGroup ({
    username:new FormControl (null,[Validators.required]),
    password:new FormControl (null,[Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)])
  });

      submitLoginForm(loginInfo:FormGroup) {
    this.AuthService.login(loginInfo.value).subscribe((response)=> {
      if (response.token != null) {
        localStorage.setItem ('userToken', response.token);
        localStorage.setItem ('user', JSON.stringify(response.user));
        this.router.navigate(['/home']);
        this.AuthService.isUserLogged();


      }


    })



  }


  ngOnInit(): void {
  }

}
