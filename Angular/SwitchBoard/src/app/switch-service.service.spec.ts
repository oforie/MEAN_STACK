import { TestBed, inject } from '@angular/core/testing';

import { SwitchServiceService } from './switch-service.service';

describe('SwitchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchServiceService]
    });
  });

  it('should be created', inject([SwitchServiceService], (service: SwitchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
