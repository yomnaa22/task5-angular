import { Component } from '@angular/core';
//import { copyFileSync } from 'fs';
import { product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  addedProduct: product[]=[];  //member variable asawy el product el gy ml event bl product da
   
//   onItemAdd(product: product)
//   {
//     //array.filter((item, index) => array.indexOf(item) === index)

//    if (!this.addedProduct.includes(product)) 
//  {
//   this.addedProduct.push(product);
// }
//    //var add =0
//   else {
//    for ( var x=0; x<this.addedProduct.length;x++)
//    {
   
//     if (this.addedProduct[x]===product)
//     {
//          this.addedProduct[x].quantity+=1;
       
//          break;
//     }
    
//   }
//  }
 

// }
  


  // onItemDelete(product:product )
  // {


  //  var i = this.addedProduct.indexOf(product)
  //    this.addedProduct.splice(i,1)
  //    product.quantity=1;
   
  // }
}
