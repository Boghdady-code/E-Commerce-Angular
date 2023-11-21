import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  showCategories():Observable<any> {
    return this.httpClient.get ('https://fakestoreapi.com/products/categories');
  }

  getCategory(category:any):Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/products/category/${category}`)

  }



}
