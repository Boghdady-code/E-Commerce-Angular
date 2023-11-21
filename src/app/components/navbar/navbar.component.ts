import { ProductService } from './../../services/product.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogged:boolean=false;
  cartCountNumber : number = 0;
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
      this.cartCountNumber = response;
    })

  }

}
