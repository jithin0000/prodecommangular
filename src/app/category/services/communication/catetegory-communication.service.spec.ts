import { TestBed } from '@angular/core/testing';

import { CatetegoryCommunicationService } from './catetegory-communication.service';

describe('CatetegoryCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatetegoryCommunicationService = TestBed.get(CatetegoryCommunicationService);
    expect(service).toBeTruthy();
  });
});
