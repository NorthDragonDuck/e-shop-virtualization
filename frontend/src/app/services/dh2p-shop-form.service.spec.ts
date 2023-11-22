import { TestBed } from '@angular/core/testing';

import { Dh2pShopFormService } from './dh2p-shop-form.service';

describe('Luv2ShopFormService', () => {
  let service: Dh2pShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dh2pShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
