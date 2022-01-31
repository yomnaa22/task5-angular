import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Event } from '@angular/router';
// import { profile } from 'console';
import { productService } from 'src/app/_services/product.service';
import { product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsArray !: product[];

  @Output()
  itemAddedFromProductList: EventEmitter<product>= new EventEmitter<product>()
  //productService = new productService();
  constructor(private productService: productService) { }

  ngOnInit(): void {
 // this.productsArray= this.productService.getAllProducts();
//  this.productsArray;
this.getAllProducts();



this.productService.itemDeleted.subscribe(
  (next)=>{ 
    var i = this.productsArray.indexOf(next)
    this.productsArray.splice(i,1)
   
  },
  (error)=>{},
  ()=>{}
)
   
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productsArray=res.product
  
      },
      (err)=>{
        console.log(err)
      }
    )
    

  }
  onItemAdded(prod : product)
  {
   
    this.itemAddedFromProductList.emit(prod)
  }

}
