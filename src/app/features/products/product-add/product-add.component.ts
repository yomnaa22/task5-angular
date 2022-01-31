
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { paymentType } from 'src/app/_models/payment-type.model';
import { product } from 'src/app/_models/product.model';
import { Tag } from 'src/app/_models/tags.model';
import { CategoryService } from 'src/app/_services/category.service';
import { paymentMethodService } from 'src/app/_services/payment-method.service';
import { TagsService } from 'src/app/_services/tags.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  categories!:Category[];
  def = null;
  paymentTypes!: paymentType[];
  product = {} as product;
  tagsArray!:Tag[]
  constructor(private categoryService:CategoryService,private paymentMethodService: paymentMethodService,private tagsService:TagsService, private router: Router) {}

  ngOnInit(): void {
   
    this.paymentTypes = this.paymentMethodService.getAllPaymentMethods();
   // this.categories=this.categoryService.getAllCategories();
    
    console.log(this.paymentTypes);
    this.tagsArray = this.getAllTags();


 
    
    this.categories=this.categoryService.getAllCategories();
    console.log(this.categories);
   

  }

  // getAllCategories(): Category[] {
  //   return this.categoryService.getAllCategories();
  // }
 
  // getAllPaymentTypes(): paymentType[] {
  //   return this.paymentMethodService.getAllPaymentMethods();
  // }
getAllTags()
{
  return this.tagsService.getAllTags();
}
  
  onCheckBoxChanged(i: number){
    console.log(this.paymentTypes[i]);

  }

  onFormSubmit(form: any): void { 
    this.router.navigate(['/product','details','6010736031e4fe0015d3b970'])
    console.log(form);
   
  }
}
