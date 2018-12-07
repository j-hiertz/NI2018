import { TestBed } from '@angular/core/testing';

import { MeteoServicesService } from './meteo-services.service';

describe('MeteoServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeteoServicesService = TestBed.get(MeteoServicesService);
    expect(service).toBeTruthy();
  });
});
