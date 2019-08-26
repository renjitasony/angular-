import { TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';

import { ProducthandleService } from './producthandle.service';

describe('ProducthandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducthandleService = TestBed.get(ProducthandleService);
    expect(service).toBeTruthy();
  });
});
