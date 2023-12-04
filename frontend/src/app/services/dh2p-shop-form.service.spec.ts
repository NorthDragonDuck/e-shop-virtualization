import { TestBed } from '@angular/core/testing';

import { Dh2pShopFormService } from './dh2p-shop-form.service';

describe('Dh2pShopFormService', () => {
  let service: Dh2pShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dh2pShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
