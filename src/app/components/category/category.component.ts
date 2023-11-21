import { CategoryService } from './../../services/category.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  categoriesArray:any[]=[];
@Input()  catLoading:boolean=false;
@Output() categoryProducts:EventEmitter<any> = new EventEmitter();
  constructor(private categoryService:CategoryService){}

searchCategory(eventInfo:any){
  let value = eventInfo.target.value;
  this.catLoading=true;
  this.categoryService.getCategory(value).subscribe((response)=> {
    this.catLoading=false;
    console.log (response);
    this.categoryProducts.emit(response);
  })


}






  ngOnInit(): void {

    this.categoryService.showCategories().subscribe((response)=>{
      this.categoriesArray = response;
    })

  }

}
