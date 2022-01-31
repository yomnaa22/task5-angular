

import { EventEmitter, Injectable } from "@angular/core";
import { product } from "../_models/product.model";
import { HttpClient } from "@angular/common/http";
//import { url } from "inspector";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root',

})
export class productService {

    
    itemAdded: EventEmitter<any>= new EventEmitter<any>();
    itemDeleted: EventEmitter<any>= new EventEmitter<any>();
 
    


  
 cartArray: product[]=[]   
constructor(private httpClient: HttpClient){}

getAllProducts(): Observable<{product:product[], numberOfProducts:number, quantity:number}>{
   return this.httpClient.get<{product:product[], numberOfProducts:number, quantity:number}>(`${environment.baseUrl}product`,)
  

    
}

getProductById(id: string): Observable<product> {
  return this.httpClient.get<product>(environment.baseUrl+'product/'+id)
}

// addProduct(product:product): void{
//     this.productsArray.push(product)
// }

// deleteProduct(id:number)
// {
  

//     this.productsArray.filter(item=> item._id!=id)
// }

// addItemToCart(product:product) :product[]
// {
//     //return [...this.cartArray, product]
//     this.cartArray.push(product)
//     const result = this.cartArray;
//     console.log(result)
//     return result;
// }

// deleteItemFromCart(product:product)
// {
//     var i = this.cartArray.indexOf(product)
//     this.cartArray.splice(i,1)
//     product.quantity=1;
//     console.log("..")
// }
}