import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  id:string="";
  image:string='';
  title:string='';
  category:string='';
  price:number=0;
  description:string='';
  loading:boolean=false;



  constructor(private ActivatedRoute:ActivatedRoute, private productService:ProductService) {}



  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.loading=true;
    this.productService.getaSingleProduct(this.id).subscribe((response)=>{
      this.loading=false;
      this.category=response.category;
      this.price=response.price;
      this.description=response.description;
      this.image=response.image;
      this.title=response.title;
      console.log(response);
    })


  }

}
