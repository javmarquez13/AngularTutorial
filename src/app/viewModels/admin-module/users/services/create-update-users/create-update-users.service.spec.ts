import { TestBed } from '@angular/core/testing';

import { CreateUpdateUsersService } from './create-update-users.service';

describe('CreateUpdateUsersService', () => {
  let service: CreateUpdateUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUpdateUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
