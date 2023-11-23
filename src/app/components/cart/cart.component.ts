import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts:any[]=[];
  total:number=0;
  success:boolean=false;

  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.getCartProducts();

  }
  getCartProducts () {
    if (localStorage.getItem("cart") != null) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)

  }
  this.getTotal();
}

getTotal(){
  this.total=0;
  for (let x in this.cartProducts) {
    this.total +=  this.cartProducts[x].product.price * this.cartProducts[x].quantity;
  }

}

addAmount(index:number) {
  this.cartProducts[index].quantity++;
  this.getTotal();
  localStorage.setItem ("cart", JSON.stringify(this.cartProducts))

}

minsAmount(index:number) {
  this.cartProducts[index].quantity--;
  this.getTotal();
  localStorage.setItem ("cart", JSON.stringify(this.cartProducts))

}

detectChange() {
  localStorage.setItem ("cart", JSON.stringify(this.cartProducts))
  this.getTotal();
}

deleteProduct(index:any) {
  this.cartProducts.splice(index,1);
  localStorage.setItem ("cart", JSON.stringify(this.cartProducts))
  this.getTotal();





}

deleteAllCart(){
  this.cartProducts.splice(0, this.cartProducts.length);
  localStorage.setItem ("cart", JSON.stringify(this.cartProducts))
  this.getTotal();
}

orderNow() {
  let products = this.cartProducts.map(product=>{
  return  {productId:product.product.id , quantity: product.quantity}
  })
  let userID:any = JSON.parse (localStorage.getItem("user")!);
  let data = {
    userId: userID.id,
    date: new Date(),
    products:products
  }
  this.productService.SendCart(data).subscribe((response)=>{
    this.success=true;

    this.deleteAllCart();

  })
}



}
