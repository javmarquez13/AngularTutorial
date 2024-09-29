import { TestBed } from '@angular/core/testing';

import { JsonPdfService } from './json-pdf.service';

describe('JsonPdfService', () => {
  let service: JsonPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
