import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartProducts:any[]=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
  isProductExist= new BehaviorSubject<boolean>(false);
  cartCountBehaviourSubject = new BehaviorSubject<any>([]);


  constructor(private httpClient:HttpClient) {

  }

  showProducts ():Observable<any> {

  return  this.httpClient.get('https://fakestoreapi.com/products');
  }

saveProduct({product, quantity}:any):any {
  if (localStorage.getItem("cart") != null) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find (item => item.product.id == product.id);
      if (exist != null) {
      // alert("product is already added");



        this.isProductExist.next(true);


      }else{
        this.isProductExist.next(false);

        this.cartProducts.push({product,quantity});

        localStorage.setItem ("cart", JSON.stringify(this.cartProducts))


      }


    } else {
      this.cartProducts.push({product,quantity});
      localStorage.setItem ("cart", JSON.stringify(this.cartProducts))



    }

    this.cartCountBehaviourSubject.next(this.cartProducts.length);






  }

  getaSingleProduct(id:string):Observable<any>{
  return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }

  cartCount():Observable<any>{
        this.cartCountBehaviourSubject.next(this.cartProducts.length);




    return this.cartCountBehaviourSubject.asObservable();
  }

   SendCart(data:any):Observable<any>{
    return this.httpClient.post('https://fakestoreapi.com/carts',data);


  }



}


