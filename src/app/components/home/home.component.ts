import { ProductService } from './../../services/product.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Element } from '@angular/compiler';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  productsArray:any[]=[];
  receievedData:any[]=[];
  loading:boolean=false;
  isExist:boolean=false;
  @ViewChild('quantity') inputCountField!:ElementRef;

  constructor(private productService:ProductService) {

  }

    getProductData () {
      this.loading=true;
      this.productService.showProducts().subscribe((response)=>{
      this.loading=false;
      console.log (response);
      this.productsArray=response;
    })

  }

  saveProduct({product, quantity}:any):any {
    this.productService.saveProduct({product, quantity});


  }





  getCategory(eventInfo:any){

    if(eventInfo == false) {
      this.loading;

      this.getProductData();
  } else {
    this.loading;

    this.productsArray=eventInfo;
  }

  }






  ngOnInit(): void {
    this.getProductData();
    this.productService.isProductExist.subscribe(response => {
          this.isExist=response;

       setTimeout(() => {
      this.isExist=false;

    }, 10000);

    })




  }

}
