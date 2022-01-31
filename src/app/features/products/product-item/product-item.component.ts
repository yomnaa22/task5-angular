import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
 
  @Input()
  productItem !: product; 
  // @Output()
  //  itemAdded: EventEmitter<product> = new EventEmitter<product>();
   //productService = new productService();
   constructor(private productService: productService) { }

  ngOnInit(): void {
  
   }


  onAddToCartPressed()
{
  console.log("productitem added")
  this.productService.itemAdded.emit(this.productItem)
//this.productService.addItemToCart(this.productItem)
}
ondeleteFromCartPressed()
  {
    console.log("productitem added")
    this.productService.itemDeleted.emit(this.productItem)
  //this.productService.addItemToCart(this.productItem)
  }

}
