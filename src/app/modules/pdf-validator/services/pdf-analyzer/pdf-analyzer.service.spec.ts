import { TestBed } from '@angular/core/testing';

import { PdfAnalyzerService } from './pdf-analyzer.service';

describe('PdfAnalyzerService', () => {
  let service: PdfAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
