import { TestBed } from '@angular/core/testing';

import { paymentMethodService } from './payment-method.service';

describe('PaymentMethodService', () => {
  let service: paymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(paymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
