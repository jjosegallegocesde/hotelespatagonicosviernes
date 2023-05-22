import { TestBed } from '@angular/core/testing';

import { ServiciosHabitacionService } from './servicios-habitacion.service';

describe('ServiciosHabitacionService', () => {
  let service: ServiciosHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
