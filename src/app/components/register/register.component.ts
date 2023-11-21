import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(private router:Router, private AuthService:AuthService) {}

    RegisterForm : FormGroup = new FormGroup ({
    username:new FormControl (null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    name:new FormControl (null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl (null,[Validators.required, Validators.email]),
    // image:new FormControl (null, [Validators.required]),
    password:new FormControl (null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),

  });

    submitForm (formInfo:FormGroup) {
    this.AuthService.register(formInfo.value).subscribe((response)=> {
      console.log (response);
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
