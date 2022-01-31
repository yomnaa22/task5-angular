import { Injectable } from '@angular/core';
import { paymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class paymentMethodService {

  paymentMethods: paymentType[] = [
    {id: 1, name: 'Visa'},
    {id: 2, name: 'MasterCard'},
    {id: 3, name: 'American Express'},
    {id: 4, name: 'PayPal'},
    {id: 5, name: 'Cash'}
  ]
  constructor() { }
  getAllPaymentMethods(): paymentType[] {
    return this.paymentMethods.splice(0);
  }
}
