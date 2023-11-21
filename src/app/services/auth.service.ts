import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedSubject:BehaviorSubject<boolean>;

  constructor(private httpClient:HttpClient, private router:Router) {
    this.isloggedSubject=new BehaviorSubject<boolean>(this.isUserLogged());
   }


    login(userData:object):Observable<any> {
    this.isloggedSubject.next(true);
    return this.httpClient.post('https://tarmeezacademy.com/api/v1/login', userData)

  }

  logout(){

    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
    this.isloggedSubject.next(false);
  }

    register (userData:object):Observable<any> {
  this.isloggedSubject.next(true);
  return this.httpClient.post ('https://tarmeezacademy.com/api/v1/register', userData)

  }

  isUserLogged():boolean{
    if (localStorage.getItem("userToken") != null) {
      return true;
    }else {
      return false;
    }

  }

  isUserLoggedSubject():Observable<boolean>{
    return this.isloggedSubject.asObservable();
  }




}
