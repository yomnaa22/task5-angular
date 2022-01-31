import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  
 

@Output()
onItemAddedFromContainer : EventEmitter<product> = new EventEmitter<product>();
  constructor() { }

  ngOnInit(): void {
  }
onItemAdded(product:product)
{

this.onItemAddedFromContainer.emit(product)}
 }