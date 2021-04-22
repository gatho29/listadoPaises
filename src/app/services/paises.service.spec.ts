import { TestBed } from '@angular/core/testing';

import { ListadoPaisesService } from './paises.service';

describe('ListadoPaisesService', () => {
  let service: ListadoPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
