import { ProductService } from './../../services/product.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogged:boolean=false;
  cartCountNumber : any = localStorage.getItem('cartCount');
  @ViewChild ('burger') burger!:ElementRef;
  @ViewChild ('line1') line1!:ElementRef;
  @ViewChild ('line2') line2!:ElementRef;
  @ViewChild ('line3') line3!:ElementRef;




  constructor(private AuthService:AuthService, private productService:ProductService) { }


  logout(){
    this.AuthService.logout();
    this.AuthService.isUserLogged();
  }



  ngOnInit(): void {
    this.AuthService.isUserLoggedSubject().subscribe(status=>{
      this.isUserLogged=status;

    })

    this.getCount();

  }

  getCount() {
    this.productService.cartCount().subscribe(response => {
      console.log(response);
      localStorage.setItem('cartCount', JSON.stringify(response));
      this.cartCountNumber=Number(localStorage.getItem('cartCount'));

    })

  }

  toggleMenu(){
    this.burger.nativeElement.classList.toggle('active-burger');
    this.line1.nativeElement.classList.toggle('first');
    this.line2.nativeElement.classList.toggle('second');
    this.line3.nativeElement.classList.toggle('third');
  }

}
