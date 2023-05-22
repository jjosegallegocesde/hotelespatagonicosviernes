import { TestBed } from '@angular/core/testing';

import { ServiciosReservasService } from './servicios-reservas.service';

describe('ServiciosReservasService', () => {
  let service: ServiciosReservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosReservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
