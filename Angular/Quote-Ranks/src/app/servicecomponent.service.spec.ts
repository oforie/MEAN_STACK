import { TestBed, inject } from '@angular/core/testing';

import { ServicecomponentService } from './servicecomponent.service';

describe('ServicecomponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicecomponentService]
    });
  });

  it('should be created', inject([ServicecomponentService], (service: ServicecomponentService) => {
    expect(service).toBeTruthy();
  }));
});
