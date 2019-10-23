import { TestBed } from '@angular/core/testing';

import { AuthenticaService } from './authentica.service';

describe('AuthenticaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticaService = TestBed.get(AuthenticaService);
    expect(service).toBeTruthy();
  });
});
