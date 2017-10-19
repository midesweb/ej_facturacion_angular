import { TestBed, inject } from '@angular/core/testing';

import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientesService]
    });
  });

  it('should be created', inject([ClientesService], (service: ClientesService) => {
    expect(service).toBeTruthy();
  }));
});
