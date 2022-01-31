// import { Injectable } from '@angular/core';
// import { Category } from '../_models/category.model';
// import { productService} from './product.service';
// // hna 3shan el categories de kza option gyle ml backend akhtar men
// // f khletha service
// @Injectable({
//   providedIn: 'root'
// })
// export class CategoryService {

//   categories: Category[] = [
//     {id: 1, name: 'Fruits'},
//     {id: 2, name: 'Vegetables'},
//     {id: 3, name: 'Dairy'},
//     {id: 4, name: 'Beverages'},
//     {id: 5, name: 'Bread'},
//     {id: 6, name: 'Meat'},
//     {id: 7, name: 'Frozen'},
//     {id: 8, name: 'Canned'},
//   ]

//   constructor() { }
//   getAllCategories(): Category[] {
//     return this.categories.splice(0);
//   }

//   getCategoryById(id: number): Category | undefined {
//     return this.categories.find(category => category.id === id);
//   }

//   add(){}
//   edit(){}
//   delete(){}

// }
import { Injectable } from '@angular/core';
import { Category } from '../_models/category.model';
import { productService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// hna 3shan el categories de kza option gyle ml backend akhtar men
// f khletha service
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categories: Category[] = [
  //   {id: 1, name: 'Frmuits'},
  //   {id: 2, name: 'Vegetables'},
  //   {id: 3, name: 'Dairy'},
  //   {id: 4, name: 'Beverages'},
  //   {id: 5, name: 'Bread'},
  //   {id: 6, name: 'Meat'},
  //   {id: 7, name: 'Frozen'},
  //   {id: 8, name: 'Canned'},
  // ]

  constructor(private httpClient:HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.baseUrl}category`);
  }

  getCategoryById(id: number):  Observable<Category> {
    return this.httpClient.get<Category>(`${environment.baseUrl}category/${id}`);
  }

  add(){}
  edit(){}
  delete(){}

}
