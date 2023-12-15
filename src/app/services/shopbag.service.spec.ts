import { TestBed } from '@angular/core/testing';

import { ShopbagService } from './shopbag.service';

describe('ShopbagService', () => {
  let service: ShopbagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopbagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
