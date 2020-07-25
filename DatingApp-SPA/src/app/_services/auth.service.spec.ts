/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { authService } from './auth.service';

describe('Service: auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [authService]
    });
  });

  it('should ...', inject([authService], (service: authService) => {
    expect(service).toBeTruthy();
  }));
});
