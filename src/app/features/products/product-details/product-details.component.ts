import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category.model';

import { product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { productService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  buttonActive = true;
  product!:product
  relatedProductsArray!:product[]
  categories!:Category[]
  constructor(private activatedRoute: ActivatedRoute, private productService:productService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    // const id=this.activatedRoute.snapshot.params['productId']
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params);
        
        const id = params['productId'];
        if(id){
         this.getProductById(id);
         this.getAllProducts();
        
       }
      }
    )
    
      
    this.categories=this.categoryService.getAllCategories();
    
  }

  getProductById(id:string){
    this.productService.getProductById(id).subscribe(
      (res)=>{
        this.product=res
      }
    )
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.relatedProductsArray = res.product.splice(0,6);
      }
    )
  }
 

  onAddToCartPressed()
  {
    console.log("productitem added")
    this.productService.itemAdded.emit(this.product)
  //this.productService.addItemToCart(this.productItem)
  }

 riseQuantity()
 {
   
 }
}
