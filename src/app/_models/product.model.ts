import { Category } from "./category.model";
import { paymentType } from "./payment-type.model";
import { productLang } from "./product-lang-model";
import { Tag } from "./tags.model";
export interface product 

{ _id?:number, //optional mo2ktan
    data:productLang[],
     price:number,
     discount?:number,  //optional
     imagesUrls?:string[],
  category:Category[],
  paymentTypes:paymentType[]
     tags:Tag[],
     quantity:number
 
 }