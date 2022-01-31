import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cartIsOpen = false;

//@Input()
theAddedProduct : product[]=[]
total=0;


  constructor(private productService: productService) { }

  ngOnInit(): void {


   this.productService.itemAdded.subscribe(
     (next)=>{ 
       if(!this.theAddedProduct.includes(next)){
         next.quantity=1;
       this.theAddedProduct.push(next)


      for(let i=0; i<this.theAddedProduct.length;i++)
      {
        
          this.total+=this.theAddedProduct[i].price;
        
       
      }
      }
       
       else
       {
        for ( var x=0; x<this.theAddedProduct.length;x++)
        {
        
         if (this.theAddedProduct[x]===next)
         {
              this.theAddedProduct[x].quantity+=1;
              this.total= this.theAddedProduct[x].quantity*this.theAddedProduct[x].price;
            
              break;
         } 
       }

       }

     
      
     },
     (error)=>{},
     ()=>{}
   )
  
  
  }
 
 
  OndeleteItemPressed(product:product)
  {
    var i = this.theAddedProduct.indexOf(product)
    this.theAddedProduct.splice(i,1) 
    this.total-=product.quantity*product.price;
    // product.quantity=1
  }

}
